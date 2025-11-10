// Email types
export interface SendEmailRequest {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  from?: string;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
}

export interface EmailResponse {
  success: boolean;
  messageId?: string;
  message?: string;
  error?: string;
  details?: string;
}

// PostHog types
export interface PostHogEvent {
  api_key: string;
  event: string;
  properties?: Record<string, any>;
  timestamp?: string;
  distinct_id?: string;
}

// Health check
export interface HealthCheckResponse {
  status: 'ok' | 'error';
  timestamp: string;
  environment: string;
}


