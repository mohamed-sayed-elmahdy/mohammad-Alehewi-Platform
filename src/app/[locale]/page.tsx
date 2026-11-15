import type { Metadata } from "next";
import Home from "@/components/website/home/Home";
import { createPageMetadata } from "@/lib/seo";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type HomePageProps = PageProps<"/[locale]">;

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Home" });
  const metadata = createPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    imageAlt: t("metaImageAlt"),
    path: "/",
    locale,
  });
  return metadata;
}

export default function Page() {
  return <Home />;
}