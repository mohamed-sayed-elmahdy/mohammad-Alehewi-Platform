import BrandLogo from "@/components/website/BrandLogo";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Logo() {
  const locale = useLocale();
  const tNavigation = useTranslations("Navigation");

  return (
    <Link
      href="/"
      className="flex items-center gap-2 select-none"
      aria-label={tNavigation("logoHomeLabel")}
    >
      <BrandLogo
        width={45}
        height={45}
        priority
        className="size-9 sm:size-11"
      />
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-medium text-(--color-text) sm:text-xs">
          {tNavigation("logoRole")}
        </span>
        <p
          className={`text-base font-extrabold leading-5 text-(--color-text) sm:text-xl ${
            locale === "en" ? "lg:text-lg" : ""
          }`}
        >
          {tNavigation("logoName")}
        </p>
      </div>
    </Link>
  );
}