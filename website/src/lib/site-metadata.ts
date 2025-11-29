import { Metadata } from "next";
import { getServerTranslation } from "@/lib/i18n-server";

// Base URL - Update this when deploying to different domains
const BASE_URL = "https://www.lrmourao.fazerweb.com";

// Indexing control - Set to false to prevent search engines from indexing
const ALLOW_INDEXING = false;

interface MetadataProps {
  lang: string;
  pageKey?: string; // e.g. 'index' to fetch 'meta.index.title'
  title?: string;
  description?: string;
}

export function constructMetadata({
  lang,
  pageKey,
  title,
  description,
}: MetadataProps): Metadata {
  const t = getServerTranslation(lang);

  // Resolve title and description
  // Priority: explicit prop > pageKey > default
  const resolvedTitle = title ||
    (pageKey ? t(`meta.${pageKey}.title`) : t("meta.default.title"));
  const resolvedDescription = description ||
    (pageKey
      ? t(`meta.${pageKey}.description`)
      : t("meta.default.description"));

  // Resolve OpenGraph specific fields if they exist in translation
  const ogTitle = pageKey ? t(`meta.${pageKey}.ogTitle`) : undefined;
  const ogDescription = pageKey ? t(`meta.${pageKey}.ogDescription`) : t("meta.default.ogDescription");
  const ogImageAlt = pageKey ? t(`meta.${pageKey}.ogImageAlt`) : undefined;

  const currentUrl = lang === "pt" ? BASE_URL : `${BASE_URL}/${lang}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: t("meta.default.keywords"),
    authors: [{ name: "Pedro Roque", url: "https://prock.dev" }],
    robots: ALLOW_INDEXING
      ? "index, follow"
      : "noindex, nofollow",

    icons: {
      icon: "/lrmourao-logo.svg",
      shortcut: "/lrmourao-logo.svg",
    },

    openGraph: {
      title: ogTitle || resolvedTitle,
      description: ogDescription || resolvedDescription,
      url: currentUrl,
      siteName: "LR Mourão",
      images: [
        {
          url: "/lrmourao-logo-opengraph.png",
          width: 1200,
          height: 630,
          alt: ogImageAlt || t("meta.index.logoAlt") || "LR Mourão",
        },
      ],
      locale: lang === "pt" ? "pt_PT" : lang,
      type: "website",
    },

    alternates: {
      languages: {
        "pt": `${BASE_URL}/`,
        "en": `${BASE_URL}/en`,
        "es": `${BASE_URL}/es`,
        "fr": `${BASE_URL}/fr`,
        "de": `${BASE_URL}/de`,
        "x-default": `${BASE_URL}/`,
      },
    },

    verification: {
      google: "GseIwNt2X7uVsHMxRRLBmgWg4VAbArFqR6p8r2yJmcg",
    },
  };
}
