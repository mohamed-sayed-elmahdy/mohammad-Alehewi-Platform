import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import HeroTimeline from "@/components/website/home/Hero/HeroTop/HeroTimeline";
import { useTranslations } from "next-intl";

const mobileCountries = [
  { key: "sa", flag: "/flags/sa.svg" },
  { key: "eg", flag: "/flags/eg.svg" },
  { key: "tr", flag: "/flags/tr.svg" },
  { key: "ge", flag: "/flags/ge.svg" },
] as const;

export default function HeroCountries() {
  const t = useTranslations("Home.hero");

  return (
    <aside className="flex w-full flex-col items-center justify-center pe-0 lg:pe-6">
      {/* Mobile / Tablet: horizontal flags */}
      <div className="w-full lg:hidden">
        <div className="mb-4 flex items-center justify-center gap-2 text-(--color-text)">
          <span className="text-base text-(--color-accent)">
            <FaMapMarkerAlt />
          </span>
          <h3 className="text-base font-bold sm:text-lg">{t("countriesTitle")}</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {mobileCountries.map(({ key, flag }) => (
            <div key={key} className="flex flex-col items-center gap-2">
              <div className="flex size-12 items-center justify-center overflow-hidden rounded-full border border-(--color-accent)/30 bg-black/30 sm:size-14">
                <Image
                  src={flag}
                  alt={t(`countries.${key}`)}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xs text-(--color-secondary-text) sm:text-sm">
                {t(`countries.${key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: original vertical timeline */}
      <div className="hidden w-full flex-col items-center lg:flex">
        <div className="mb-4 flex items-center gap-2 pe-8 text-(--color-text)">
          <span className="text-lg text-(--color-accent)">
            <FaMapMarkerAlt />
          </span>
          <h3 className="text-lg font-bold">{t("localJourneysTitle")}</h3>
        </div>

        <div className="relative flex w-full justify-end">
          <HeroTimeline />
        </div>
      </div>
    </aside>
  );
}