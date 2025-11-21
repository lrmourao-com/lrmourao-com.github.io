// TypeScript types for email template data

export interface TestEmailData {
  subject: string;
  environment: string;
  timestamp: string;
  emailFrom: string;
}

export interface WelcomeEmailData {
  name?: string;
  companyName: string;
  features?: string[];
  ctaUrl?: string;
  ctaText?: string;
}

export interface ContactFormEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  timestamp: string;
}

// Union type of all email template data
export type EmailTemplateData = 
  | TestEmailData 
  | WelcomeEmailData 
  | ContactFormEmailData
  | Record<string, any>; // Allow custom templates with any data
