import type { Metadata } from "next";
import FeedbackForm from "@/components/website/feedback/FeedbackForm";
import { createPageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type ShareFeedbackPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ShareFeedbackPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Feedback.page" });
  const path = "/share-feedback";
  const siteName =
    locale === "en" ? "Mohammad Alehewi" : "منصة الإعلامي محمد الإحيوي";
  const pageTitle = `${t("title")} | ${siteName}`;
  const metadata = createPageMetadata({
    title: t("title"),
    description: t("description"),
    imageAlt: t("metaImageAlt"),
    path,
    locale,
  });

  return {
    ...metadata,
    title: { absolute: pageTitle },
    alternates: {
      canonical: locale === "en" ? `/en${path}` : path,
      languages: {
        ar: "/share-feedback",
        en: "/en/share-feedback",
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

export default async function ShareFeedbackPage({
  params,
}: ShareFeedbackPageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Feedback.page" });

  return (
    <main
      dir={locale}
      lang={locale}
      className="relative isolate min-h-[70vh] overflow-hidden bg-(--color-background) px-5 py-12 text-(--color-text) sm:px-8 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_70%)]" />

      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="text-sm font-semibold text-(--color-accent)">
            {t("eyebrow")}
          </p>
          <h1 className="font-alexandria mt-3 text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-(--color-secondary-text) sm:text-base">
            {t("description")}
          </p>
        </header>

        <FeedbackForm />
      </div>
    </main>
  );
}