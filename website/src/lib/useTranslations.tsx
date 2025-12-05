'use client';

import { useTranslation } from 'react-i18next';

/**
 * Custom hook to use translations in React client components.
 * 
 * @example
 * ```tsx
 * 'use client';
 * 
 * import { useTranslations } from '@/lib/useTranslations';
 * 
 * export function MyComponent() {
 *   const { t, i18n } = useTranslations();
 * 
 *   return (
 *     <div>
 *       <h1>{t('hello')}</h1>
 *       <p>{t('welcome')}</p>
 *       <button onClick={() => i18n.changeLanguage('pt')}>
 *         Switch to Portuguese
 *       </button>
 *       <button onClick={() => i18n.changeLanguage('en')}>
 *         Switch to English
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useTranslations() {
  return useTranslation();
}
