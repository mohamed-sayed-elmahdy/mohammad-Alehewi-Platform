import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import {
  Geist,
  Geist_Mono,
  Alexandria,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/website/navbar/Navbar";
import Footer from "@/components/website/footer/Footer";
import StructuredData from "@/components/website/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import {
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  getSiteName,
  SITE_ORIGIN,
  type SiteLocale,
} from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

type LocaleLayoutProps = LayoutProps<"/[locale]">;

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: routeLocale } = await params;
  if (!hasLocale(routing.locales, routeLocale)) notFound();

  const locale: SiteLocale = routeLocale;
  const siteName = getSiteName(locale);
  const t = await getTranslations({ locale, namespace: "Home" });
  const description = t("metaDescription");
  const title = `${t("metaTitle")} | ${siteName}`;
  const homeUrl = locale === "en" ? "/en" : "/";
  const keywords =
    locale === "en"
      ? [
          "Mohammad Alehewi",
          "Saudi Arabia travel guide",
          "Google Maps Local Guide",
          "travel experiences",
          "restaurant reviews",
          "Saudi destinations",
          "documented journeys",
        ]
      : [
          "محمد الإحيوي",
          "مرشد محلي على خرائط Google",
          "تجارب السفر في السعودية",
          "تقييمات المطاعم والمقاهي",
          "وجهات السعودية",
          "جولات موثقة",
        ];

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    applicationName: siteName,
    authors: [{ name: siteName, url: SITE_ORIGIN }],
    creator: siteName,
    publisher: siteName,
    category: locale === "en" ? "Travel & Reviews" : "السفر والتقييمات",
    verification: {
      google: "X1T3Z0BsRPyFyGGKTVwWqAWos-Vts3yNwT6_3quJpcU",
    },
    keywords,
    formatDetection: {
      address: false,
      email: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "ar_SA",
      url: homeUrl,
      siteName,
      title,
      description,
      images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: DEFAULT_SOCIAL_IMAGE_ALT[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: DEFAULT_SOCIAL_IMAGE_ALT[locale] }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#08111f",
};


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={`
    ${geistSans.variable}
    ${geistMono.variable}
    ${alexandria.variable}
    ${ibmPlexArabic.variable} dark antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content={getSiteName(locale)} />
      </head>

      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
          <StructuredData locale={locale} />
          <Navbar />
          <main className="flex-1 ">
            {children}
          </main>
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>

    </html>
  );
}
