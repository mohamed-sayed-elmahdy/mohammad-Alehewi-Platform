import type { MetadataRoute } from "next";
import { reviews } from "@/data/reviews";
import { SITE_ORIGIN } from "@/lib/seo";

const indexablePages = [
  "/",
  "/about",
  "/mission",
  "/journeys",
  "/reviews",
  "/services",
  "/share-feedback",
  "/services/request",
  "/request-visit",
] as const;

function getLocalizedPaths(path: string) {
  const englishPath = `/en${path === "/" ? "" : path}`;

  return {
    ar: `${SITE_ORIGIN}${path}`,
    en: `${SITE_ORIGIN}${englishPath}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...indexablePages.flatMap((path) => {
      const localizedPaths = getLocalizedPaths(path);
      const alternates = { languages: localizedPaths };

      return [
        { url: localizedPaths.ar, alternates },
        { url: localizedPaths.en, alternates },
      ];
    }),
    ...reviews.flatMap((review) => {
      const localizedPaths = getLocalizedPaths(`/reviews/${review.id}`);
      const alternates = { languages: localizedPaths };
      const images = review.images.map((image) =>
        new URL(image, SITE_ORIGIN).toString()
      );

      return [
        { url: localizedPaths.ar, alternates, images },
        { url: localizedPaths.en, alternates, images },
      ];
    }),
  ];
}
