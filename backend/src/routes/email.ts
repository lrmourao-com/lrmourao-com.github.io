import express, { type Request, type Response } from 'express';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const router = express.Router();

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Create transporter
function createTransporter() {
  const config = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };

  if (!config.host || !config.auth.user || !config.auth.pass) {
    throw new Error('Email configuration is incomplete. Check your .env file.');
  }

  return nodemailer.createTransport(config);
}

// POST /api/email/send
router.post('/send', async (req: Request, res: Response) => {
  try {
    const { to, subject, text, html, from, replyTo, cc, bcc } = req.body;

    // Validation
    if (!to) {
      return res.status(400).json({ error: 'Recipient email (to) is required' });
    }

    if (!subject) {
      return res.status(400).json({ error: 'Subject is required' });
    }

    if (!text && !html) {
      return res.status(400).json({ error: 'Either text or html content is required' });
    }

    // Validate email addresses
    const recipients = Array.isArray(to) ? to : [to];
    for (const email of recipients) {
      if (!isValidEmail(email)) {
        return res.status(400).json({ error: `Invalid email address: ${email}` });
      }
    }

    if (replyTo && !isValidEmail(replyTo)) {
      return res.status(400).json({ error: `Invalid reply-to email address: ${replyTo}` });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email options
    const mailOptions = {
      from: from || process.env.EMAIL_FROM,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      text,
      html,
      replyTo,
      cc,
      bcc,
    };

    console.log(`Sending email to: ${mailOptions.to}`);

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    res.json({
      success: true,
      messageId: info.messageId,
      message: 'Email sent successfully'
    });

  } catch (error: any) {
    console.error('Email sending error:', error);
    
    res.status(500).json({
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// POST /api/email/test - Test email configuration
router.post('/test', async (req: Request, res: Response) => {
  try {
    const transporter = createTransporter();
    
    // Verify connection
    await transporter.verify();
    
    res.json({
      success: true,
      message: 'Email configuration is valid and connection successful'
    });
  } catch (error: any) {
    console.error('Email test error:', error);
    
    res.status(500).json({
      error: 'Email configuration test failed',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// POST /api/email/send-test - Send a test email
router.get('/send-test', async (req: Request, res: Response) => {
  try {
    const { renderEmailTemplate } = await import('../services/email-service.js');
    const transporter = createTransporter();
    
    const testEmail = 'tinipedro@gmail.com';
    const timestamp = new Date().toLocaleString();
    
    // Render the template with data
    const html = await renderEmailTemplate('test-email', {
      subject: `Test Email - ${timestamp}`,
      environment: process.env.NODE_ENV || 'development',
      timestamp,
      emailFrom: process.env.EMAIL_FROM || 'Not configured',
    });
    
    const mailOptions: Mail.Options = {
      from: process.env.EMAIL_FROM,
      to: testEmail,
      subject: `Test Email - ${timestamp}`,
      html,
    };
    
    console.log(`Sending test email to: ${testEmail}`);
    
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Test email sent successfully:', info.messageId);
    
    res.json({
      success: true,
      messageId: info.messageId,
      message: `Test email sent successfully to ${testEmail}`,
      recipient: testEmail,
      timestamp
    });
    
  } catch (error: any) {
    console.error('Test email sending error:', error);
    
    res.status(500).json({
      error: 'Failed to send test email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// POST /api/email/send-template - Generic route to send any email template
router.post('/send-template', async (req: Request, res: Response) => {
  try {
    const { renderEmailTemplate, templateExists } = await import('../services/email-service.js');
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
});

export default router;

