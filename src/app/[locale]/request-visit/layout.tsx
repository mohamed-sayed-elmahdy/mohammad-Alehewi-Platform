import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type RequestVisitLayoutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: RequestVisitLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "VisitRequest" });
  const path = "/request-visit";
  const siteName =
    locale === "en" ? "Mohammad Alehewi" : "منصة الإعلامي محمد الإحيوي";
  const pageTitle = `${t("metaTitle")} | ${siteName}`;
  const metadata = createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path,
    locale,
  });

  return {
    ...metadata,
    title: { absolute: pageTitle },
    alternates: {
      canonical: locale === "en" ? `/en${path}` : path,
      languages: {
        ar: "/request-visit",
        en: "/en/request-visit",
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

export default function RequestVisitLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
