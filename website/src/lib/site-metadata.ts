import { Metadata } from "next";
import { getServerTranslation } from "@/lib/i18n-server";

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

  const baseUrl = "https://lrmourao.com";
  const currentUrl = lang === "pt" ? baseUrl : `${baseUrl}/${lang}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: t("meta.default.keywords"),
    authors: [{ name: "Pedro Roque", url: "https://prock.dev" }],
    robots: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true"
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
          url: "/images/Logo_original.png",
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
        "pt": "https://lrmourao.com/",
        "en": "https://lrmourao.com/en",
        "es": "https://lrmourao.com/es",
        "fr": "https://lrmourao.com/fr",
        "de": "https://lrmourao.com/de",
        "x-default": "https://lrmourao.com/",
      },
    },

    verification: {
      google: "GseIwNt2X7uVsHMxRRLBmgWg4VAbArFqR6p8r2yJmcg",
    },
  };
}
