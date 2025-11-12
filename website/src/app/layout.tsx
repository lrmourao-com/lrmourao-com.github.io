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
  robots: "noindex, nofollow, noarchive, nosnippet, noimageindex, noai, noimageai",
  verification: {
    google: "GseIwNt2X7uVsHMxRRLBmgWg4VAbArFqR6p8r2yJmcg",
  },
  openGraph: {
    url: "http://lrmourao.com/",
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
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta httpEquiv="X-Robots-Tag" content="noindex, nofollow, noarchive, nosnippet, noimageindex, noai, noimageai" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/animated_favicon.gif" type="image/gif" />
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
