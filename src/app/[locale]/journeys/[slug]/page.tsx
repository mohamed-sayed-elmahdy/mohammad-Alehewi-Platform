import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { journeys } from "@/data/journeys";
import { createPageMetadata } from "@/lib/seo";

type JourneyPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return journeys.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({
  params,
}: JourneyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const language = locale === "en" ? "en" : "ar";
  const t = await getTranslations({ locale: language, namespace: "Journeys" });
  const journey = journeys.find((item) => item.id === slug);

  if (!journey) {
    return {
      title: t("detailTitle"),
      robots: { index: false, follow: false },
    };
  }

  return createPageMetadata({
    title: journey.title[language],
    description: journey.description[language],
    path: `/journeys/${journey.id}`,
    locale: language,
    image: journey.image,
    imageAlt: t("card.imageAlt", { title: journey.title[language] }),
    noIndex: true,
    openGraphType: "article",
  });
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const { locale, slug } = await params;
  const language = locale === "en" ? "en" : "ar";
  const journey = journeys.find((item) => item.id === slug);

  if (!journey) notFound();

  const t = await getTranslations({ locale: language, namespace: "Journeys" });

  return (
    <main className="min-h-screen bg-(--color-background) px-4 py-10 text-(--color-text) sm:px-8" dir={language === "ar" ? "rtl" : "ltr"}>
      <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-(--color-accent)/20 bg-(--color-surface)/45">
        <div className="relative aspect-[16/8]">
          <Image
            src={journey.image}
            alt={t("card.imageAlt", { title: journey.title[language] })}
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-5 p-6 sm:p-10">
          <p className="text-sm font-semibold text-(--color-accent)">{journey.dateLabel[language]}</p>
          <h1 className="font-alexandria text-3xl font-bold sm:text-4xl">{journey.title[language]}</h1>
          <p className="max-w-3xl leading-8 text-(--color-secondary-text)">{journey.description[language]}</p>
          <dl className="grid gap-4 border-t border-(--color-accent)/15 pt-5 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-(--color-secondary-text)">{t("routeLabel")}</dt>
              <dd className="mt-1 font-medium">{journey.route[language]}</dd>
            </div>
            <div>
              <dt className="text-sm text-(--color-secondary-text)">{t("placesLabel")}</dt>
              <dd className="mt-1 font-medium">{t("placesCount", { count: journey.placesCount })}</dd>
            </div>
          </dl>
          <Link href="/journeys" className="inline-flex text-sm font-semibold text-(--color-accent) hover:underline">
            {t("backToJourneys")}
          </Link>
        </div>
      </article>
    </main>
  );
}