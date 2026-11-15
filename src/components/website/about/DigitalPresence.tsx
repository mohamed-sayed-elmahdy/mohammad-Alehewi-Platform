import Image from "next/image";
import { useTranslations } from "next-intl";
import { socialLinks, type SocialLink } from "@/constants/social";

const socialChannelIcons = {
  "google-maps": "/social-icons/google-maps.svg",
  tiktok: "/social-icons/tiktok.svg",
  instagram: "/social-icons/instagram.svg",
  snapchat: "/social-icons/snapchat.svg",
  x: "/social-icons/x.svg",
} as const;

type SocialChannelId = keyof typeof socialChannelIcons;

function hasSocialChannelIcon(
  link: SocialLink
): link is Extract<SocialLink, { id: SocialChannelId }> {
  return link.id in socialChannelIcons;
}

const socialChannels = socialLinks
  .filter(hasSocialChannelIcon)
  .map((link) => ({
    ...link,
    icon: socialChannelIcons[link.id],
  }));

export function DigitalPresence() {
  const t = useTranslations("About");

  return (
    <section className="rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-5 sm:p-8 lg:p-10">
      <h2 className="font-alexandria text-center text-xl font-bold text-(--color-accent) sm:text-2xl lg:text-3xl">
        {t("digitalPresence")}
      </h2>

      <div className="mt-7 grid grid-cols-3 gap-x-3 gap-y-5 sm:mt-9 sm:grid-cols-5 sm:gap-5">
        {socialChannels.map(({ id, label, href, icon }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-(--color-accent)"
          >
            <Image
              width={40}
              height={40}
              src={icon}
              alt=""
              className="mx-auto size-8 text-(--color-accent) sm:size-10"
            />
            <span
              dir="ltr"
              className="mt-3 text-[13px] font-bold sm:mt-4 sm:text-sm lg:text-base"
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
