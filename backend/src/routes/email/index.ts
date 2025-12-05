import express from 'express';
import { contactHandler } from './contact.js';

const router = express.Router();

// Main routes
router.post('/contact', contactHandler);

export default router;

