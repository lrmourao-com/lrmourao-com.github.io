import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from '@/components/posthog/providers'
import { Suspense } from 'react'
import { PostHogPageView } from '@/components/posthog/posthog-pageview'
import { constructMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = constructMetadata({ lang: 'pt' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <PostHogProvider>
        <body className="antialiased overflow-x-clip">
          <Suspense>
            <PostHogPageView />
          </Suspense>
          {children}
        </body>
      </PostHogProvider>
    </html>
  );
}
