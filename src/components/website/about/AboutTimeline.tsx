import { Building2, MapPin, Medal, Newspaper, PenTool } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

// Future API candidate: timeline events may be updated as new milestones are added.
const events = [
  {
    year: "2012",
    key: "mediaCareer",
    icon: PenTool,
  },

  {
    year: "2015",
    key: "newspaper",
    icon: Newspaper,
  },

  {
    year: "2017",
    key: "localGuide",
    icon: MapPin,
  },

  {
    year: "2018",
    key: "publicRelations",
    icon: Building2,
  },

  {
    year: "2025",
    key: "levelNine",
    icon: Medal,
  },
] as const;

export function AboutTimeline() {
  const locale = useLocale();
  const t = useTranslations("About.timeline");

  return (
    <section className="mx-auto max-w-[1780px] px-4 py-13 sm:px-8 lg:px-10">
      <div
        className="
          overflow-hidden rounded-[30px]
          border border-(--color-accent)
          
          px-6 py-11
          sm:px-12
        "
      >
        <div dir="rtl" className="flex items-center justify-center gap-4">
          {/* Right Line */}
          <div aria-hidden="true" className="mt-2 flex items-center">
            <span
              className="
            h-px
            w-10 sm:w-20 
            bg-linear-to-r
            from-(--color-accent)
            via-(--color-accent)
            to-transparent
          "
            />
            <span className="h-2 w-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]" />
          </div>

          {/* Text */}
          <h2 dir={locale} className="font-alexandria text-center text-lg font-bold text-(--color-accent) sm:text-2xl lg:text-3xl">
            {t("title")}
          </h2>

          {/* Left Line */}
          <div aria-hidden="true" className="mt-2 flex items-center">
            <span className="h-2 w-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]" />

            <span
              className="
            h-px
            w-10 sm:w-20 
            bg-linear-to-l
            from-(--color-accent)
            via-(--color-accent)
            to-transparent
          "
            />
          </div>
        </div>

        <div className="relative mt-11 grid gap-9 md:grid-cols-5 md:gap-6">
          <div
            className="
              absolute left-[10%] right-[10%] top-[90px]
              hidden border-t-2 border-dotted
              border-(--color-accent)
              md:block
            "
          />

          {events.map(({ year, key, icon: Icon }) => (
            <article key={year} className="relative z-10 text-center">
              <p className="text-lg font-bold sm:text-xl" dir="ltr">
                {year}
              </p>

              <div
                className="
                  mx-auto my-4 flex size-[90px]
                  items-center justify-center
                  rounded-full
                  border border-(--color-accent)
                  bg-(--color-background)
                "
              >
                <Icon aria-hidden="true" className="size-10 text-(--color-text)" />
              </div>

              <h3 className="text-base font-bold sm:text-lg">
                {t(`events.${key}.title`)}
              </h3>

              <p
                className="
                  mt-3 text-sm leading-6 sm:text-[15px] sm:leading-7 lg:text-base
                  text-(--color-secondary-text)
                "
              >
                {t(`events.${key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}