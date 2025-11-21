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
    const transporter = createTransporter();
    
    const testEmail = 'tinipedro@gmail.com';
    const timestamp = new Date().toLocaleString();
    
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
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">
            ✅ Test Email Successful
          </h1>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            This is a test email sent from your backend server.
          </p>
          
          <div style="background-color: #f3f4f6; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Server Information</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="padding: 5px 0;"><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</li>
              <li style="padding: 5px 0;"><strong>Timestamp:</strong> ${timestamp}</li>
              <li style="padding: 5px 0;"><strong>From:</strong> ${process.env.EMAIL_FROM}</li>
            </ul>
          </div>
          
          <p style="color: #16a34a; font-weight: bold; font-size: 18px;">
            ✅ Your email configuration is working correctly!
          </p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            This is an automated test email from your backend server.
          </p>
        </div>
      `
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

export default router;

