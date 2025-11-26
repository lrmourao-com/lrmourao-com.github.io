import LRMouraoPage from './[lang]/page';
import { Metadata } from 'next';
import { I18nProvider } from '@/components/I18nProvider';
import { getServerTranslation } from '@/lib/i18n-server';

export async function generateMetadata(): Promise<Metadata> {
  const t = getServerTranslation('pt');

  return {
    title: t('meta.index.title'),
    description: t('meta.index.description'),
    keywords: t('meta.default.keywords'),
    authors: [{ name: "Vardas" }],
    robots: process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true'
      ? "index, follow"
      : "noindex, nofollow",
    verification: {
      google: "GseIwNt2X7uVsHMxRRLBmgWg4VAbArFqR6p8r2yJmcg",
    },
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
      locale: "pt_PT",
      type: "website",
    },
    alternates: {
      canonical: 'https://lrmourao.com/',
      languages: {
        'en': 'https://lrmourao.com/en',
        'es': 'https://lrmourao.com/es',
        'fr': 'https://lrmourao.com/fr',
        'de': 'https://lrmourao.com/de',
        'x-default': 'https://lrmourao.com/',
      },
    },
  };
}

export default function RootPage() {
  return (
    <I18nProvider lang="pt">
      <LRMouraoPage params={Promise.resolve({ lang: 'pt' })} />
    </I18nProvider>
  );
}
