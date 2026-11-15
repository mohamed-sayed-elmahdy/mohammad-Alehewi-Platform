import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/seo";

type ArticlesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ArticlesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "ar";
  const t = await getTranslations({ locale: language, namespace: "Articles" });

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/articles",
    locale: language,
    noIndex: true,
  });
}

async function ArticlesPage({ params }: ArticlesPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale === "en" ? "en" : "ar", namespace: "Articles" });

  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
}

export default ArticlesPage;