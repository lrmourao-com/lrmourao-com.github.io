export const LANGUAGES = [
  { code: 'pt', label: 'Português', shortLabel: 'PT', flag: '🇵🇹' },
  { code: 'en', label: 'English', shortLabel: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'Español', shortLabel: 'ES', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', shortLabel: 'FR', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', shortLabel: 'DE', flag: '🇩🇪' },
] as const;

export type LanguageCode = typeof LANGUAGES[number]['code'];

export const LANGUAGE_CODES = LANGUAGES.map(l => l.code);

