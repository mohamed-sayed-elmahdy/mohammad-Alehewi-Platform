import type { JourneyCityFilter, JourneyScopeFilter } from "@/types/website";
import { useLocale, useTranslations } from "next-intl";
import { localizeJourneyPlace } from "@/data/journeys";

type JourneysMetaRowProps = {
  count: number;
  scope: JourneyScopeFilter;
  location: JourneyCityFilter;
};

export default function JourneysMetaRow({
  count,
  scope,
  location,
}: JourneysMetaRowProps) {
  const locale = useLocale() === "en" ? "en" : "ar";
  const t = useTranslations("Journeys");
  const countLabel = new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US").format(count);
  const locationLabel = location !== "all"
    ? t("inLocation", { location: localizeJourneyPlace(location, locale) })
    : scope === "saudi"
      ? t("inSaudi")
      : t("worldwide");

  return (
    <div className="flex items-center justify-between gap-4 border-y border-(--color-accent)/15 py-4 text-sm">
      <p className="font-medium text-(--color-text)">
        {t("results", { count: countLabel, location: locationLabel })}
      </p>
      <p className="shrink-0 text-(--color-secondary-text)">{t("latestFirst")}</p>
    </div>
  );
}
