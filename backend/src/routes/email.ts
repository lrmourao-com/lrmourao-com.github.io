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

// POST /api/email/send-test - Send a test email to toopgames@gmail.com
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
      from: '"Your Company Contact Form" <tinipedro@gmail.com>',
      to: testEmail,
      subject: `Test Email - ${timestamp}`,
      replyTo: 'toopgames@gmail.com', 
      text: `This is a test email sent from your backend server at ${timestamp}.

Server Information:
- Environment: ${process.env.NODE_ENV || 'development'}
- Timestamp: ${timestamp}

If you received this email, your email configuration is working correctly!`,
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

// Example route: Send a welcome email using template
// POST /api/email/send-welcome
router.post('/send-welcome', async (req: Request, res: Response) => {
  try {
    const { renderEmailTemplate } = await import('../services/email-service.js');
    const { to, name, features, ctaUrl, ctaText } = req.body;
    
    if (!to) {
      return res.status(400).json({ error: 'Recipient email (to) is required' });
    }
    
    if (!isValidEmail(to)) {
      return res.status(400).json({ error: `Invalid email address: ${to}` });
    }
    
    const transporter = createTransporter();
    
    // Render the welcome email template
    const html = await renderEmailTemplate('welcome', {
      name,
      companyName: 'Your Company',
      features: features || [
        'Access to your personalized dashboard',
        'Connect with our community',
        'Get personalized recommendations',
        'Track your progress and achievements',
      ],
      ctaUrl,
      ctaText,
    });
    
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      subject: 'Welcome to Your Company!',
      html,
    };
    
    const info = await transporter.sendMail(mailOptions);
    
    res.json({
      success: true,
      messageId: info.messageId,
      message: 'Welcome email sent successfully',
    });
  } catch (error: any) {
    console.error('Welcome email sending error:', error);
    res.status(500).json({
      error: 'Failed to send welcome email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Example route: Send a contact form notification using template
// POST /api/email/send-contact-notification
router.post('/send-contact-notification', async (req: Request, res: Response) => {
  try {
    const { renderEmailTemplate } = await import('../services/email-service.js');
    const { name, email, phone, company, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }
    
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: `Invalid email address: ${email}` });
    }
    
    const transporter = createTransporter();
    const timestamp = new Date().toLocaleString();
    
    // Render the contact form notification template
    const html = await renderEmailTemplate('contact-form', {
      name,
      email,
      phone,
      company,
      message,
      timestamp,
    });
    
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.CONTACT_NOTIFICATION_EMAIL || process.env.EMAIL_FROM,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html,
    };
    
    const info = await transporter.sendMail(mailOptions);
    
    res.json({
      success: true,
      messageId: info.messageId,
      message: 'Contact form notification sent successfully',
    });
  } catch (error: any) {
    console.error('Contact notification sending error:', error);
    res.status(500).json({
      error: 'Failed to send contact notification',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

export default router;

