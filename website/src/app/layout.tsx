import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from '../components/posthog/providers'
import { Suspense } from 'react'
import { PostHogPageView } from '../components/posthog/posthog-pageview'

export const metadata: Metadata = {
  title: "LR MOURÃO - soldadura e formação",
  description: "LR MOURÃO - soldadura e formação",
  keywords: "LR MOURÃO, formação, soldadura, welding, training",
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
    description: "Situado na região Centro, em Leiria, LR Mourão oferece serviços de Soldadura, Formação, Certificação, Consultadoria, Inspecção e Planeamento.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/lrmourao-logo.svg" />
        <link rel="icon" href="/lrmourao-logo.svg" />
      </head>
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
