import type { Metadata } from "next";

export const SITE_ORIGIN = "https://mohammad-alehewi.vercel.app";

export const SITE_NAME = "منصة الإعلامي محمد الإحيوي";

export const SITE_NAMES = {
  ar: SITE_NAME,
  en: "Mohammad Alehewi Platform",
} as const;

export const DEFAULT_SOCIAL_IMAGE = "/og/defaultOg.png";

export const DEFAULT_SOCIAL_IMAGE_ALT = {
  ar: "صورة تعريفية لمنصة الإعلامي محمد الإحيوي",
  en: "Mohammad Alehewi media platform",
} as const;

export type SiteLocale = keyof typeof SITE_NAMES;

export function getSiteName(locale: SiteLocale) {
  return SITE_NAMES[locale];
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  locale: SiteLocale;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  openGraphType?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  locale,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt,
  noIndex = false,
  openGraphType = "website",
}: PageMetadataOptions): Metadata {
  const siteName = getSiteName(locale);
  const fullTitle = `${title} | ${siteName}`;
  const localizedPath = locale === "en" ? `/en${path === "/" ? "" : path}` : path;
  const localizedImageAlt = imageAlt ?? DEFAULT_SOCIAL_IMAGE_ALT[locale];

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: localizedPath,
      languages: {
        ar: path,
        en: `/en${path === "/" ? "" : path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: localizedPath,
      siteName,
      locale: locale === "en" ? "en_US" : "ar_SA",
      type: openGraphType,
      images: [{ url: image, alt: localizedImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: image, alt: localizedImageAlt }],
    },
    robots: noIndex
      ? {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      }
      : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
  };
}