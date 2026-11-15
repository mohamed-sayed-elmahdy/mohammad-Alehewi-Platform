"use client";
import Logo from "@/components/website/navbar/Logo";
import NavLinks from "@/components/website/navbar/NavLinks";
import PrimaryButton from "@/components/website/navbar/PrimaryButton";
import MobileMenu from "@/components/website/navbar/MobileMenu";
import LanguageSwitcher from "@/components/website/navbar/LanguageSwitcher";
import { Plane } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  const navbarAbsolute = pathname === "/";

  return (
    <header className="relative z-50">
      <div
        className={`
          ${navbarAbsolute ? "absolute" : "relative"}
          top-0 left-0 w-full
          mx-auto max-w-[1600px]
          grid grid-cols-[1fr_auto] items-center
          gap-3 px-4 py-3
          sm:px-6
          lg:grid-cols-[1fr_auto_1fr]
        `}
      >
        <Logo />

        <nav
          aria-label={t("primaryNavigation")}
          className="hidden justify-center lg:flex"
        >
          <NavLinks />
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3 lg:gap-4">
          <LanguageSwitcher />

          <PrimaryButton
            href="/request-visit"
            ariaLabel={t("requestVisit")}
            animation="group-hover:animate-plane-fly"
            className="hidden sm:inline-flex"
            icon={
              <Plane
                size={18}
                strokeWidth={2.2}
                className="fill-[#f3c15c] text-[#f3c15c]"
              />
            }
          >
            <span>{t("requestVisit")}</span>
          </PrimaryButton>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}