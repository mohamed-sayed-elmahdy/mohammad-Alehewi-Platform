import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FooterAccreditations() {
  const t = useTranslations("Footer");

  return (
    <section
      aria-label={t("officialAccreditations")}
      className="mt-10 border-t border-(--color-accent)/80 py-5"
    >
      <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-start">
        <div className="order-2 flex items-center justify-center gap-5 lg:order-1 lg:justify-start">
          <a
            href="https://gmedia.gov.sa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("mediaRegulator")}
            className="transition-opacity hover:opacity-80"
          >
            <Image
              src="/media-regulation-logo-white.svg"
              alt={t("mediaRegulator")}
              width={190}
              height={74}
              className="h-auto w-[145px] sm:w-[170px] text-white!"
            />
          </a>

          <span aria-hidden="true" className="h-10 w-px bg-white/20" />

          <a
            href="https://www.vision2030.gov.sa/ar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("saudiVision")}
            className="transition-opacity hover:opacity-80"
          >
            <Image
              src="/vision2030.webp"
              alt={t("saudiVision")}
              width={150}
              height={90}
              className="h-auto w-[115px] sm:w-[135px]"
            />
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mt-2 flex flex-col items-center gap-2 text-sm text-slate-200 sm:flex-row sm:gap-4 lg:justify-end">
            <p>
              {t("professionalRegistration")}{" "}
              <span dir="ltr" className="font-semibold tracking-wide text-slate-50">
                553901
              </span>
            </p>
            <span aria-hidden="true" className="hidden h-4 w-px bg-white/25 sm:block" />
            <p>
              {t("freelanceDocument")}{" "}
              <span dir="ltr" className="font-semibold tracking-wide text-slate-50">
                FL-604436977
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
