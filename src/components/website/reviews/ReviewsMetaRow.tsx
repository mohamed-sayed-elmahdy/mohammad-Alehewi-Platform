import type { ReviewSort } from "@/types/website";
import { useLocale, useTranslations } from "next-intl";

type ReviewsMetaRowProps = {
  sort: ReviewSort;
  onSortChange: (sort: ReviewSort) => void;
};

const sortOptions: {
  value: ReviewSort;
  key: "newest" | "oldest" | "highestRated" | "lowestRated";
}[] = [
  { value: "newest", key: "newest" },
  { value: "oldest", key: "oldest" },
  { value: "top-rated", key: "highestRated" },
  { value: "lowest-rated", key: "lowestRated" },
];

export default function ReviewsMetaRow({
  sort,
  onSortChange,
}: ReviewsMetaRowProps) {
  const locale = useLocale() === "en" ? "en" : "ar";
  const t = useTranslations("Reviews.sorting");

  return (
    <div dir={locale} className="flex flex-col gap-4 border-y border-(--color-accent)/15 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <span className="text-xs text-(--color-secondary-text)">{t("title")}</span>
        <div className="grid grid-cols-2 gap-2 sm:flex" role="group" aria-label={t("label")}>
          {sortOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={sort === option.value}
              onClick={() => onSortChange(option.value)}
              className={`min-h-10 cursor-pointer whitespace-nowrap rounded-full border px-3 py-2 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent) ${
                sort === option.value
                  ? "border-(--color-accent)/70 bg-(--color-accent)/15 text-(--color-accent)"
                  : "border-white/10 text-(--color-secondary-text) hover:border-(--color-accent)/40 hover:text-(--color-text)"
              }`}
            >
              {t(option.key)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
