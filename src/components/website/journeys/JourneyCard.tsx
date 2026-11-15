import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CalendarDays, MapPin, MapPinned } from "lucide-react";
import type { Journey } from "@/types/website";
import { getJourneyLocationLabel } from "@/data/journeys";

type JourneyCardProps = {
  journey: Journey;
};

export default function JourneyCard({ journey }: JourneyCardProps) {
  const locale = useLocale() === "en" ? "en" : "ar";
  const t = useTranslations("Journeys");
  const location = getJourneyLocationLabel(journey, locale);
  const title = journey.title[locale];
  const city = journey.city?.[locale] ?? journey.country[locale];
  const placesCount = t("placesCount", { count: journey.placesCount });

  return (
    <article
      className={`group relative h-[245px] overflow-hidden rounded-[20px] border bg-[#060d17] shadow-[0_16px_45px_rgba(0,0,0,0.28)] transition duration-300 sm:h-[265px] ${
        journey.featured
          ? "border-(--color-accent)/60 shadow-[0_18px_48px_rgba(217,152,45,0.14)]"
          : "border-(--color-accent)/25 hover:border-(--color-accent)/55"
      } hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(0,0,0,0.42)]`}
    >
      <Link
        href={journey.href}
        aria-label={t("card.viewJourney", { title })}
        className="relative isolate block h-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent)"
      >
        <Image
          src={journey.image}
          alt={t("card.imageAlt", { title })}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="-z-20 object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,10,18,0.05)_4%,rgba(4,10,18,0.14)_30%,rgba(4,10,18,0.96)_100%)]" />

        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#08111f]/70 px-3 py-1 text-xs font-medium text-(--color-text) backdrop-blur-sm">
          {city}
        </span>
        {journey.featured ? (
          <span className="absolute right-3 top-3 rounded-full border border-(--color-accent)/50 bg-[#08111f]/75 px-3 py-1 text-xs font-semibold text-(--color-accent) backdrop-blur-sm">
            {t("featured")}
          </span>
        ) : null}

        <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-5">
          <span className="mb-1 inline-flex items-center gap-1.5 text-sm font-semibold text-(--color-accent)">
            <MapPin className="size-4" aria-hidden="true" />
            {location}
          </span>
          <h2 className="font-alexandria text-lg font-bold leading-7 text-(--color-text) sm:text-xl sm:leading-8">
            {title}
          </h2>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-(--color-secondary-text) sm:text-sm sm:leading-6">
            {journey.description[locale]}
          </p>
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/15 pt-3 text-xs text-(--color-secondary-text)">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 text-(--color-accent)" aria-hidden="true" />
              {journey.dateLabel[locale]}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPinned className="size-4 text-(--color-accent)" aria-hidden="true" />
              {placesCount}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
