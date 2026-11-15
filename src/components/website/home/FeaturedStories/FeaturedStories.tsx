import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StorySlider from "./StorySlider";

export default function FeaturedStories() {
  const locale = useLocale() === "en" ? "en" : "ar";
  const t = useTranslations("Home.featuredStories");

  return (
    <section className="relative overflow-hidden border-y border-[#a66b25]/30 bg-[#07111e] py-20 text-white sm:py-28" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_50%_0%,rgba(31,62,87,0.24),transparent_39%),radial-gradient(circle_at_100%_55%,rgba(156,91,23,0.09),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-5 text-sm font-medium text-[#e9ae4d]">
            <span className="h-px w-24 bg-[#9f6926]/60" />
            <span>{t("eyebrow")}</span>
            <span className="h-px w-24 bg-[#9f6926]/60" />
          </div>
          <span className="mx-auto mt-4 block h-1.5 w-1.5 rotate-45 bg-[#d9a048]" />
          <h2 className="mt-4 font-alexandria text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{t("title")}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{t("description")}</p>
          <Link href="/stories" className="mt-7 inline-flex items-center gap-3 rounded-lg border border-[#b77b2b] px-6 py-3 text-sm font-semibold text-[#f3c15c] transition hover:bg-[#f3c15c] hover:text-[#07111e]">
            {t("viewAll")} {locale === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </Link>
        </header>
        <StorySlider />
      </div>
    </section>
  );
}
