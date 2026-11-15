import Image from "next/image";
import { useTranslations } from "next-intl";

// Future API candidate: the list of visited countries may grow or change.
const countries = [
  {
    code: "SA",
    flag: "/flags/sa.svg",
  },
  {
    code: "EG",
    flag: "/flags/eg.svg",
  },
  {
    code: "TR",
    flag: "/flags/tr.svg",
  },
  {
    code: "GE",
    flag: "/flags/ge.svg",
  },
] as const;

export function GlobalJourneys() {
  const tAbout = useTranslations("About");
  const tCountries = useTranslations("Countries");

  return (
    <section className="rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-5 sm:p-8 lg:p-10">
      <h2 className="font-alexandria text-center text-xl font-bold text-(--color-accent) sm:text-2xl lg:text-3xl">
        {tAbout("globalJourneys")}
      </h2>

      <div className="mt-7 grid grid-cols-2 gap-5 sm:mt-9 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-5">
        {countries.map(({ flag, code }) => {
          const name = tCountries(code);

          return (
            <div key={code} className="flex flex-col items-center text-center">
              <div className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-(--color-accent)/30 bg-(--color-background)/50 shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:size-18 md:size-20">
                <Image
                  src={flag}
                  alt={tAbout("flagAlt", { country: name })}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-3 text-sm font-medium text-(--color-secondary-text) sm:mt-4 sm:text-base lg:text-lg">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}