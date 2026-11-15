
import type { Metadata } from "next";
import { MissionStatement } from "@/components/website/mission/MissionStatement";
import { createPageMetadata } from "@/lib/seo";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type MissionPageProps = PageProps<"/[locale]/mission">;

export async function generateMetadata({
  params,
}: MissionPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Mission" });
  const path = "/mission";
  const metadata = createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path,
    locale,
  });
  const siteName = locale === "en" ? "Mohammad Alehewi" : "منصة الإعلامي محمد الإحيوي";
  const pageTitle = `${t("metaTitle")} | ${siteName}`;

  return {
    ...metadata,
    title: { absolute: pageTitle },
    alternates: {
      canonical: locale === "en" ? `/en${path}` : path,
      languages: {
        ar: "/mission",
        en: "/en/mission",
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

export default function MissionPage() {
  return (
    <div className="min-h-[65vh] bg-(--color-background) text-(--color-text)">
      <div className="mx-auto flex min-h-[65vh] max-w-[1780px] items-center px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
        <MissionStatement />
      </div>
    </div>
  );
}