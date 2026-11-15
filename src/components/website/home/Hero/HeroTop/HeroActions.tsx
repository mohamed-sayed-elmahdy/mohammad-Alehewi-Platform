import PrimaryButton from "@/components/website/navbar/PrimaryButton";
import { Plane } from "lucide-react";
import { MdOutlineLocationOn } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function HeroActions() {
  const t = useTranslations("Home.hero");

  return (
    <div className=" mt-5 flex flex-wrap w-full max-w-md  items-stretch justify-center gap-3 sm:mt-6 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
      <a
        href="https://maps.app.goo.gl/K5RruLyekHvbg8qx6?g_st=iw"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("exploreExperiencesLabel")}
        className="discoveryButton discoveryButton-colors min-w-38.75  relative flex items-center justify-center gap-2 rounded-[14px] px-2 sm:px-6 py-3 text-sm font-semibold text-(--color-text) sm:py-2"
      >
        {t("exploreExperiences")}
        <MdOutlineLocationOn size={20} />
      </a>

      <PrimaryButton
        href="/request-visit"
        className="justify-center px-2 sm:px-6"
        ariaLabel={t("requestVisit")}
        animation="group-hover:animate-plane-fly"
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
    </div>
  );
}