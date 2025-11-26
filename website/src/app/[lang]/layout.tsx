import type { Metadata } from "next";
import { I18nProvider } from '@/components/I18nProvider'
import { constructMetadata } from '@/lib/site-metadata'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return constructMetadata({ lang });
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
