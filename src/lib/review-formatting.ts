import type { ReviewItem } from "@/types/website";

export function getReviewLocationLabel(
  review: Pick<ReviewItem, "city" | "country">,
  locale: "ar" | "en",
) {
  return `${review.city[locale]} · ${review.country[locale]}`;
}

export function getReviewDateLabel(dateISO: string, locale: "ar" | "en") {
  const date = new Date(`${dateISO}T00:00:00.000Z`);

  return new Intl.DateTimeFormat(
    locale === "ar" ? "ar-SA-u-ca-gregory" : "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    },
  ).format(date);
}
