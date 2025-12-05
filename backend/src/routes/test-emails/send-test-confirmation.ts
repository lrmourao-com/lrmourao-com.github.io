import { type Request, type Response } from 'express';
import type Mail from 'nodemailer/lib/mailer';
import path from 'path';
import { createTransporter, renderEmailTemplate } from '../../services/email-service.js';
import { getEmailTranslations } from '../../i18n/email-translations.js';

export const sendTestConfirmationHandler = async (req: Request, res: Response) => {
  try {
    const transporter = createTransporter();

    const testEmail = 'mourao@lrmourao.com';
    const name = 'Pedro Mourão';
    const locale = 'pt';
    
    const translations = getEmailTranslations(locale);
    const greeting = translations.greeting.replace('{{ name }}', name);

    // Render the template with dummy data
    const html = await renderEmailTemplate('contact-confirmation', {
      ...translations,
      greeting,
      name,
      locale,
    });

    const logoPath = path.resolve(process.cwd(), 'assets/images/lrmourao-logo.png');

    const mailOptions: Mail.Options = {
      from: process.env.EMAIL_FROM,
      to: testEmail,
      subject: translations.title,
      html,
      attachments: [{
        filename: 'lrmourao-logo.png',
        path: logoPath,
        cid: 'logo' // same cid value as in the html img src
      }]
    };

    console.log(`Sending test confirmation email to: ${testEmail}`);

    const info = await transporter.sendMail(mailOptions);

    console.log('Test confirmation email sent successfully:', info.messageId);

    res.json({
      success: true,
      messageId: info.messageId,
      message: `Test confirmation email sent successfully to ${testEmail}`,
    });

  } catch (error: any) {
    console.error('Test confirmation email sending error:', error);

    res.status(500).json({
      error: 'Failed to send test confirmation email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

