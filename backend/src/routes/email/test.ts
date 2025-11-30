import { type Request, type Response } from 'express';
import { createTransporter } from '../../services/email-service.js';

export const testConfigHandler = async (req: Request, res: Response) => {
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
};

