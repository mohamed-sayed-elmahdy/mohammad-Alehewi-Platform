import Image from "next/image";
import {
  ChartNoAxesCombined,
  MapPin,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const methods = [
  { key: "visit", icon: MapPin },
  { key: "experience", icon: UtensilsCrossed },
  { key: "review", icon: Star },
  { key: "improve", icon: ChartNoAxesCombined },
] as const;

export function AboutHero() {
  const isEnglish = useLocale() === "en";
  const t = useTranslations("About.hero");

  return (
    <section className="mb-3 bg-[url('/hero7.png')] bg-position-[700px_-420px] 
     bg-no-repeat relative isolate min-h-[clamp(330px,33vw,630px)] overflow-hidden">
      <div className="relative z-10 mx-auto grid min-h-[inherit] max-w-[1780px] grid-cols-1 md:grid-cols-[40%_60%]">
        <div className="relative min-h-92.5  md:min-h-0 ">
          <Image
            src="/mohamedwhite1.png"
            alt={t("alt")}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 40vw"
            className="z-20 object-contain object-bottom"
          />
        </div>

        <div className="z-20 flex min-h-92.5 flex-col items-center justify-center rounded-s-full border-s-4 border-(--color-accent)/85 bg-(--color-background) px-5 pb-8 pt-12 text-center md:py-12 md:pt-16 sm:px-10 lg:px-14">
          <p className="text-lg font-bold text-(--color-accent) sm:text-3xl lg:text-5xl">
            {t("eyebrow")}
          </p>
          <h1
            className={`mt-3 text-balance font-bold leading-[1.4] tracking-tight text-(--color-text) sm:mt-4 ${
              isEnglish
                ? "text-xl sm:text-2xl lg:text-[clamp(2rem,3.5vw,4rem)]"
                : "text-xl sm:text-3xl lg:text-[clamp(2.2rem,4vw,4.5rem)]"
            }`}
          >
            {t("title")}
          </h1>
          <p className="mt-3 text-sm leading-7 text-(--color-secondary-text) sm:mt-4 sm:text-lg sm:leading-8 lg:text-2xl lg:leading-10">
            {t("description")}
          </p>
          <div className="mt-6 grid w-full max-w-[500px] grid-cols-2 overflow-hidden rounded-[18px] border border-(--color-accent)/75 sm:mt-7 sm:flex sm:w-fit sm:flex-wrap md:max-w-none md:flex-nowrap">
            {methods.map(({ key, icon: Icon }, index) => (
              <div
                key={key}
                className={`flex items-center justify-center gap-1.5 px-2 py-2 text-sm font-semibold text-(--color-text) sm:gap-2 sm:px-4 sm:py-3 md:px-4 ${
                  isEnglish ? "md:text-sm lg:text-base" : "md:text-base lg:text-xl"
                } ${
                  index > 0
                    ? "border-s border-(--color-accent)/50"
                    : ""
                } ${index > 1 ? "border-t border-(--color-accent)/50 sm:border-t-0" : ""}`}
              >
                <Icon aria-hidden="true" className="size-4 shrink-0 text-(--color-accent) sm:size-5 lg:size-6" />
                {t(key)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}