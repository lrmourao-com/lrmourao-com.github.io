import { type Request, type Response } from 'express';
import type Mail from 'nodemailer/lib/mailer';
import path from 'path';
import { createTransporter, renderEmailTemplate } from '../../services/email-service.js';
import { getEmailTranslations } from '../../i18n/email-translations.js';

export const sendTestNotificationHandler = async (req: Request, res: Response) => {
  try {
    const transporter = createTransporter();

    const testEmail = 'mourao@lrmourao.com';
    const timestamp = new Date().toLocaleString();
    const locale = 'pt';
    
    const translations = getEmailTranslations(locale);

    // Render the template with dummy data
    const html = await renderEmailTemplate('contact-notification', {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      company: 'Acme Corp',
      message: 'I am interested in your services. Please contact me.',
      timestamp,
      locale,
      admin_reply_subject: translations.admin_reply_subject,
    });

    const logoPath = path.resolve(process.cwd(), 'assets/images/lrmourao-logo.png');

    const mailOptions: Mail.Options = {
      from: process.env.EMAIL_FROM,
      to: testEmail,
      subject: 'New Contact Form Submission',
      html,
      attachments: [{
        filename: 'lrmourao-logo.png',
        path: logoPath,
        cid: 'logo' // same cid value as in the html img src
      }]
    };

    console.log(`Sending test notification email to: ${testEmail}`);

    const info = await transporter.sendMail(mailOptions);

    console.log('Test notification email sent successfully:', info.messageId);

    res.json({
      success: true,
      messageId: info.messageId,
      message: `Test notification email sent successfully to ${testEmail}`,
    });

  } catch (error: any) {
    console.error('Test notification email sending error:', error);

    res.status(500).json({
      error: 'Failed to send test notification email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

