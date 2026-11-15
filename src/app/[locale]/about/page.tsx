import type { Metadata } from "next";
import { AboutHero } from "@/components/website/about/AboutHero";
import { AboutIntro } from "@/components/website/about/AboutIntro";
import { AboutTimeline } from "@/components/website/about/AboutTimeline";
import { GoogleMapsProfile } from "@/components/website/about/GoogleMapsProfile";
import { ExperienceImpact } from "@/components/website/about/ExperienceImpact";
import { GlobalJourneys } from "@/components/website/about/GlobalJourneys";
import { DigitalPresence } from "@/components/website/about/DigitalPresence";
import { createPageMetadata } from "@/lib/seo";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type AboutPageProps = PageProps<"/[locale]/about">;

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "About" });
  const path = "/about";
  const metadata = createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path,
    locale,
  });
  const siteName = locale === "en" ? "Mohammad Alehewi" : "منصة الإعلامي محمد الإحيوي";
  const pageTitle = t("metaTitle").includes(siteName)
    ? t("metaTitle")
    : `${t("metaTitle")} | ${siteName}`;

  return {
    ...metadata,
    title: { absolute: pageTitle },
    alternates: {
      canonical: locale === "en" ? `/en${path}` : path,
      languages: {
        ar: "/about",
        en: "/en/about",
      },
    },
    openGraph: {
      ...metadata.openGraph,
      title: pageTitle,
      siteName,
      locale: locale === "en" ? "en_US" : "ar_SA",
    },
    twitter: {
      ...metadata.twitter,
      title: pageTitle,
    },
  };
}

export default function AboutPage() {
  return (
    <div className="about-page overflow-hidden bg-(--color-background) text-(--color-text)">
      <AboutHero />
      <AboutIntro />
      <AboutTimeline />
      <GoogleMapsProfile />
      <div className="mx-auto max-w-[1780px] px-4 pb-7 sm:px-8 lg:px-10">
        <ExperienceImpact />
      </div>
      <div className="mx-auto grid max-w-[1780px] gap-7 px-4 pb-20 sm:px-8 lg:px-10 lg:grid-cols-2">
        <DigitalPresence />
        <GlobalJourneys />
      </div>
    </div>
  );
}
