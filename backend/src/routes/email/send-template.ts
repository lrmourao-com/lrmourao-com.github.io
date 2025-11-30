import { type Request, type Response } from 'express';
import { createTransporter, renderEmailTemplate, templateExists, isValidEmail } from '../../services/email-service.js';

export const sendTemplateHandler = async (req: Request, res: Response) => {
  try {
    const { to, template, data, subject, from, replyTo, cc, bcc } = req.body;

    // Validation
    if (!to) {
      return res.status(400).json({ error: 'Recipient email (to) is required' });
    }

    if (!template) {
      return res.status(400).json({ error: 'Template name is required' });
    }

    // Check if template exists
    const exists = await templateExists(template);
    if (!exists) {
      return res.status(400).json({ error: `Template '${template}' not found` });
    }

    // Validate email addresses
    const recipients = Array.isArray(to) ? to : [to];
    for (const email of recipients) {
      if (!isValidEmail(email)) {
        return res.status(400).json({ error: `Invalid email address: ${email}` });
      }
    }

    const transporter = createTransporter();

    // Render the template with provided data
    const html = await renderEmailTemplate(template, data || {});

    const mailOptions = {
      from: from || process.env.EMAIL_FROM,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject: subject || 'No Subject', // Subject should ideally be passed or we could extract it from template if we parsed frontmatter
      html,
      replyTo,
      cc,
      bcc,
    };

    const info = await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      messageId: info.messageId,
      message: 'Email sent successfully',
    });
  } catch (error: any) {
    console.error('Template email sending error:', error);
    res.status(500).json({
      error: 'Failed to send template email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

