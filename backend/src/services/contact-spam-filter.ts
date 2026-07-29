export interface ContactSpamPayload {
  name: string;
  email: string;
  subject: string;
  phone?: string;
  message: string;
  locale?: string;
  website?: string;
  startedAt?: number;
}

export interface ContactSpamMeta {
  ip?: string;
  now?: number;
}

export interface ContactSpamResult {
  isSpam: boolean;
  score: number;
  reasons: string[];
}

interface RateEntry {
  timestamps: number[];
}

const SPAM_THRESHOLD = 4;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const IP_RATE_LIMIT = 5;
const EMAIL_RATE_LIMIT = 3;
const ipRateBuckets = new Map<string, RateEntry>();
const emailRateBuckets = new Map<string, RateEntry>();

const allowedSingleWordSubjects = new Set([
  'certificacao',
  'certificação',
  'contacto',
  'consultadoria',
  'consultoria',
  'coordenacao',
  'coordenação',
  'formacao',
  'formação',
  'informacoes',
  'informações',
  'inspecao',
  'inspeção',
  'orcamento',
  'orçamento',
  'pedido',
  'preco',
  'preço',
  'qualificacao',
  'qualificação',
  'soldadura',
  'wpqr',
]);

export function analyzeContactSubmission(
  payload: ContactSpamPayload,
  meta: ContactSpamMeta = {},
): ContactSpamResult {
  const now = meta.now ?? Date.now();
  const reasons: string[] = [];
  let score = 0;

  const addSignal = (reason: string, points: number) => {
    reasons.push(reason);
    score += points;
  };

  if (payload.website?.trim()) {
    addSignal('honeypot', 10);
  }

  if (typeof payload.startedAt === 'number') {
    const ageMs = now - payload.startedAt;
    if (ageMs >= 0 && ageMs < 1_200) {
      addSignal('too_fast', 3);
    }
  }

  if (isRandomSubject(payload.subject)) {
    addSignal('random_subject', 4);
  }

  if (looksLikeRandomToken(payload.name, { minLength: 10 })) {
    addSignal('random_name', 3);
  }

  if (looksLikeRandomToken(payload.message, { minLength: 16 })) {
    addSignal('random_message', 3);
  }

  if (isUrlHeavy(payload.message)) {
    addSignal('url_heavy_message', 4);
  }

  const ipCount = meta.ip ? recordAndCount(ipRateBuckets, meta.ip, now) : 0;
  if (ipCount > IP_RATE_LIMIT) {
    addSignal('ip_rate_limit', 4);
  }

  const emailKey = payload.email.trim().toLowerCase();
  const emailCount = emailKey ? recordAndCount(emailRateBuckets, emailKey, now) : 0;
  if (emailCount > EMAIL_RATE_LIMIT) {
    addSignal('email_rate_limit', 4);
  }

  return {
    isSpam: score >= SPAM_THRESHOLD,
    score,
    reasons,
  };
}

export function resetContactSpamFilterForTests() {
  ipRateBuckets.clear();
  emailRateBuckets.clear();
}

function isRandomSubject(subject: string): boolean {
  const normalized = normalizeSpaces(subject);
  if (!normalized) return false;

  const lower = normalized.toLocaleLowerCase();
  if (allowedSingleWordSubjects.has(lower)) return false;

  const hasNoSpaces = !/\s/.test(normalized);
  if (!hasNoSpaces) {
    return looksLikeRandomToken(normalized, { minLength: 18 });
  }

  return looksLikeRandomToken(normalized, { minLength: 10 }) || isKeyboardMash(normalized);
}

function looksLikeRandomToken(value: string, options: { minLength: number }): boolean {
  const token = normalizeSpaces(value);
  if (token.length < options.minLength) return false;
  if (/\s/.test(token)) return false;
  if (/^https?:\/\//i.test(token)) return false;

  const letters = token.replace(/[^a-z]/gi, '');
  if (letters.length < options.minLength) return false;

  const hasLower = /[a-z]/.test(token);
  const hasUpper = /[A-Z]/.test(token);
  const hasLongVowelGap = /[bcdfghjklmnpqrstvwxyz]{5,}/i.test(token);
  const caseTransitions = (token.match(/[a-z][A-Z]|[A-Z][a-z]/g) ?? []).length;

  return hasLower && hasUpper && (caseTransitions >= 3 || hasLongVowelGap);
}

function isUrlHeavy(message: string): boolean {
  const urls = message.match(/https?:\/\/|www\.|[a-z0-9-]+\.(com|net|org|info|biz|ru|cn)\b/gi) ?? [];
  if (urls.length >= 3) return true;

  const words = normalizeSpaces(message).split(' ').filter(Boolean);
  return urls.length >= 1 && words.length <= 5;
}

function recordAndCount(buckets: Map<string, RateEntry>, key: string, now: number): number {
  const cutoff = now - RATE_WINDOW_MS;
  const current = buckets.get(key)?.timestamps.filter((timestamp) => timestamp >= cutoff) ?? [];
  current.push(now);

  if (current.length === 0) {
    buckets.delete(key);
    return 0;
  }

  buckets.set(key, { timestamps: current });
  return current.length;
}

function normalizeSpaces(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

function isKeyboardMash(value: string): boolean {
  const lower = value.toLocaleLowerCase();
  if (!/^[a-z]{8,}$/.test(lower)) return false;

  return /(asdf|dsaf|sdfg|qwer|zxcv|awfawf|hjkl)/.test(lower);
}
