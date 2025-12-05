import i18n from './i18n';

/**
 * Get translations for server components.
 * 
 * @param language - The language to use (e.g., 'en', 'pt')
 * @returns Translation function
 * 
 * @example
 * ```tsx
 * import { getServerTranslations } from '@/lib/serverTranslations';
 * 
 * export default function ServerComponent() {
 *   const t = getServerTranslations('en');
 * 
 *   return (
 *     <div>
 *       <h1>{t('hello')}</h1>
 *       <p>{t('welcome')}</p>
 *     </div>
 *   );
 * }
 * ```
 * 
 * @example With dynamic language
 * ```tsx
 * import { getServerTranslations } from '@/lib/serverTranslations';
 * 
 * export default function ServerComponent({ params }: { params: { lang: string } }) {
 *   const t = getServerTranslations(params.lang);
 * 
 *   return <h1>{t('hello')}</h1>;
 * }
 * ```
 */
export function getServerTranslations(language: string = 'en') {
  // Create a fixed translation function for the specified language
  return (key: string, options?: any) => {
    return i18n.t(key, { lng: language, ...options });
  };
}

/**
 * Get the i18n instance directly for server components.
 * Useful for more advanced use cases like getting multiple languages.
 * 
 * @example
 * ```tsx
 * import { getI18nInstance } from '@/lib/serverTranslations';
 * 
 * export default function ServerComponent() {
 *   const i18n = getI18nInstance();
 *   const enText = i18n.t('hello', { lng: 'en' });
 *   const ptText = i18n.t('hello', { lng: 'pt' });
 * 
 *   return (
 *     <div>
 *       <p>EN: {enText}</p>
 *       <p>PT: {ptText}</p>
 *     </div>
 *   );
 * }
 * ```
 */
export function getI18nInstance() {
  return i18n;
}
