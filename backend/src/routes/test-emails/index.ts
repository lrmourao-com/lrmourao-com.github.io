import express from 'express';

import { sendTestConfirmationHandler } from './send-test-confirmation.js';
import { sendTestNotificationHandler } from './send-test-notification.js';

const router = express.Router();

// Test routes
router.get('/send-test-confirmation', sendTestConfirmationHandler);
router.get('/send-test-notification', sendTestNotificationHandler);

export default router;

