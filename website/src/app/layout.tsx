import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from '@/components/posthog/providers'
import { Suspense } from 'react'
import { PostHogPageView } from '@/components/posthog/posthog-pageview'

export const metadata: Metadata = {
  title: "LR MOURÃO - soldadura e formação",
  description: "LR MOURÃO - soldadura e formação",
  icons: {
    icon: "/lrmourao-logo.svg",
    shortcut: "/lrmourao-logo.svg",
  },
};

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
