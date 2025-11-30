import { Metadata } from "next";
import { ContactSection } from "@/components/ContactUs/ContactUs";
import { Header } from "@/components/Header";
import { Advantages } from "@/components/Advantages";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getServerTranslation } from "@/lib/i18n-server";
import { constructMetadata, BASE_URL } from "@/lib/site-metadata";

export async function generateStaticParams() {
  // Only generate pages for non-Portuguese languages
  // Portuguese is served at the root (/)
  return [
    { lang: 'en' },
    { lang: 'es' },
    { lang: 'fr' },
    { lang: 'de' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return constructMetadata({ lang, pageKey: 'index' });
}

export default async function LRMouraoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getServerTranslation(lang);

  const jsonLd = {
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
    "telephone": "+351916672566", // Matches footer contact
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
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero lang={lang} />
      <Services lang={lang} />
      <Advantages lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />

      <WhatsAppButton />
    </div>
  );
}
