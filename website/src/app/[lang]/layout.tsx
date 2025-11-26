import type { Metadata } from "next";
import { I18nProvider } from '@/components/I18nProvider'
import { getServerTranslation } from '@/lib/i18n-server'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getServerTranslation(lang);

  return {
    title: t('meta.default.title'),
    description: t('meta.default.description'),
    keywords: t('meta.default.keywords'),
    authors: [{ name: "Vardas" }],
    robots: process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true'
      ? "index, follow"
      : "noindex, nofollow",
    verification: {
      google: "GseIwNt2X7uVsHMxRRLBmgWg4VAbArFqR6p8r2yJmcg",
    },
    openGraph: {
      url: "https://lrmourao.com/",
      siteName: "LR Mourão",
      description: t('meta.default.ogDescription'),
    },
    alternates: {
      languages: {
        'pt': 'https://lrmourao.com/',
        'en': 'https://lrmourao.com/en',
        'es': 'https://lrmourao.com/es',
        'fr': 'https://lrmourao.com/fr',
        'de': 'https://lrmourao.com/de',
        'x-default': 'https://lrmourao.com/',
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <I18nProvider lang={lang}>
      {children}
    </I18nProvider>
  );
}
