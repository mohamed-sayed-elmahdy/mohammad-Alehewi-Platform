import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { PiSnapchatLogoLight } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { categories as categoryData } from "@/data/categories";

import {
  HiBuildingOffice2,
  HiGlobeAlt,
  HiSparkles,
} from "react-icons/hi2";
import { GiPalmTree } from "react-icons/gi";
import {
  HiHome,
  HiUser,
  HiFlag,
  HiMap,
  HiStar,
  HiEnvelope,
} from "react-icons/hi2";

export const navigation = [
  {
    href: "/",
    icon: HiHome,
    messageKey: "home",
  },
  {
    href: "/about",
    icon: HiUser,
    messageKey: "about",
  },
  {
    href: "/mission",
    icon: HiFlag,
    messageKey: "mission",
  },
  {
    href: "/journeys",
    icon: HiMap,
    messageKey: "journeys",
  },
  {
    href: "/reviews",
    icon: HiStar,
    messageKey: "reviews",
  },
  {
    href: "/services",
    icon: HiBuildingOffice2,
    messageKey: "services",
  },
  {
    href: "/request-visit",
    icon: HiEnvelope,
    messageKey: "requestVisit",
  },
] as const;

export const categories = categoryData
  .filter((category) => category.showInFooter);

export const officialLinks = [
  {
    messageKey: "mediaMinistry",
    href: "https://www.media.gov.sa",
    icon: GiPalmTree,
    external: true,
  },
  {
    messageKey: "cultureMinistry",
    href: "https://www.moc.gov.sa/",
    icon: HiBuildingOffice2,
    external: true,
  },
  {
    messageKey: "saudiVision",
    href: "https://www.vision2030.gov.sa/ar/",
    icon: HiFlag,
    external: true,
  },
  {
    messageKey: "tourismAuthority",
    href: "https://www.sta.gov.sa",
    icon: HiGlobeAlt,
    external: true,
  },
  {
    messageKey: "entertainmentAuthority",
    href: "https://www.gea.gov.sa",
    icon: HiSparkles,
    external: true,
  },
  {
    messageKey: "visitSaudiPlatform",
    href: "https://www.visitsaudi.com",
    icon: HiMap,
    external: true,
  },
] as const;

export const socialLinks = [
  {
    label: "Google Maps",
    href: "https://maps.app.goo.gl/K5RruLyekHvbg8qx6?g_st=iw",
    icon: MdOutlineLocationOn,
    external: true,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@Alaqari2006",
    icon: FaTiktok,
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/noon_jeddah_rest_cafe",
    icon: FaInstagram,
    external: true,
  },
  {
    label: "Snapchat",
    href: "https://www.snapchat.com/add/Alaqari2006",
    icon: PiSnapchatLogoLight,
    external: true,
  },

  {
    label: "X",
    href: "https://x.com/Alaqari2006",
    icon: FaXTwitter,
    external: true,
  },
] as const;