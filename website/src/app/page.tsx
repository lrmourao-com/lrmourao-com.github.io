import { Metadata } from "next";
import { ContactSection } from "./components/ContactUs/ContactUs";
import { Header } from "./components/Header";
import { Advantages } from "./components/Advantages";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { getServerTranslation } from "@/lib/i18n-server";

// Get translation function for server components
const t = getServerTranslation('pt');

export const metadata: Metadata = {
  title: t('meta.title'),
  description: t('meta.description'),
  openGraph: {
    title: t('meta.ogTitle'),
    description: t('meta.ogDescription'),
    url: "https://lrmourao.com",
    siteName: "LR Mourão",
    images: [
      {
        url: "/images/industrial-welding-sparks-and-metal-fabrication-in.jpg",
        width: 1200,
        height: 630,
        alt: t('meta.ogImageAlt'),
      },
      {
        url: "/lrmourao-logo.svg",
        width: 800,
        height: 600,
        alt: t('meta.logoAlt'),
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
};

export default function LRMouraoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": t('meta.jsonLd.name'),
    "image": "https://lrmourao.com/lrmourao-logo.svg",
    "description": t('meta.jsonLd.description'),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Leiria",
      "addressRegion": "Leiria",
      "addressCountry": "PT"
    },
    "url": "https://lrmourao.com",
    "telephone": "+351916283789",
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <ContactSection />
      <Footer />

      <WhatsAppButton />
    </div>
  );
}
