"use client";

import { AiOutlineGlobal } from "react-icons/ai";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { getPathname, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  const nextLocale = locale === "ar" ? "en" : "ar";

  const switchLocale = () => {
    const url = new URL(window.location.href);
    const localizedPath = getPathname({ href: pathname, locale: nextLocale });
    router.push(`${localizedPath}${url.search}${url.hash}`);
  };

  return (
    <button
      type="button"
      aria-label={t(locale === "ar" ? "switchToEnglish" : "switchToArabic")}
      onClick={switchLocale}
      className="group flex cursor-pointer items-center gap-1 rounded-full px-2 py-2 transition-colors duration-300"
    >
      <span className="text-sm text-(--color-text) group-hover:text-(--color-accent)">
        {locale === "ar" ? "EN" : "عربي"}
      </span>
      <AiOutlineGlobal size={18} className="text-(--color-accent)" />
    </button>
  );
}