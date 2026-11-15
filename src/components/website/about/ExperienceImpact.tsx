import { Store, UserRoundCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export function ExperienceImpact() {
  const t = useTranslations("About.experienceImpact");

  return (
    <section className="min-h-full rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-5 sm:p-8 lg:p-10">
      <h2 className="font-alexandria text-center text-xl font-bold text-(--color-accent) sm:text-2xl lg:text-3xl">
        {t("title")}
      </h2>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
        <article className="rounded-[24px] border border-(--color-secondary-text)/30 bg-(--color-background)/30 p-5 text-center sm:p-7">
          <Store aria-hidden="true" className="mx-auto size-10 text-(--color-accent) sm:size-12" />
          <h3 className="mt-4 text-lg font-bold text-(--color-accent) sm:text-xl">
            {t("business")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-(--color-secondary-text) sm:mt-4 sm:text-[15px] sm:leading-8 lg:text-base">
            {t("businessDescription")}
          </p>
        </article>

        <article className="rounded-[24px] border border-(--color-secondary-text)/30 bg-(--color-background)/30 p-5 text-center sm:p-7">
          <UserRoundCheck aria-hidden="true" className="mx-auto size-10 text-(--color-accent) sm:size-12" />
          <h3 className="mt-4 text-lg font-bold text-(--color-accent) sm:text-xl">
            {t("visitor")}
          </h3>
          <p className="mt-3 text-sm leading-7 text-(--color-secondary-text) sm:mt-4 sm:text-[15px] sm:leading-8 lg:text-base">
            {t("visitorDescription")}
          </p>
        </article>
      </div>
    </section>
  );
}
