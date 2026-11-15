import Image from "next/image";
import { ArrowLeft, CalendarDays, MapPin, Star } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { getReviewDateLabel, getReviewLocationLabel } from "@/lib/review-formatting";
import type { ReviewItem } from "@/types/website";

export type FeaturedReviewId =
  | "village-mall"
  | "red-sea-mall"
  | "tikka-masala"
  | "nojom-alrafahiya-chalets"
  | "almahazim-beach"
  | "green-side";

type FeaturedReview = Pick<
  ReviewItem,
  "dateISO" | "excerpt" | "href" | "id" | "images" | "city" | "country" | "rating" | "title"
> & { id: FeaturedReviewId };

type ReviewCardProps = {
  review: FeaturedReview;
  featured?: boolean;
};

export default function ReviewCard({ review, featured = false }: ReviewCardProps) {
  const locale = useLocale() === "en" ? "en" : "ar";
  const t = useTranslations("Home.featuredReviews");
  const title = review.title[locale];
  const excerpt = review.excerpt[locale];
  const location = getReviewLocationLabel(review, locale);
  const date = getReviewDateLabel(review.dateISO, locale);

  return (
    <Link
      href={review.href}
      dir={locale}
      aria-label={t("readExperienceFor", { title })}
      className={`group relative isolate flex overflow-hidden rounded-xl border border-[#a66a21] text-start shadow-[0_18px_50px_rgba(0,0,0,.25)] transition duration-500 hover:-translate-y-1 hover:border-[#e6ad48] ${
        featured ? "min-h-[440px] lg:min-h-[590px]" : "min-h-[300px] lg:min-h-[350px]"
      }`}
    >
      <Image
        src={review.images[0]}
        alt={title}
        fill
        sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020912] via-[#020912]/75 via-45% to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,9,18,.64),transparent_70%)]" />

      <div className={`relative z-10 mt-auto w-full ${featured ? "p-6 sm:p-8" : "p-5"}`}>
        <span className="inline-flex items-center gap-1 rounded border border-[#c88a2c] bg-[#030a10]/80 px-2.5 py-1 text-xs text-[#f0b64b]">
          <Star className="h-3.5 w-3.5" fill="currentColor" /> {t("badge")}
        </span>
        <div className="mt-6 flex items-center gap-3 text-sm text-[#e9b04a]">
          <span className="inline-flex items-center gap-1 font-semibold"><Star className="h-4 w-4" fill="currentColor" /> {review.rating}</span>
          <span className="h-4 w-px bg-[#d59a3b]/70" />
          <span className="inline-flex items-center gap-1 text-slate-200"><MapPin className="h-4 w-4" /> {location}</span>
        </div>
        <h3 className={`mt-4 font-alexandria font-semibold leading-relaxed text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>{title}</h3>
        <p className={`mt-2 leading-7 text-slate-300 ${featured ? "max-w-lg text-base" : "text-sm"}`}>{excerpt}</p>
        <div className="mt-5 flex items-center justify-between gap-4 text-sm">
          <span className="inline-flex items-center gap-2 text-slate-300"><CalendarDays className="h-4 w-4" /> {date}</span>
          <span className="inline-flex items-center gap-2 font-semibold text-[#efb447]">{t("readExperience")} <ArrowLeft aria-hidden="true" className="h-4 w-4 ltr:rotate-180" /></span>
        </div>
      </div>
    </Link>
  );
}
