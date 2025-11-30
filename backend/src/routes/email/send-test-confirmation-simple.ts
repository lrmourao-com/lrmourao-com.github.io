import { type Request, type Response } from 'express';
import type Mail from 'nodemailer/lib/mailer';
import { createTransporter, renderEmailTemplate } from '../../services/email-service.js';

export const sendTestConfirmationSimpleHandler = async (req: Request, res: Response) => {
  try {
    const transporter = createTransporter();

    const testEmail = 'tinipedro@gmail.com';

    // Render the template with dummy data
    const html = await renderEmailTemplate('contact-confirmation-simple', {
      name: 'Pedro Mourão',
    });

    const mailOptions: Mail.Options = {
      from: process.env.EMAIL_FROM,
      to: testEmail,
      subject: 'We received your message',
      html,
      attachments: []
    };

    console.log(`Sending test simple confirmation email to: ${testEmail}`);

    const info = await transporter.sendMail(mailOptions);

    console.log('Test simple confirmation email sent successfully:', info.messageId);

    res.json({
      success: true,
      messageId: info.messageId,
      message: `Test simple confirmation email sent successfully to ${testEmail}`,
    });

  } catch (error: any) {
    console.error('Test simple confirmation email sending error:', error);

    res.status(500).json({
      error: 'Failed to send test simple confirmation email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

