import { useLocale, useTranslations } from "next-intl";

export default function HeroBadge() {
  const locale = useLocale();
  const t = useTranslations("Home.hero");

  return (
    <div dir="rtl" className="flex items-center justify-center gap-4">
      {/* Right Line */}
      <div className="flex items-center">

        <span
          dir={locale}
          className="
            h-px
            w-20
            bg-linear-to-r
            from-(--color-accent)
            via-(--color-accent)
            to-transparent
          "
        />
                <span className="h-2 w-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]" />

      </div>

      {/* Text */}
      <span
        className="
          text-lg
          font-bold
          text-(--color-accent)
        "
      >
        {t("badge")}
      </span>

      {/* Left Line */}
      <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]" />

        <span
          className="
            h-px
            w-20
            bg-linear-to-l
            from-(--color-accent)
            via-(--color-accent)
            to-transparent
          "
        />

      </div>
    </div>
  );
}