import { Metadata } from "next";
import { ContactSection } from "./components/ContactUs/ContactUs";
import { Header } from "./components/Header";
import { Advantages } from "./components/Advantages";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { WhatsAppButton } from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "LR MOURÃO - Soldadura, Formação e Certificação",
  description: "Serviços especializados em soldadura, formação técnica, certificação de soldadores e consultoria industrial em Leiria.",
  openGraph: {
    title: "LR MOURÃO - Soldadura, Formação e Certificação",
    description: "Serviços especializados em soldadura, formação técnica, certificação de soldadores e consultoria industrial em Leiria.",
    url: "https://lrmourao.com",
    siteName: "LR Mourão",
    images: [
      {
        url: "/images/industrial-welding-sparks-and-metal-fabrication-in.jpg",
        width: 1200,
        height: 630,
        alt: "LR Mourão Soldadura",
      },
      {
        url: "/lrmourao-logo.svg",
        width: 800,
        height: 600,
        alt: "LR Mourão Logo",
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
    "name": "LR Mourão",
    "image": "https://lrmourao.com/lrmourao-logo.svg",
    "description": "Serviços especializados em soldadura, formação técnica, certificação de soldadores e consultoria industrial.",
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
