import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import ReviewDetailPage from "@/components/website/reviews/ReviewDetailPage";
import { reviews } from "@/data/reviews";
import { createPageMetadata } from "@/lib/seo";

type ReviewPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return reviews.map((review) => ({ slug: review.id }));
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const language = locale === "en" ? "en" : "ar";
  const t = await getTranslations({ locale: language, namespace: "Reviews" });
  const review = reviews.find((item) => item.id === slug);

  if (!review) {
    return {
      title: t("detail.notFoundTitle"),
      robots: { index: false, follow: false },
    };
  }

  const title = review.title[language];

  return createPageMetadata({
    title,
    description: review.excerpt[language],
    path: `/reviews/${review.id}`,
    locale: language,
    image: review.images[0],
    imageAlt: t("card.imageAlt", { title }),
    openGraphType: "article",
  });
}

export default async function ReviewRoute({ params }: ReviewPageProps) {
  const { slug } = await params;
  const review = reviews.find((item) => item.id === slug);

  if (!review) {
    notFound();
  }

  const relatedReviews = reviews
    .filter((item) => item.id !== review.id)
    .sort((first, second) => {
      const firstMatchesCategory = first.categoryId === review.categoryId;
      const secondMatchesCategory = second.categoryId === review.categoryId;

      if (firstMatchesCategory !== secondMatchesCategory) {
        return firstMatchesCategory ? -1 : 1;
      }

      return second.dateISO.localeCompare(first.dateISO);
    })
    .slice(0, 3);

  return <ReviewDetailPage review={review} relatedReviews={relatedReviews} />;
}