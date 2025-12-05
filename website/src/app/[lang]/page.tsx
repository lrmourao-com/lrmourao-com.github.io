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
import { JsonLd } from "@/components/JsonLd";

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

  return (
    <div className="min-h-screen bg-white">
      <JsonLd lang={lang} />
      <Header />
      <Hero lang={lang} />
      <Services lang={lang} />
      <Advantages lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />

      <WhatsAppButton />
    </div >
  );
}
