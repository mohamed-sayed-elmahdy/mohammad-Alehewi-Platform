import GoldActionLink from "@/components/shared/GoldActionLink";
import { useLocale, useTranslations } from "next-intl";

export default function HomeCTA() {
  const locale = useLocale();
  const t = useTranslations("Home.cta");

  return (
    <section dir={locale} className="border-t border-white/10 bg-[#08111f] py-20">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f3c15c]">{t("eyebrow")}</p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
          {t("description")}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GoldActionLink
            href="/request-visit"
          >
            {t("requestVisit")}
          </GoldActionLink>
        </div>
      </div>
    </section>
  );
}
