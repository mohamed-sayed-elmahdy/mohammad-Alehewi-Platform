import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { categories } from "@/data/categories";
import ReviewsHero from "@/components/website/reviews/ReviewsHero";
import ReviewsPageContent from "@/components/website/reviews/ReviewsPageContent";
import { createPageMetadata } from "@/lib/seo";

type ReviewsPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string | string[] }>;
};

export async function generateMetadata({
  params,
}: Pick<ReviewsPageProps, "params">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "ar";
  const t = await getTranslations({ locale: language, namespace: "Reviews" });

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/reviews",
    locale: language,
  });
}

export default async function ReviewsPage({
  searchParams,
}: Pick<ReviewsPageProps, "searchParams">) {
  const { category } = await searchParams;
  const initialCategory =
    typeof category === "string" &&
    categories.some((item) => item.id === category)
      ? category
      : "all";

  return (
    <div className="overflow-hidden bg-(--color-background) text-(--color-text)">
      <ReviewsHero />
      <ReviewsPageContent
        key={initialCategory}
        initialCategory={initialCategory}
      />
    </div>
  );
}
