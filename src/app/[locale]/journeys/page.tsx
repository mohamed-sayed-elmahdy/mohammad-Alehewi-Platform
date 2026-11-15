import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import JourneysHero from "@/components/website/journeys/JourneysHero";
import JourneysPageContent from "@/components/website/journeys/JourneysPageContent";
import { createPageMetadata } from "@/lib/seo";

type JourneysPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: JourneysPageProps): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "ar";
  const t = await getTranslations({ locale: language, namespace: "Journeys" });

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/journeys",
    locale: language,
  });
}

export default function JourneysPage() {
  return (
    <div className="overflow-hidden bg-(--color-background) text-(--color-text)">
      <JourneysHero />
      <JourneysPageContent />
    </div>
  );
}
