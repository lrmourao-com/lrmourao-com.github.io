# Backend Server

A TypeScript backend server with PostHog proxy and email sending functionality.

## Features

- ✅ **TypeScript** with `tsx` for seamless ESM/CommonJS abstraction
- 🔒 **Security** with Helmet and CORS
- 📊 **PostHog Proxy** - Bypass ad blockers and client-side tracking issues
- 📧 **Email Sending** - Nodemailer integration for transactional emails
- 🏥 **Health Check** endpoint
- 🔥 **Hot Reload** in development mode

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and configure your settings:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
PORT=3001
NODE_ENV=development

# PostHog
POSTHOG_API_URL=https://app.posthog.com

# Email (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

### 3. Run the Server

**Development (with hot reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

**Build TypeScript:**
```bash
npm run build
```

## API Endpoints

### Health Check
```bash
GET /health
```

### PostHog Proxy

**Forward events to PostHog:**
```bash
POST /api/posthog/*
```

This endpoint proxies all requests to PostHog, bypassing ad blockers and providing server-side tracking.

**Example usage in your frontend:**
```javascript
// Instead of directly calling PostHog
fetch('http://localhost:3001/api/posthog/capture/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    api_key: 'your_key',
    event: 'button_clicked',
    properties: { button_id: 'submit' }
  })
});
```

### Email Sending

**Send an email:**
```bash
POST /api/email/send
Content-Type: application/json

{
  "to": "recipient@example.com",
  "subject": "Hello",
  "text": "Plain text content",
  "html": "<p>HTML content</p>",
  "replyTo": "noreply@example.com"
}
```

**Test email configuration:**
```bash
POST /api/email/test
```

**Example with curl:**
```bash
curl -X POST http://localhost:3001/api/email/send \
  -H "Content-Type: application/json" \
  -d '{
    "to": "user@example.com",
    "subject": "Test Email",
    "text": "This is a test email",
    "html": "<h1>Test Email</h1><p>This is a test email</p>"
  }'
```

## Email Configuration

### Gmail Setup

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated password
3. Use this password in your `.env` as `SMTP_PASS`

### Other Email Providers

**SendGrid:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your_sendgrid_api_key
```

**Mailgun:**
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your_mailgun_user
SMTP_PASS=your_mailgun_password
```

## Technology Stack

- **Express** - Web framework
- **TypeScript** - Type safety
- **tsx** - Run TypeScript without build step (handles ESM/CommonJS)
- **Nodemailer** - Email sending
- **Axios** - HTTP client for PostHog proxy
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP logging
- **dotenv** - Environment configuration

## Project Structure

```
backend/
├── src/
│   ├── index.ts          # Main server file
│   └── routes/
│       ├── posthog.ts    # PostHog proxy routes
│       └── email.ts      # Email sending routes
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## Why tsx?

`tsx` is used instead of `ts-node` because it:
- ✅ Handles both ESM and CommonJS seamlessly
- ✅ Faster startup time
- ✅ Better support for modern TypeScript features
- ✅ No need to configure module resolution
- ✅ Works with `"type": "module"` in package.json

## Development

The server uses `tsx watch` in development mode, which automatically restarts when files change.

## Production Deployment

### Using Docker (Recommended)

**Quick start with Docker Compose:**
```bash
# Configure environment
cp .env.example .env
# Edit .env with your settings

# Start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Check health
curl http://localhost:3001/health
```

**Using Makefile (even easier):**
```bash
make build    # Build image
make run      # Start container
make logs     # View logs
make health   # Check health
make stop     # Stop container
```

**Manual Docker build:**
```bash
docker build -t backend-server .
docker run -d -p 3001:3001 --env-file .env --name backend backend-server
```

📖 **For detailed Docker deployment instructions, see [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md)**

### Using PM2 (Alternative)
```bash
npm install -g pm2
pm2 start npm --name "backend" -- start
pm2 save
```

### Direct Node.js
For production without Docker, you can either:
1. Use `npm start` (runs tsx directly)
2. Build with `npm run build` and run the compiled JavaScript

## License

MIT
