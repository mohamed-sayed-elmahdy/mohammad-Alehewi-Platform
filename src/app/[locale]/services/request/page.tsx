import type { Metadata } from "next";
import { Suspense } from "react";
import ServiceRequestForm from "@/components/website/services/ServiceRequestForm";
import { createPageMetadata } from "@/lib/seo";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type ServiceRequestPageProps = PageProps<"/[locale]/services/request">;

export async function generateMetadata({
  params,
}: ServiceRequestPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Services.request" });
  const path = "/services/request";
  const metadata = createPageMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
  });

  return {
    ...metadata,
    alternates: {
      canonical: locale === "en" ? `/en${path}` : path,
      languages: {
        ar: "/services/request",
        en: "/en/services/request",
      },
    },
    openGraph: {
      ...metadata.openGraph,
      locale: locale === "en" ? "en_US" : "ar_SA",
    },
  };
}

export default async function ServiceRequestPage({
  params,
}: ServiceRequestPageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Services.request" });

  return (
    <main className="bg-(--color-background) px-5 py-12 text-(--color-text) sm:px-8 sm:py-16">
      <Suspense
        fallback={
          <p className="mx-auto max-w-3xl py-16 text-center text-(--color-secondary-text)">
            {t("loading")}
          </p>
        }
      >
        <ServiceRequestForm />
      </Suspense>
    </main>
  );
}
