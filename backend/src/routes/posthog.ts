import express from 'express';
import { createProxyMiddleware, fixRequestBody, type Options } from 'http-proxy-middleware';
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
    proxyReq: (proxyReq, req, res) => {
      console.log(`[PostHog Proxy] Request: ${req.method} ${req.url} -> ${POSTHOG_API_URL}${proxyReq.path}`);

      // Forward original host
      if (req.headers.host) {
        proxyReq.setHeader('X-Forwarded-Host', req.headers.host);
      }

      // Forward client IP
      const clientIp = req.socket.remoteAddress;
      if (clientIp) {
        proxyReq.setHeader('X-Real-IP', clientIp);
        proxyReq.setHeader('X-Forwarded-For', clientIp);
      }

      // Remove sensitive or hop-by-hop headers
      proxyReq.removeHeader('cookie');
      proxyReq.removeHeader('connection');

      fixRequestBody(proxyReq, req);
    },
    proxyRes: (proxyRes, req, res) => {
      console.log(`[PostHog Proxy] Response: ${proxyRes.statusCode} ${req.url}`);
    },
    error: (err: Error, req: IncomingMessage, res: ServerResponse | Socket) => {
      console.error('PostHog proxy error:', err);
      // We need to cast res to any because ServerResponse doesn't have status/json methods by default
      // but in Express it does.
      const expressRes = res as any;
      
      // Check if headers have already been sent to avoid "Cannot set headers after they are sent"
      if (!expressRes.headersSent) {
        expressRes.status(500).json({
          error: 'PostHog proxy error',
          message: err.message
        });
      }
    }
  }
};

// Proxy all requests to PostHog
router.use('/', createProxyMiddleware(proxyOptions));

export default router;








