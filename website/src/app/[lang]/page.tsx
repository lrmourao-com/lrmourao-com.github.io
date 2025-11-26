import { Metadata } from "next";
import { ContactSection } from "@/components/ContactUs/ContactUs";
import { Header } from "@/components/Header";
import { Advantages } from "@/components/Advantages";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getServerTranslation } from "@/lib/i18n-server";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getServerTranslation(lang);

  return {
    title: t('meta.index.title'),
    description: t('meta.index.description'),
    openGraph: {
      title: t('meta.index.ogTitle'),
      description: t('meta.index.ogDescription'),
      url: "https://lrmourao.com",
      siteName: "LR Mourão",
      images: [
        {
          url: "/images/industrial-welding-sparks-and-metal-fabrication-in.jpg",
          width: 1200,
          height: 630,
          alt: t('meta.index.ogImageAlt'),
        },
        {
          url: "/lrmourao-logo.svg",
          width: 800,
          height: 600,
          alt: t('meta.index.logoAlt'),
        },
      ],
      locale: lang === 'pt' ? 'pt_PT' : lang,
      type: "website",
    },
  };
}

export default async function LRMouraoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getServerTranslation(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": t('meta.index.jsonLd.name'),
    "image": "https://lrmourao.com/lrmourao-logo.svg",
    "description": t('meta.index.jsonLd.description'),
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
      <Hero lang={lang} />
      <Services lang={lang} />
      <Advantages lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />

      <WhatsAppButton />
    </div>
  );
}
