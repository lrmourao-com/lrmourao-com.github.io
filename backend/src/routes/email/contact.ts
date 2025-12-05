import { type Request, type Response } from 'express';
import { z } from 'zod';
import path from 'path';
import type Mail from 'nodemailer/lib/mailer';
import { createTransporter, renderEmailTemplate } from '../../services/email-service.js';
import { getEmailTranslations } from '../../i18n/email-translations.js';

// Zod schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  phone: z.string().optional().or(z.literal('')),
  message: z.string().min(10),
  locale: z.string().optional(),
});

export const contactHandler = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const result = contactFormSchema.safeParse(req.body);
    
    if (!result.success) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: result.error.issues 
      });
    }

    const { name, email, phone, message, locale, subject } = result.data;
    const transporter = createTransporter();
    const timestamp = new Date().toLocaleString();
    
    // Resolve logo path relative to the backend root (assuming process.cwd() is backend root)
    // Use the local backend copy of the logo since the website folder might not be available in production
    const logoPath = path.resolve(process.cwd(), 'assets/images/lrmourao-logo.png');

    // 1. Send notification to admin
    // Use the user's locale to determine the language of the notification (or default to 'en')
    const translations = getEmailTranslations(locale);
    
    // Prepare the reply button text with interpolated name

    const notificationHtml = await renderEmailTemplate('contact-notification', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp,
      locale: locale || 'en',
      admin_reply_subject: `${translations.admin_reply_subject} - ${subject}`, // Only pass the subject translation
    });

    const adminMailOptions: Mail.Options = {
      from: `"LR Mourão" <${process.env.EMAIL_FROM}>`,
      to: process.env.CONTACT_NOTIFICATION_EMAIL || process.env.EMAIL_FROM, // Send to configured admin email or fallback to sender
      replyTo: email,
      subject: `New Contact Form Submission - ${subject}`,
      html: notificationHtml,
      attachments: [{
        filename: 'lrmourao-logo.png',
        path: logoPath,
        cid: 'logo'
      }]
    };

    await transporter.sendMail(adminMailOptions);
    console.log(`Notification email sent for contact from: ${email}`);

    // 2. Send confirmation to user (Localized)
    // We already have the translations for the correct locale
    
    // LiquidJS handles {{ name }} interpolation in the template, but our greeting string also has {{ name }}
    // We need to render the greeting string with the name first, OR pass name to template and let template handle it.
    // The current template uses {{ greeting }} which is "Hello {{ name }}". 
    // If we pass "Hello {{ name }}" as a string variable to Liquid, Liquid won't recursively render it by default unless we use specific filters or double render.
    // It's easier to interpolate the name here in the backend.
    
    const greeting = translations.greeting.replace('{{ name }}', name);
    
    const confirmationHtml = await renderEmailTemplate('contact-confirmation', {
      ...translations, // Spread all translation strings
      greeting, // Override greeting with interpolated name
      locale: locale || 'en',
    });

    const userMailOptions: Mail.Options = {
      from: `"LR Mourão" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: translations.title,
      html: confirmationHtml,
      attachments: [{
        filename: 'lrmourao-logo.png',
        path: logoPath,
        cid: 'logo'
      }]
    };

    await transporter.sendMail(userMailOptions);
    console.log(`Confirmation email sent to: ${email} (Locale: ${locale})`);

    res.json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error: any) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      error: 'Failed to process contact form submission',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
