'use client';

import { useEffect, useState } from 'react';
import { LANGUAGES, LanguageCode } from '@/data/constants';

interface LanguageSuggestionProps {
  currentLang?: string;
}

export function LanguageSuggestion({ currentLang = 'pt' }: LanguageSuggestionProps) {
  const [suggestion, setSuggestion] = useState<LanguageCode | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkLanguage = async () => {
      // 1. Check if user has already dismissed or selected a language
      const savedLang = localStorage.getItem('i18nextLng');
      const suggestionDismissed = localStorage.getItem('language_suggestion_dismissed');

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
        try {
          // Using a free IP API for demonstration. In production, consider rate limits or your own backend.
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            const country = "US" 
            // data.country_code; // e.g., 'PT', 'US', 'FR'

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
      window.location.href = `/${suggestion}`;
    }
  };

  if (!isVisible || !suggestion) return null;

  const suggestedLang = LANGUAGES.find(l => l.code === suggestion);
  if (!suggestedLang) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{suggestedLang.flag}</span>
          <div className="text-sm text-slate-600">
            <p className="font-medium text-slate-800">
              {suggestion === 'en' && "It looks like you're visiting from an English-speaking region."}
              {suggestion === 'es' && "Parece que nos visitas desde una región de habla hispana."}
              {suggestion === 'fr' && "Il semble que vous nous rendiez visite depuis une région francophone."}
              {suggestion === 'de' && "Es sieht so aus, als ob Sie uns aus einer deutschsprachigen Region besuchen."}
              {suggestion === 'pt' && "Parece que nos visita de uma região de língua portuguesa."}
            </p>
            <p>
              {suggestion === 'en' && "Would you like to switch to English?"}
              {suggestion === 'es' && "¿Te gustaría cambiar a Español?"}
              {suggestion === 'fr' && "Voulez-vous passer en Français?"}
              {suggestion === 'de' && "Möchten Sie auf Deutsch wechseln?"}
              {suggestion === 'pt' && "Gostaria de mudar para Português?"}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleDismiss}
            className="flex-1 sm:flex-none px-4 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded transition-colors"
          >
            {suggestion === 'en' ? 'No, thanks' : 
             suggestion === 'es' ? 'No, gracias' :
             suggestion === 'fr' ? 'Non, merci' :
             suggestion === 'de' ? 'Nein, danke' : 'Não, obrigado'}
          </button>
          <button
            onClick={handleSwitch}
            className="flex-1 sm:flex-none px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded font-medium transition-colors whitespace-nowrap"
          >
            {suggestion === 'en' ? 'Switch to English' : 
             suggestion === 'es' ? 'Cambiar a Español' :
             suggestion === 'fr' ? 'Passer en Français' :
             suggestion === 'de' ? 'Auf Deutsch wechseln' : 'Mudar para Português'}
          </button>
        </div>
      </div>
    </div>
  );
}

