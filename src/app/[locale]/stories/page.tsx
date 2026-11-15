import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/seo";

type StoriesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: StoriesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "ar";
  const t = await getTranslations({ locale: language, namespace: "Stories" });

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/stories",
    locale: language,
    noIndex: true,
  });
}

async function StoriesPage({ params }: StoriesPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale === "en" ? "en" : "ar", namespace: "Stories" });

  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
}

export default StoriesPage;