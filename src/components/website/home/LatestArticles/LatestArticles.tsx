import { useLocale, useTranslations } from "next-intl";
import SectionHeader from "../SectionHeader";
import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

export default function LatestArticles() {
  const locale = useLocale() === "en" ? "en" : "ar";
  const t = useTranslations("Home.latestArticles");

  return (
    <section className="border-t border-white/10 py-16" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          actionLabel={t("viewAll")}
          actionHref="/articles"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
