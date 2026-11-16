import Link from "next/link"
import { ArrowUpLeft, Globe2, MapPin } from "lucide-react"

import {
  dashboardCategoryReviews,
  dashboardCityReviews,
  dashboardContentSummary,
  dashboardMetrics,
  dashboardRecentActivity,
  dashboardRequests,
  dashboardVisitedCountries,
} from "@/data/dashboard-overview"
import { OverviewActivityList } from "@/components/dashboard/overview/overview-activity-list"
import { OverviewBreakdown } from "@/components/dashboard/overview/overview-breakdown"
import { OverviewContentList } from "@/components/dashboard/overview/overview-content-list"
import { OverviewPanel } from "@/components/dashboard/overview/overview-panel"
import { OverviewRequestList } from "@/components/dashboard/overview/overview-request-list"
import { OverviewStatCard } from "@/components/dashboard/overview/overview-stat-card"

const numberFormatter = new Intl.NumberFormat("ar-SA")

export default function DashboardPage() {
  const visitedCityCount = dashboardVisitedCountries.reduce(
    (total, country) => total + country.cityCount,
    0
  )

  return (
    <section className="mx-auto w-full max-w-7xl space-y-6">
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="space-y-2">
          <p className="text-sm font-medium text-primary">منصة محمد الإحيوي</p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            أهلًا وسهلًا بك، أستاذ محمد الإحيوي
          </h1>
          <p className="text-sm leading-7 text-muted-foreground">
            نظرة عامة على محتوى المنصة والوجهات والطلبات
          </p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          بيانات تجريبية للمعاينة
        </div>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {dashboardMetrics.map((metric) => (
          <OverviewStatCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <OverviewPanel
          title="التقييمات حسب المدينة"
          description="توزيع التقييمات على المدن"
          action={
            <Link
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              href="/dashboard/content/reviews"
            >
              كل التقييمات
              <ArrowUpLeft className="size-3.5" />
            </Link>
          }
        >
          <OverviewBreakdown items={dashboardCityReviews} />
        </OverviewPanel>

        <OverviewPanel
          title="التقييمات حسب الفئة"
          description="أكثر أنواع الأماكن حضورًا في المحتوى"
          action={
            <Link
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              href="/dashboard/website/categories"
            >
              الفئات
              <ArrowUpLeft className="size-3.5" />
            </Link>
          }
        >
          <OverviewBreakdown items={dashboardCategoryReviews} color="blue" />
        </OverviewPanel>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <OverviewPanel
          title="الطلبات الواردة"
          description="إجمالي الطلبات وعدد ما ينتظر المتابعة"
          action={
            <Link
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              href="/dashboard/requests"
            >
              كل الطلبات
              <ArrowUpLeft className="size-3.5" />
            </Link>
          }
        >
          <OverviewRequestList requests={dashboardRequests} />
        </OverviewPanel>

        <OverviewPanel
          title="البلدان التي تمت زيارتها"
          description={`${numberFormatter.format(dashboardVisitedCountries.length)} بلدان · ${numberFormatter.format(visitedCityCount)} مدينة`}
          action={<Globe2 className="size-5 text-muted-foreground" />}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {dashboardVisitedCountries.map((country) => (
              <div
                className="flex items-center gap-3 rounded-xl border border-border/70 p-3"
                key={country.code}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-bold text-muted-foreground">
                  {country.code}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-card-foreground">
                    {country.label}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {numberFormatter.format(country.cityCount)}{" "}
                    {country.cityCount === 1 ? "مدينة" : "مدن"}
                  </span>
                </span>
                <MapPin className="size-4 shrink-0 text-muted-foreground" />
              </div>
            ))}
          </div>
        </OverviewPanel>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <OverviewPanel
          title="المحتوى المنشور"
          description="ملخص أنواع المحتوى المسجلة في المنصة"
          action={
            <Link
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              href="/dashboard/content"
            >
              إدارة المحتوى
              <ArrowUpLeft className="size-3.5" />
            </Link>
          }
        >
          <OverviewContentList items={dashboardContentSummary} />
        </OverviewPanel>

        <OverviewPanel title="آخر النشاط" description="أمثلة على النشاط في المنصة">
          <OverviewActivityList activities={dashboardRecentActivity} />
        </OverviewPanel>
      </div>
    </section>
  )
}
