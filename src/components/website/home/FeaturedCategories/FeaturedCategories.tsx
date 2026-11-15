
import CategoryCard from "@/components/website/home/FeaturedCategories/CategoryCard";
import FeaturedCategoriesItems from "@/components/website/home/FeaturedCategories/FeaturedCategoriesItems";
import { categories } from "@/data/categories";
import GoldActionLink from "@/components/shared/GoldActionLink";
import { useLocale, useTranslations } from "next-intl";

const featuredCardCategories = categories.filter((category) => category.showInHomeCards);
const [primaryCategory, topLeftCategory, topRightCategory, lowerLeftCategory, ...bottomCategories] = featuredCardCategories;

export default function FeaturedCategories() {
  const locale = useLocale();
  const t = useTranslations("Home.featuredCategories");

  return (
    <section dir={locale} className="overflow-hidden bg-linear-to-b from-black via-[#050d16] to-[#08111f] pb-16 pt-10 text-(--color-text) sm:pb-24">
      <div className="mx-auto max-w-360 px-5 sm:px-8">
        <div className="grid items-center gap-12 xl:grid-cols-[.9fr_1.4fr]">
          <div className="text-start xl:pe-6">
            <h2 className="font-alexandria text-4xl font-semibold leading-[1.35] sm:text-5xl">
              {t("title")}
              <br />
              <span className="text-(--color-accent)">{t("titleByCategory")}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-(--color-secondary-text)">
              {t("description")}
            </p>

            <GoldActionLink
              href="/reviews"
              ariaLabel={t("browseAll")}
              className="mt-4"
            >
              {t("browseAll")}
            </GoldActionLink>
          </div>

          <div className="grid grid-cols-3 gap-x-3 gap-y-7 sm:grid-cols-4 lg:grid-cols-7">
            <FeaturedCategoriesItems />
          </div>
        </div>

        {featuredCardCategories.length > 0 ? (
          <div className="mt-16 grid gap-3 lg:grid-cols-[1.15fr_2fr]" dir="ltr">
            <div className="grid gap-3">
              {primaryCategory ? <CategoryCard category={primaryCategory} featured /> : null}
              {lowerLeftCategory ? <CategoryCard category={lowerLeftCategory} /> : null}
            </div>
            <div className="grid gap-3">
              <div className="grid gap-3 md:grid-cols-2">
                {topLeftCategory ? <CategoryCard category={topLeftCategory} /> : null}
                {topRightCategory ? <CategoryCard category={topRightCategory} /> : null}
              </div>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                {bottomCategories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <p className="mt-10 text-center text-base text-slate-400">
          <span className="me-4 inline-block h-px w-7 [450px]:w-12 align-middle bg-[#b87820]" />
          {t("closingPrompt")}
          <span className="ms-4 inline-block h-px w-7 [450px]:w-12 align-middle bg-[#b87820]" />
        </p>
      </div>
    </section>
  );
}
