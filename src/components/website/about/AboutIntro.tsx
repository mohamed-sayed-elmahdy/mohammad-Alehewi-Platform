import { BadgeCheck, GraduationCap, MapPinned } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const credentials = [
  { title: "degree", detail: "university", icon: GraduationCap },
  { title: "license", detail: "authority", icon: BadgeCheck },
  { title: "residence", detail: "location", icon: MapPinned },
] as const;

export function AboutIntro() {
  const locale = useLocale();
  const t = useTranslations("About.intro");

  return (
    <section className="relative z-10 mx-auto -mt-3 max-w-[1780px] px-4 sm:px-8 lg:px-10">
      <div
        className="grid overflow-hidden rounded-[30px] border border-(--color-accent)/80 shadow-2xl lg:grid-cols-[340px_1fr]"
      >
        <aside
          dir={locale}
          className="m-4 rounded-[24px] border border-(--color-secondary-text)/35 p-4 text-start sm:m-6 sm:p-6"
        >
          {credentials.map(({ title, detail, icon: Icon }) => (
            <div
              key={title}
              className="flex items-center gap-4 py-4 not-last:border-b not-last:border-(--color-accent)/20 sm:gap-5 sm:py-5"
            >
              <Icon
                aria-hidden="true"
                className="size-9 shrink-0 text-(--color-accent) sm:size-12"
              />
              <div>
                <h3 className="text-sm font-bold sm:text-base lg:text-lg">
                  {t(title)}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-(--color-secondary-text) sm:text-sm sm:leading-6">
                  {t(detail)}
                </p>
              </div>
            </div>
          ))}
        </aside>

        <div className="flex min-h-65 flex-col justify-center px-5 py-9 text-center sm:min-h-77.5 sm:px-8 sm:py-12 lg:px-16">
          <div dir="rtl" className="flex items-center justify-center gap-2 sm:gap-4">
            <div aria-hidden="true" className="flex items-center">
              <span className="h-px w-8 bg-linear-to-r from-(--color-accent) via-(--color-accent) to-transparent sm:w-20" />
              <span className="size-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]" />
            </div>
            <h2 dir={locale} className="font-alexandria text-xl font-bold text-(--color-accent) sm:text-2xl lg:text-4xl">
              {t("title")}
            </h2>
            <div aria-hidden="true" className="flex items-center">
              <span className="size-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]" />
              <span className="h-px w-8 bg-linear-to-l from-(--color-accent) via-(--color-accent) to-transparent sm:w-20" />
            </div>
          </div>

          <div className="mt-5 space-y-3 text-sm leading-7 text-(--color-secondary-text) sm:mt-7 sm:space-y-4 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
            <p>{t("biographyFirst")}</p>
            <p>{t("biographySecond")}</p>
            <p>{t("biographyThird")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
