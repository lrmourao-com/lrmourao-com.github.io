import i18next from 'i18next';
import en from '@/locales/en.json';
import pt from '@/locales/pt.json';
import es from '@/locales/es.json';
import fr from '@/locales/fr.json';
import de from '@/locales/de.json';

// Create a server-side i18n instance (without React)
const i18nServer = i18next.createInstance();

i18nServer.init({
  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    },
    es: {
      translation: es,
    },
    fr: {
      translation: fr,
    },
    de: {
      translation: de,
    },
  },
  lng: 'pt', // default to Portuguese for server-side
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

/**
 * Get translation function for server components
 * @param lng - Language code (default: 'pt')
 * @returns Translation function
 */
export function getServerTranslation(lng: string = 'pt') {
  return i18nServer.getFixedT(lng);
}

export default i18nServer;
