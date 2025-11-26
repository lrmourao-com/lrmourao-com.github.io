'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const detectAndRedirect = async () => {
      // Default fallback
      let targetLang = 'pt';

      try {
        // 1. Check localStorage (if we implemented a language switcher that saves preference)
        const savedLang = localStorage.getItem('i18nextLng');
        if (savedLang && ['en', 'es', 'pt', 'fr', 'de'].includes(savedLang)) {
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
              if (['en', 'es', 'pt', 'fr', 'de'].includes(navLang)) {
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
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-600 font-medium">Redirecting...</p>
      </div>
    </div>
  );
}
