import {
  ClipboardCheck,
  MessageCircleMore,
  Share2,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

// Future API candidate: profile highlights and statistics may change over time.
const features = [
  {
    key: "methodology",
    icon: ClipboardCheck,
    border: "sm:border-e border-(--color-accent)/35",
  },
  {
    key: "reviewTone",
    icon: MessageCircleMore,
    border: "md:border-e border-(--color-accent)/35",
  },
  {
    key: "digitalReach",
    icon: Share2,
    border: "",
  },
] as const;

export function GoogleMapsProfile() {
  const locale = useLocale();
  const t = useTranslations("About.googleMaps");
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="mx-auto max-w-[1780px] px-4 py-7 sm:px-8 lg:px-10">
      <div className="rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-5 sm:p-8 lg:p-10">
        <h2 className="font-alexandria text-center text-lg font-bold leading-relaxed text-(--color-accent) sm:text-2xl lg:text-3xl">
          {t("title")}
        </h2>
        <div dir="ltr" className="mt-8 grid gap-7 lg:grid-cols-[310px_1fr]">
          <aside
            dir={direction}
            className="rounded-[26px] border border-(--color-accent)/70 bg-(--color-background)/55 p-5 text-center sm:p-7 lg:min-h-[480px]"
          >
            <p dir="ltr" className="text-lg font-medium sm:text-xl">
              {t("level")}
            </p>
            <p className="text-sm text-(--color-secondary-text) sm:text-base">
              {t("localGuide")}
            </p>
            {/* Future API candidate: Google Maps level and points can change. */}
            <div className="mx-auto my-5 flex size-24 items-center justify-center rounded-[34px] border-2 border-(--color-accent) text-5xl font-bold text-(--color-accent) sm:my-6 sm:size-28 sm:text-6xl">
              9
            </div>
            <div className="border-t border-(--color-accent)/35 pt-6">
              <p className="text-base text-(--color-accent) sm:text-lg">{t("moreThan")}</p>
              <strong
                dir="ltr"
                className="block text-4xl text-(--color-accent) sm:text-5xl"
              >
                75,000
              </strong>
              <p className="mt-2 text-lg font-bold text-(--color-accent) sm:text-xl">
                {t("points")}
              </p>
            </div>
            <p className="mt-5 text-sm leading-6 text-(--color-secondary-text) sm:mt-6 sm:leading-7">
              {t("pointsDescription")}
            </p>
          </aside>
          <div
            dir={direction}
            className="rounded-[26px] border border-(--color-accent)/35 bg-(--color-background)/25 p-4 sm:p-6"
          >
            <p className="text-center text-sm leading-7 text-(--color-secondary-text) sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              {t("description")}
            </p>
            <div className="mt-7 grid gap-5 sm:mt-9 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
              {features.map(({ key, icon: Icon, border }) => (
                <article
                  key={key}
                  className={`border-(--color-accent)/35 pt-5 text-center ${border ?? ""} md:border-t-0 md:border-l-(--color-accent)/35 md:pl-5 md:first:border-e`}
                >
                  <Icon aria-hidden="true" className="mx-auto size-11 text-(--color-accent)" />
                  <h3 className="mt-4 text-base font-bold text-(--color-accent) sm:text-lg">
                    {t(`features.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-(--color-secondary-text) sm:text-[15px] sm:leading-7 lg:text-base">
                    {t(`features.${key}.description`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
