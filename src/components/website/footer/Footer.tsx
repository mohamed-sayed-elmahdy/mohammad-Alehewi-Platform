import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import BrandLogo from "@/components/website/BrandLogo";
import FooterAccreditations from "@/components/website/footer/FooterAccreditations";
import FooterLinksCard from "@/components/website/footer/FooterLinksCard";
import PrimaryButton from "@/components/website/navbar/PrimaryButton";

import {
  categories,
  navigation,
  officialLinks,
  socialLinks,
} from "@/constants/footer";

import {
  FaLocationDot,
  FaPhone,

  FaRegEnvelope,
} from "react-icons/fa6";

import {
  PhoneCall,
  Plane,
} from "lucide-react";
function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-alexandria text-[21px] font-semibold text-(--color-accent)">
      {children}
      <span className="mx-auto mt-4 block h-px w-full bg-(--color-accent)" />
    </h2>
  );
}

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("Footer");
  const tNavigation = useTranslations("Navigation");
  const translatedNavigation = navigation.map(({ messageKey, ...item }) => ({
    ...item,
    label: tNavigation(messageKey),
  }));
  const translatedCategories = categories.map(({ title, href, icon }) => ({
    href,
    icon,
    label: title[locale === "en" ? "en" : "ar"],
  }));
  const translatedOfficialLinks = officialLinks.map(
    ({ messageKey, ...item }) => ({
      ...item,
      label: t(messageKey),
    })
  );

  const footerColumns = [
    { title: t("usefulLinks"), items: translatedOfficialLinks },
    { title: t("featuredCategories"), items: translatedCategories },
    { title: t("explore"), items: translatedNavigation },
  ];

  return (
    <footer className="mt-6 overflow-hidden border-t border-white/20 bg-[#07111e] text-(--color-text)">
      <div className="mx-auto px-6 pt-12 sm:px-10 lg:px-14 xl:px-[72px]">
        <div className="grid gap-12 text-center md:grid-cols-2 md:text-start xl:grid-cols-[1.05fr_1.3fr_.92fr_.92fr_1.08fr] xl:items-start xl:gap-9">
          <section className="order-1">
            <FooterTitle>
              <span className="inline-flex items-center gap-2">
                {t("contact")}
                <span className="inline-flex items-center gap-1.5 text-(--color-accent)">
            
                  <PhoneCall aria-hidden="true" className="size-5" />
             
                </span>
              </span>
            </FooterTitle>

            <p className="mt-6 text-[16px] leading-9 text-slate-200">
              {t("invitation")}
            </p>

            <address className="mt-4 space-y-6 not-italic text-[15px] text-slate-200">
              <a
                href="mailto:Alaqari2006@hotmail.com"
                className="flex items-center justify-center gap-4 transition hover:text-(--color-accent) md:justify-start"
              >
                <FaRegEnvelope aria-hidden="true" className="shrink-0 text-xl text-(--color-accent)" />
                <span dir="ltr">Alaqari2006@hotmail.com</span>
              </a>

              <a
                href="tel:+00966551946666"
                className="flex items-center justify-center gap-4 transition hover:text-(--color-accent) md:justify-start"
              >
                <FaPhone aria-hidden="true" className="shrink-0 text-xl text-(--color-accent)" />
                <span dir="ltr">00966 55 194 6666</span>
              </a>

              <p className="flex items-center justify-center gap-4 md:justify-start">
                <FaLocationDot aria-hidden="true" className="shrink-0 text-xl text-(--color-accent)" />
                {t("location")}
              </p>
            </address>

            <PrimaryButton
              href="/request-visit"
              ariaLabel={t("requestVisit")}
              animation="group-hover:animate-plane-fly"
              className="mt-6 px-2 inline-flex items-center gap-2"
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
          </section>

          {footerColumns.map((column) => (
            <FooterLinksCard
              key={column.title}
              title={column.title}
              items={column.items}
              className="order-4 md:order-2 xl:order-3"
            />
          ))}

          <section className="order-5 text-center">
            <Link
              href="/"
              aria-label={t("homeLabel")}
              className="inline-flex flex-col items-center"
            >
              <BrandLogo
                width={110}
                height={110}
                className="h-[94px] w-auto object-contain"
              />

              <span className="mt-1 text-[16px] text-slate-100">
                {t("brandRole")}
              </span>

              <strong className="font-alexandria mt-1 text-[25px] leading-none">
                {t("brandName")}
              </strong>

              <span className="mt-7 flex items-center gap-2 text-(--color-accent)">
                <i className="h-px w-16 bg-(--color-accent)/30" />

                <span className="rotate-45 border border-(--color-accent) p-1">
                  <i className="block h-1 w-1 bg-(--color-accent)" />
                </span>

                <i className="h-px w-16 bg-(--color-accent)/30" />
              </span>
            </Link>

            <p className="mx-auto mt-8 max-w-62.5 text-[15px] leading-8 text-slate-300">
              {t("description")}
            </p>

            <p className="mt-12 font-alexandria text-[16px] font-medium text-(--color-accent)">
              {t("follow")}
            </p>

            <nav
              aria-label={t("socialLinksLabel")}
              className="mt-7 flex justify-center gap-4"
            >
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="
                      flex size-[55px]
                      items-center
                      justify-center
                      rounded-full
                      border border-(--color-accent)/75
                      text-[23px]
                      text-slate-100
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-(--color-accent)
                      hover:text-(--color-accent)
                    "
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
          </section>
        </div>

        <FooterAccreditations />
      </div>
    </footer>
  );
}
