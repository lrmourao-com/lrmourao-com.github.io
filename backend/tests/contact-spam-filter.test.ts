import assert from 'node:assert/strict';
import { beforeEach, test } from 'node:test';
import {
  analyzeContactSubmission,
  resetContactSpamFilterForTests,
  type ContactSpamPayload,
} from '../src/services/contact-spam-filter.js';

const baseSubmission: ContactSpamPayload = {
  name: 'Pedro Mourao',
  email: 'pedro@example.com',
  subject: 'Soldadura',
  phone: '+351912345678',
  message: 'Gostaria de pedir informacoes sobre servicos de soldadura.',
  locale: 'pt',
};

beforeEach(() => {
  resetContactSpamFilterForTests();
});

test('blocks random mixed-case subjects before email is sent', () => {
  const result = analyzeContactSubmission(
    {
      ...baseSubmission,
      subject: 'RBtkZXZyeOozbGixYZsO',
    },
    { ip: '203.0.113.10', now: 1_000_000 },
  );

  assert.equal(result.isSpam, true);
  assert.match(result.reasons.join(','), /random_subject/);
});

test('blocks lowercase gibberish subjects with no spaces', () => {
  const result = analyzeContactSubmission(
    {
      ...baseSubmission,
      subject: 'dsafawfawf',
    },
    { ip: '203.0.113.11', now: 1_000_000 },
  );

  assert.equal(result.isSpam, true);
  assert.match(result.reasons.join(','), /random_subject/);
});

test('allows ordinary one-word subjects without an allowlist', () => {
  for (const [index, subject] of ['Soldadura', 'Certificacao', 'Formacao', 'WPQR', 'Orcamento', 'Disponibilidade', 'agendamento', 'reuniao'].entries()) {
    const result = analyzeContactSubmission(
      {
        ...baseSubmission,
        email: `pedro${index}@example.com`,
        subject,
      },
      { ip: `203.0.113.${subject.length}`, now: 1_000_000 },
    );

    assert.equal(result.isSpam, false, `${subject} should be allowed`);
  }
});

test('blocks submissions that fill the hidden website honeypot field', () => {
  const result = analyzeContactSubmission(
    {
      ...baseSubmission,
      website: 'https://spam.example',
    },
    { ip: '203.0.113.20', now: 1_000_000 },
  );

  assert.equal(result.isSpam, true);
  assert.match(result.reasons.join(','), /honeypot/);
});

test('blocks very fast bot-like submissions', () => {
  const result = analyzeContactSubmission(
    {
      ...baseSubmission,
      subject: 'geOBtjjJQSOrwSmDPoPFN',
      startedAt: 999_500,
    },
    { ip: '203.0.113.30', now: 1_000_000 },
  );

  assert.equal(result.isSpam, true);
  assert.match(result.reasons.join(','), /too_fast/);
});

test('blocks repeated burst submissions from the same ip', () => {
  const ip = '203.0.113.40';

  for (let index = 0; index < 5; index += 1) {
    const result = analyzeContactSubmission(
      {
        ...baseSubmission,
        email: `person${index}@example.com`,
        subject: 'Pedido de informacoes',
      },
      { ip, now: 1_000_000 + index * 1_000 },
    );

    assert.equal(result.isSpam, false, `submission ${index + 1} should pass`);
  }

  const blocked = analyzeContactSubmission(
    {
      ...baseSubmission,
      email: 'person6@example.com',
      subject: 'Pedido de informacoes',
    },
    { ip, now: 1_006_000 },
  );

  assert.equal(blocked.isSpam, true);
  assert.match(blocked.reasons.join(','), /ip_rate_limit/);
});
