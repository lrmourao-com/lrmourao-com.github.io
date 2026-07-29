import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { Request, Response } from 'express';
import { contactHandler } from '../src/routes/email/contact.js';
import { resetContactSpamFilterForTests } from '../src/services/contact-spam-filter.js';

test('spam contact submissions return silent success before SMTP is required', async () => {
  resetContactSpamFilterForTests();

  const req = {
    body: {
      name: 'PCwMQAfleoropkGTK',
      email: 'kjones@leacounty.net',
      subject: 'RBtkZXZyeOozbGixYZsO',
      phone: '+8093993749',
      message: 'geOBtjjJQSOrwSmDPoPFN',
      locale: 'pt',
    },
    headers: {},
    ip: '203.0.113.50',
    socket: {},
  } as Request;

  let statusCode = 200;
  let body: unknown;

  const res = {
    status(code: number) {
      statusCode = code;
      return this;
    },
    json(payload: unknown) {
      body = payload;
      return this;
    },
  } as Response;

  const originalWarn = console.warn;
  console.warn = () => undefined;
  try {
    await contactHandler(req, res);
  } finally {
    console.warn = originalWarn;
  }

  assert.equal(statusCode, 200);
  assert.deepEqual(body, {
    success: true,
    message: 'Message sent successfully',
  });
});
