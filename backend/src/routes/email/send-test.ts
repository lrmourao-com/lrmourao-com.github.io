import { type Request, type Response } from 'express';
import type Mail from 'nodemailer/lib/mailer';
import { createTransporter, renderEmailTemplate } from '../../services/email-service.js';

export const sendTestHandler = async (req: Request, res: Response) => {
  try {
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
};

