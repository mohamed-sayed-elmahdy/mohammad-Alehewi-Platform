import { reviews } from "@/data/reviews";
import ReviewCard from "./ReviewCard";
import type { FeaturedReviewId } from "./ReviewCard";
import GoldActionLink from "@/components/shared/GoldActionLink";
import { useLocale, useTranslations } from "next-intl";
import type { ReviewItem } from "@/types/website";

const homepageFeaturedReviewIds: readonly FeaturedReviewId[] = [
  "village-mall",
  "red-sea-mall",
  "tikka-masala",
  "nojom-alrafahiya-chalets",
  "almahazim-beach",
  "green-side",
];

function isHomepageFeaturedReview(
  review: ReviewItem,
): review is ReviewItem & { id: FeaturedReviewId } {
  return homepageFeaturedReviewIds.some((id) => id === review.id);
}

export default function FeaturedReviews() {
  const locale = useLocale();
  const t = useTranslations("Home.featuredReviews");
  const featuredReviews = reviews
    .filter(isHomepageFeaturedReview)
    .slice(0, 6);
  const [featured, cafe, hotel, ...moreReviews] = featuredReviews;

  return (
    <section dir={locale} className="bg-[#08111f] pb-16 text-white sm:pb-24">
      <div className="mx-auto max-w-360 px-5 sm:px-8">
        <div className="grid gap-3 lg:grid-cols-[1.05fr_1fr]">
          <div className="grid  gap-3">
            <header className="pb-1 pt-2 text-start">
              <h2 className="mt-5 font-alexandria text-4xl font-semibold leading-tight sm:text-5xl">{t("title")}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{t("description")}</p>
              <GoldActionLink
                href="/reviews"
                ariaLabel={t("browseAll")}
                className="mt-4"
              >
                {t("browseAll")}
              </GoldActionLink>
            </header>
            <div className="grid gap-3 sm:grid-cols-2">
              {cafe ? <ReviewCard review={cafe} /> : null}
              {hotel ? <ReviewCard review={hotel} /> : null}
            </div>
          </div>
          {featured ? <ReviewCard review={featured} featured /> : null}


        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {moreReviews.map((review) => <ReviewCard key={review.id} review={review} />)}
        </div>
      </div>
    </section>
  );
}
