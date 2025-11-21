import express from 'express';
import { createProxyMiddleware, type Options } from 'http-proxy-middleware';
import type { ClientRequest, IncomingMessage, ServerResponse } from 'http';
import type { Socket } from 'net';

const router = express.Router();

const POSTHOG_API_URL = process.env.POSTHOG_API_URL || 'https://eu.posthog.com';

const proxyOptions: Options = {
  target: POSTHOG_API_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api/posthog': '', // Remove /api/posthog prefix
  },
  on: {
    error: (err: Error, req: IncomingMessage, res: ServerResponse | Socket) => {
      console.error('PostHog proxy error:', err);
      // We need to cast res to any because ServerResponse doesn't have status/json methods by default
      // but in Express it does.
      const expressRes = res as any;
      expressRes.status(500).json({
        error: 'PostHog proxy error',
        message: err.message
      });
    }
  }
};

// Proxy all requests to PostHog
router.use('/', createProxyMiddleware(proxyOptions));

export default router;








