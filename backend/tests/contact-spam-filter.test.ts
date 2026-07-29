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
  for (const [index, subject] of ['dsafawfawf', 'qwertyuiop', 'asdfasdf'].entries()) {
    const result = analyzeContactSubmission(
      {
        ...baseSubmission,
        email: `keyboard${index}@example.com`,
        subject,
      },
      { ip: `203.0.113.${11 + index}`, now: 1_000_000 },
    );

    assert.equal(result.isSpam, true, `${subject} should be blocked`);
    assert.match(result.reasons.join(','), /random_subject/);
  }
});

test('allows ordinary one-word subjects without an allowlist', () => {
  for (const [index, subject] of [
    'Soldadura',
    'Certificacao',
    'Formacao',
    'WPQR',
    'Orcamento',
    'Disponibilidade',
    'agendamento',
    'reuniao',
    'orçamentação',
  ].entries()) {
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

test('allows unknown human-looking one-word subjects', () => {
  const result = analyzeContactSubmission(
    {
      ...baseSubmission,
      subject: 'planeamento',
    },
    { ip: '203.0.113.12', now: 1_000_000 },
  );

  assert.equal(result.isSpam, false);
  assert.equal(result.reasons.includes('random_subject'), false);
});

test('allows normal multi-word and technical subjects', () => {
  for (const [index, subject] of [
    'Pedido de informacoes',
    'ISO 3834',
    'EN 1090 certificacao',
    'Qualificacao de soldadores',
  ].entries()) {
    const result = analyzeContactSubmission(
      {
        ...baseSubmission,
        email: `technical${index}@example.com`,
        subject,
      },
      { ip: `203.0.113.${70 + index}`, now: 1_000_000 },
    );

    assert.equal(result.isSpam, false, `${subject} should be allowed`);
    assert.equal(result.reasons.includes('random_subject'), false);
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

test('allows blank honeypot values after trimming whitespace', () => {
  const result = analyzeContactSubmission(
    {
      ...baseSubmission,
      website: '   ',
    },
    { ip: '203.0.113.21', now: 1_000_000 },
  );

  assert.equal(result.isSpam, false);
  assert.equal(result.reasons.includes('honeypot'), false);
});

test('adds a too-fast signal without blocking by itself', () => {
  const result = analyzeContactSubmission(
    {
      ...baseSubmission,
      startedAt: 999_500,
    },
    { ip: '203.0.113.30', now: 1_000_000 },
  );

  assert.equal(result.isSpam, false);
  assert.match(result.reasons.join(','), /too_fast/);
});

test('blocks very fast submissions when combined with random content', () => {
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

test('does not add a too-fast signal at the timing boundary or for future timestamps', () => {
  for (const [index, startedAt] of [998_800, 1_000_500].entries()) {
    const result = analyzeContactSubmission(
      {
        ...baseSubmission,
        email: `timing${index}@example.com`,
        startedAt,
      },
      { ip: `203.0.113.${80 + index}`, now: 1_000_000 },
    );

    assert.equal(result.isSpam, false);
    assert.equal(result.reasons.includes('too_fast'), false);
  }
});

test('blocks messages that are only a link or contain many links', () => {
  for (const [index, message] of [
    'https://spam.example',
    'https://a.example https://b.example https://c.example',
  ].entries()) {
    const result = analyzeContactSubmission(
      {
        ...baseSubmission,
        email: `links${index}@example.com`,
        message,
      },
      { ip: `203.0.113.${90 + index}`, now: 1_000_000 },
    );

    assert.equal(result.isSpam, true, `${message} should be blocked`);
    assert.match(result.reasons.join(','), /url_heavy_message/);
  }
});

test('allows a normal inquiry that includes one link in context', () => {
  const result = analyzeContactSubmission(
    {
      ...baseSubmission,
      message: 'Envio mais detalhes neste link https://example.com/documento para preparar a reuniao de soldadura.',
    },
    { ip: '203.0.113.95', now: 1_000_000 },
  );

  assert.equal(result.isSpam, false);
  assert.equal(result.reasons.includes('url_heavy_message'), false);
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

test('allows same-ip submissions after the rate window expires', () => {
  const ip = '203.0.113.41';

  for (let index = 0; index < 5; index += 1) {
    const result = analyzeContactSubmission(
      {
        ...baseSubmission,
        email: `window${index}@example.com`,
        subject: 'Pedido de informacoes',
      },
      { ip, now: 1_000_000 + index * 1_000 },
    );

    assert.equal(result.isSpam, false, `submission ${index + 1} should pass`);
  }

  const afterWindow = analyzeContactSubmission(
    {
      ...baseSubmission,
      email: 'window6@example.com',
      subject: 'Pedido de informacoes',
    },
    { ip, now: 1_000_000 + 10 * 60 * 1_000 + 1 },
  );

  assert.equal(afterWindow.isSpam, false);
  assert.equal(afterWindow.reasons.includes('ip_rate_limit'), false);
});

test('blocks repeated burst submissions from the same email', () => {
  const email = 'repeat@example.com';

  for (let index = 0; index < 3; index += 1) {
    const result = analyzeContactSubmission(
      {
        ...baseSubmission,
        email,
        subject: 'Pedido de informacoes',
      },
      { ip: `203.0.113.${100 + index}`, now: 1_000_000 + index * 1_000 },
    );

    assert.equal(result.isSpam, false, `submission ${index + 1} should pass`);
  }

  const blocked = analyzeContactSubmission(
    {
      ...baseSubmission,
      email,
      subject: 'Pedido de informacoes',
    },
    { ip: '203.0.113.103', now: 1_004_000 },
  );

  assert.equal(blocked.isSpam, true);
  assert.match(blocked.reasons.join(','), /email_rate_limit/);
});
