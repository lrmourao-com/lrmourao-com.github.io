import express from 'express';
import { contactHandler } from './contact.js';
import { sendHandler } from './send.js';
import { testConfigHandler } from './test.js';
import { sendTemplateHandler } from './send-template.js';
import { sendTestHandler } from './send-test.js';
import { sendTestConfirmationHandler } from './send-test-confirmation.js';
import { sendTestConfirmationSimpleHandler } from './send-test-confirmation-simple.js';
import { sendTestNotificationHandler } from './send-test-notification.js';

const router = express.Router();

// Main routes
router.post('/contact', contactHandler);
router.post('/send', sendHandler);
router.post('/send-template', sendTemplateHandler);

// Test routes
router.post('/test', testConfigHandler);
router.get('/send-test', sendTestHandler);
router.get('/send-test-confirmation', sendTestConfirmationHandler);
router.get('/send-test-confirmation-simple', sendTestConfirmationSimpleHandler);
router.get('/send-test-notification', sendTestNotificationHandler);

export default router;

