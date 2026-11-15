import Image from "next/image";
import type { Metadata } from "next";
import GoldActionLink from "@/components/shared/GoldActionLink";
import ServicesFaq from "@/components/website/services/ServicesFaq";
import ServiceCatalog from "@/components/website/services/ServiceCatalog";
import {
  ArrowLeft,
  CircleHelp,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type ServicesPageProps = PageProps<"/[locale]/services">;

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Services" });
  const path = "/services";
  const metadata = createPageMetadata({
    title: t("title"),
    description: t("metaDescription"),
    path,
    locale,
    image: locale === "en" ? "/services1EN.jpg" : "/services1.jpg",
    imageAlt: t("hero.imageAlt"),
  });

  return {
    ...metadata,
    alternates: {
      canonical: locale === "en" ? `/en${path}` : path,
      languages: {
        ar: "/services",
        en: "/en/services",
      },
    },
    openGraph: {
      ...metadata.openGraph,
      locale: locale === "en" ? "en_US" : "ar_SA",
    },
  };
}

const contactEmail = "Alaqari2006@hotmail.com";

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Services" });
  const faqs = [
    {
      question: t("faq.canRequestOne.question"),
      answer: t("faq.canRequestOne.answer"),
    },
    {
      question: t("faq.ranking.question"),
      answer: t("faq.ranking.answer"),
    },
    {
      question: t("faq.password.question"),
      answer: t("faq.password.answer"),
    },
  ];
  const heroImage = locale === "en" ? "/services1EN.jpg" : "/services1.jpg";

  return (
    <main className="overflow-hidden bg-(--color-background) text-(--color-text)">
      <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent)">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-alexandria mt-5 max-w-2xl text-3xl font-bold leading-[1.6] sm:text-4xl lg:text-[3.25rem]">
            {t("hero.heading")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-(--color-secondary-text) sm:text-lg">
            {t("hero.description")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <GoldActionLink
              href="#services"
              className="min-h-12"
            >
              {t("hero.viewServices")}
            </GoldActionLink>
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(t("closingCta.emailSubject"))}`}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              {t("hero.contactUs")}
            </a>
          </div>
          <p className="mt-5 text-sm leading-7 text-(--color-secondary-text)/80">
            {t("hero.pricingNote")}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-135 lg:me-0">
          <div className="absolute -inset-3 rounded-[10px] border border-(--color-accent)/20" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-(--color-surface)">
            <Image
              src={heroImage}
              alt={t("hero.imageAlt")}
              width={1280}
              height={720}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>

      <ServiceCatalog />

      <section className="border-y border-(--color-accent)/15 bg-[#0b1726]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.5fr] lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-semibold text-(--color-accent)">{t("trust.eyebrow")}</p>
            <h2 className="font-alexandria mt-3 text-2xl font-bold leading-relaxed sm:text-3xl">
              {t("trust.title")}
            </h2>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {[
              t("trust.noPasswords"),
              t("trust.officialVerification"),
              t("trust.noRankingGuarantee"),
              t("trust.clearScope"),
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-(--color-secondary-text)">
                <ShieldCheck aria-hidden="true" className="mt-1 size-5 shrink-0 text-(--color-accent)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-accent)">
              <CircleHelp aria-hidden="true" className="size-4" />
              {t("faq.eyebrow")}
            </p>
            <h2 className="font-alexandria mt-3 text-2xl font-bold leading-relaxed sm:text-3xl">
              {t("faq.heading")}
            </h2>
          </div>
          <ServicesFaq items={faqs} />
        </div>
      </section>

      <section className="border-t border-white/10 bg-(--color-surface)/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-16">
          <div>
            <h2 className="font-alexandria text-xl font-bold leading-relaxed sm:text-2xl">
              {t("closingCta.title")}
            </h2>
            <p className="mt-2 text-sm leading-7 text-(--color-secondary-text)">
              {t("closingCta.description")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(t("closingCta.emailSubject"))}`}
              className="discoveryButton discoveryButton-colors relative inline-flex min-h-12 min-w-38.75 items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold text-(--color-text) transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) sm:px-6 sm:py-2"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              {t("closingCta.emailUs")}
              <ArrowLeft aria-hidden="true" className="size-5 ltr:rotate-180" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}