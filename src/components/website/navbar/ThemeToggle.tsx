"use client";

import { PiSunDimFill } from "react-icons/pi";
import { useTranslations } from "next-intl";

export default function ThemeToggle() {
  const t = useTranslations("Navigation");

  return (
    <button
      type="button"
      aria-label={t("switchToLightMode")}
      className="
      flex h-7 w-7 
      cursor-pointer 
      items-center 
      justify-center 
      rounded-full border 
      border-white/30 
      text-(--color-text) 
      transition-colors 
      duration-300 
      hover:border-(--color-accent)"
    >
      <PiSunDimFill size={19} className="text-(--color-accent)" />
    </button>
  );
}