import BlurText from "../../../../ui/BlurText";
import { useLocale, useTranslations } from "next-intl";

function HeroHeading() {
  const locale = useLocale();
  const t = useTranslations("Home.hero");

  return (
    <div dir={locale}>
      <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-tight text-(--color-text) sm:text-4xl lg:mt-5 lg:text-5xl lg:leading-[1.15]">
        {t("titleFirstLine")}
        <br />
        <span className="text-(--color-accent)">{t("titleSecondLine")}</span>
      </h1>

      <BlurText
        text={t("description")}
        dir={locale === "ar" ? "rtl" : "ltr"}
        highlightWords={locale === "ar" ? ["أول", "سعودي"] : ["first", "Saudi"]}
        className="mt-4 max-w-3xl text-sm leading-7 text-(--color-secondary-text) sm:text-[15px] sm:leading-8 lg:mt-6 lg:text-[16px]"
      />
    </div>
  );
}

export default HeroHeading;
