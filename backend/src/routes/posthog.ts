import express, { type Request, type Response } from 'express';
import axios from 'axios';

const router = express.Router();

const POSTHOG_API_URL = process.env.POSTHOG_API_URL || 'https://app.posthog.com';
const POSTHOG_PROJECT_API_KEY = process.env.POSTHOG_PROJECT_API_KEY;

// Proxy all POST requests to PostHog
router.post('/*', async (req: Request, res: Response) => {
  try {
    if (!POSTHOG_PROJECT_API_KEY) {
      return res.status(500).json({ 
        error: 'PostHog is not configured. Please set POSTHOG_PROJECT_API_KEY in .env' 
      });
    }

    const path = req.params[0] || '';
    const posthogUrl = `${POSTHOG_API_URL}/${path}`;

    console.log(`Proxying PostHog request to: ${posthogUrl}`);

    const response = await axios.post(posthogUrl, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${POSTHOG_PROJECT_API_KEY}`,
        ...req.headers
      },
      timeout: 10000
    });

    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('PostHog proxy error:', error.message);
    
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ 
        error: 'Failed to proxy request to PostHog',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
});

// Proxy all GET requests to PostHog (for decide, feature flags, etc.)
router.get('/*', async (req: Request, res: Response) => {
  try {
    if (!POSTHOG_PROJECT_API_KEY) {
      return res.status(500).json({ 
        error: 'PostHog is not configured. Please set POSTHOG_PROJECT_API_KEY in .env' 
      });
    }

    const path = req.params[0] || '';
    const posthogUrl = `${POSTHOG_API_URL}/${path}`;

    console.log(`Proxying PostHog request to: ${posthogUrl}`);

    const response = await axios.get(posthogUrl, {
      params: req.query,
      headers: {
        'Authorization': `Bearer ${POSTHOG_PROJECT_API_KEY}`,
        ...req.headers
      },
      timeout: 10000
    });

    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('PostHog proxy error:', error.message);
    
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ 
        error: 'Failed to proxy request to PostHog',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
});

export default router;

