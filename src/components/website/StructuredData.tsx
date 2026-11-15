import { getSiteName, SITE_ORIGIN, type SiteLocale } from "@/lib/seo";

type StructuredDataProps = {
  locale: SiteLocale;
};

export default function StructuredData({ locale }: StructuredDataProps) {
  const isEnglish = locale === "en";
  const personName = isEnglish ? "Mohammad Alehewi" : "محمد الإحيوي";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_ORIGIN}/#person`,
        name: personName,
        alternateName: isEnglish ? "محمد الإحيوي" : "Mohammad Alehewi",
        url: `${SITE_ORIGIN}${isEnglish ? "/en" : ""}`,
        image: `${SITE_ORIGIN}/mohamed.png`,
        jobTitle: isEnglish ? "Saudi journalist and content creator" : "إعلامي وصانع محتوى سعودي",
        description: isEnglish
          ? "Saudi media professional and Google Maps Local Guide documenting and reviewing restaurants, cafés, destinations, and journeys across Saudi Arabia and beyond."
          : "إعلامي ومرشد محلي سعودي يوثق ويقيّم تجارب المطاعم والمقاهي والوجهات والجولات داخل المملكة وخارجها.",
        sameAs: [
          "https://www.instagram.com/noon_jeddah_rest_cafe",
          "https://www.tiktok.com/@Alaqari2006",
          "https://www.snapchat.com/add/Alaqari2006",
          "https://x.com/Alaqari2006",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: getSiteName(locale),
        inLanguage: isEnglish ? "en-US" : "ar-SA",
        publisher: { "@id": `${SITE_ORIGIN}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
