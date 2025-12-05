'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES, LanguageCode } from '@/data/constants';

interface LanguageSuggestionProps {
  currentLang?: string;
}

export function LanguageSuggestion({ currentLang = 'pt' }: LanguageSuggestionProps) {
  const { t } = useTranslation();
  const [suggestion, setSuggestion] = useState<LanguageCode | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkLanguage = async () => {
      // 1. Check if user has already dismissed or selected a language
      const savedLang = localStorage.getItem('i18nextLng');
      const suggestionDismissed = localStorage.getItem('language_suggestion_dismissed');

      const lastVisit = localStorage.getItem('last_visit_check');
      const TWO_WEEKS_MS = 14 * 24 * 60 * 60 * 1000;
      const now = Date.now();
      
      // Update visit time
      localStorage.setItem('last_visit_check', now.toString());

      if (suggestionDismissed || (savedLang && savedLang === currentLang)) {
        return;
      }

      // If user has a saved preference that is different from current, suggest it
      if (savedLang && savedLang !== currentLang) {
        const lang = LANGUAGES.find(l => l.code === savedLang);
        if (lang) {
          setSuggestion(lang.code);
          setIsVisible(true);
          return;
        }
      }

      // 2. Check IP/Location if no preference saved
      if (!savedLang) {
        // Check if visit is recent (within 2 weeks)
        const isRecentVisit = lastVisit && (now - parseInt(lastVisit) < TWO_WEEKS_MS);
        
        if (isRecentVisit) {
          return;
        }

        try {
          // Using a free IP API for demonstration. In production, consider rate limits or your own backend.
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            // const country = "US"
            //
            // 
            const country =  data.country_code; // e.g., 'PT', 'US', 'FR'

            const countryMap: Record<string, LanguageCode> = {
              'PT': 'pt', 'BR': 'pt',
              'ES': 'es',
              'FR': 'fr',
              'DE': 'de',
              'US': 'en', 'GB': 'en',
            };

            const targetLang = countryMap[country];

            if (targetLang && targetLang !== currentLang) {
              setSuggestion(targetLang);
              setIsVisible(true);
            } else if (!targetLang) {
              // Fallback to browser language
              const navLang = navigator.language.split('-')[0] as LanguageCode;
              const supportedLang = LANGUAGES.find(l => l.code === navLang);

              if (supportedLang && supportedLang.code !== currentLang) {
                setSuggestion(supportedLang.code);
                setIsVisible(true);
              }
            }
          }
        } catch (error) {
          console.error('Error detecting language:', error);
        }
      }
    };

    checkLanguage();
  }, [currentLang]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('language_suggestion_dismissed', 'true');
  };

  const handleSwitch = () => {
    if (suggestion) {
      localStorage.setItem('i18nextLng', suggestion);
      window.location.href = suggestion === 'pt' ? '/' : `/${suggestion}`;
    }
  };

  if (!isVisible || !suggestion) return null;

  const suggestedLang = LANGUAGES.find(l => l.code === suggestion);
  if (!suggestedLang) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-3xl drop-shadow-lg">{suggestedLang.flag}</span>
          <div className="text-sm">
            <p className="font-bold text-white text-base mb-1">
              {t('languageSuggestion.message', { lng: suggestion })}
            </p>
            <p className="text-slate-300">
              {t('languageSuggestion.question', { lng: suggestion })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleDismiss}
            className="flex-1 sm:flex-none px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
          >
            {t('languageSuggestion.dismiss', { lng: suggestion })}
          </button>
          <button
            onClick={handleSwitch}
            className="flex-1 sm:flex-none px-6 py-2.5 text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-105 whitespace-nowrap"
          >
            {t('languageSuggestion.confirm', { lng: suggestion })}
          </button>
        </div>
      </div>
    </div>
  );
}

