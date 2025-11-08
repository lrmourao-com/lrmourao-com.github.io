import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LR MOURÃO - soldadura e formação",
  description: "LR MOURÃO - soldadura e formação",
  keywords: "LR MOURÃO, formação, soldadura, welding, training",
  authors: [{ name: "Vardas" }],
  robots: "noindex, nofollow, noarchive, nosnippet, noimageindex",
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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/animated_favicon.gif" type="image/gif" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
