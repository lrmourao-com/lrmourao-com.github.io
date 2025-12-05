import { BASE_URL } from "@/lib/site-metadata";
import { getServerTranslation } from "@/lib/i18n-server";

interface JsonLdProps {
  lang: string;
}

export const JsonLd = ({ lang }: JsonLdProps) => {
  const t = getServerTranslation(lang);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": t('meta.index.jsonLd.name'),
      "alternateName": ["LRMourao", "LR Mourao", "lrmourao.com"],
      "url": BASE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": t('meta.index.jsonLd.name'),
      "image": `${BASE_URL}/lrmourao-logo.svg`,
      "description": t('meta.index.jsonLd.description'),
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Leiria",
        "addressRegion": "Leiria",
        "addressCountry": "PT"
      },
      "url": BASE_URL,
      "telephone": "+351916672566",
      "email": "geral@lrmourao.com",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
