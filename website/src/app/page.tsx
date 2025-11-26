'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LANGUAGES, LANGUAGE_CODES } from '@/lib/constants';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const detectAndRedirect = async () => {
      // Default fallback
      let targetLang = 'pt';

      try {
        // 1. Check localStorage (if we implemented a language switcher that saves preference)
        const savedLang = localStorage.getItem('i18nextLng');
        if (savedLang && LANGUAGE_CODES.includes(savedLang as any)) {
          targetLang = savedLang;
        } else {
          // 2. Check IP/Location (as requested)
          // Using a free IP API for demonstration. In production, consider rate limits.
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            const country = data.country_code; // e.g., 'PT', 'US', 'FR'

            const countryMap: Record<string, string> = {
              'PT': 'pt', 'BR': 'pt',
              'ES': 'es',
              'FR': 'fr',
              'DE': 'de',
              'US': 'en', 'GB': 'en',
            };

            if (countryMap[country]) {
              targetLang = countryMap[country];
            } else {
              // 3. Fallback to navigator.language
              const navLang = navigator.language.split('-')[0];
              if (LANGUAGE_CODES.includes(navLang as any)) {
                targetLang = navLang;
              }
            }
          }
        }
      } catch (error) {
        console.error('Error detecting language:', error);
        // Fallback to 'pt' is already set
      }

      router.push(`/${targetLang}`);
    };

    detectAndRedirect();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-8 p-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-600 font-medium">Redirecting...</p>
        </div>

        {/* Static links for crawlers and non-JS users */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <h1 className="text-xl font-bold text-slate-800">Select Language / Escolha o Idioma</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {LANGUAGES.map((lang) => (
              <a
                key={lang.code}
                href={`/${lang.code}`}
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-colors border border-slate-200"
              >
                <span className="text-2xl">{lang.flag}</span>
                <span>{lang.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
