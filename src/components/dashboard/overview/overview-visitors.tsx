"use client"

import { useState } from "react"
import {
  ArrowDownLeft,
  ArrowUpLeft,
  Eye,
  Globe2,
  UsersRound,
} from "lucide-react"

import { OverviewPanel } from "@/components/dashboard/overview/overview-panel"
import type {
  DashboardAnalyticsPeriod,
  DashboardVisitorSnapshot,
} from "@/types/dashboard"

const periods: { key: DashboardAnalyticsPeriod; label: string }[] = [
  { key: "7days", label: "٧ أيام" },
  { key: "30days", label: "٣٠ يومًا" },
  { key: "90days", label: "٩٠ يومًا" },
]

const numberFormatter = new Intl.NumberFormat("ar-SA")

function getChange(current: number, previous: number) {
  if (previous === 0) return current === 0 ? 0 : 100
  return Math.round(((current - previous) / previous) * 100)
}

function ChangeBadge({
  current,
  previous,
}: {
  current: number
  previous: number
}) {
  const change = getChange(current, previous)
  const isPositive = change >= 0
  const Icon = isPositive ? ArrowUpLeft : ArrowDownLeft

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
        isPositive
          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
          : "bg-rose-500/10 text-rose-700 dark:text-rose-300"
      }`}
    >
      <Icon aria-hidden="true" className="size-3" />
      {numberFormatter.format(Math.abs(change))}٪
    </span>
  )
}

function VisitorsChart({
  points,
  label,
}: {
  points: DashboardVisitorSnapshot["trend"]
  label: string
}) {
  const width = 640
  const height = 220
  const paddingX = 12
  const paddingY = 18
  const maxValue = Math.max(...points.map((point) => point.visitors), 1)
  const coordinates = points.map((point, index) => ({
    x:
      points.length === 1
        ? width / 2
        : paddingX + (index / (points.length - 1)) * (width - paddingX * 2),
    y:
      height -
      paddingY -
      (point.visitors / maxValue) * (height - paddingY * 2),
  }))
  const line = coordinates
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ")
  const area = `${line} L ${coordinates.at(-1)?.x ?? width} ${height} L ${coordinates[0]?.x ?? 0} ${height} Z`
  const labelIndexes = new Set([
    0,
    Math.floor((points.length - 1) / 2),
    points.length - 1,
  ])

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium">الزوار الفريدون</p>
          <p className="mt-1 text-xs text-muted-foreground">
            حركة الزيارات خلال {label}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          زوار
        </span>
      </div>
      <div className="mt-4">
        <svg
          aria-label={`مخطط توضيحي لعدد الزوار خلال ${label}`}
          className="h-52 w-full overflow-visible"
          preserveAspectRatio="none"
          role="img"
          viewBox={`0 0 ${width} ${height}`}
        >
          <defs>
            <linearGradient id="visitor-area-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75, 1].map((step) => {
            const y = paddingY + (height - paddingY * 2) * step
            return (
              <line
                key={step}
                stroke="var(--border)"
                strokeDasharray="4 6"
                x1="0"
                x2={width}
                y1={y}
                y2={y}
              />
            )
          })}
          <path d={area} fill="url(#visitor-area-fill)" />
          <path
            d={line}
            fill="none"
            stroke="var(--primary)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
          {coordinates.map((point, index) => (
            <circle
              cx={point.x}
              cy={point.y}
              fill="var(--card)"
              key={points[index].label}
              r="4"
              stroke="var(--primary)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            >
              <title>
                {points[index].label}: {numberFormatter.format(points[index].visitors)} زائر
              </title>
            </circle>
          ))}
        </svg>
        <div
          aria-hidden="true"
          className="mt-1 flex justify-between gap-2 text-[11px] text-muted-foreground"
        >
          {points.map((point, index) =>
            labelIndexes.has(index) ? (
              <span key={point.label}>{point.label}</span>
            ) : null,
          )}
        </div>
      </div>
    </div>
  )
}

function TrafficBreakdown({
  title,
  items,
  formatValue,
}: {
  title: string
  items: { label: string; value: number }[]
  formatValue: (value: number) => string
}) {
  const max = Math.max(...items.map((item) => item.value), 1)

  return (
    <div className="min-w-0 space-y-3">
      <h3 className="text-sm font-semibold">{title}</h3>
      {items.map((item) => (
        <div className="space-y-1.5" key={item.label}>
          <div className="flex justify-between gap-3 text-xs">
            <span className="truncate text-muted-foreground">{item.label}</span>
            <span className="shrink-0 font-medium tabular-nums">
              {formatValue(item.value)}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary/80"
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export function OverviewVisitors({
  snapshots,
}: {
  snapshots: Record<DashboardAnalyticsPeriod, DashboardVisitorSnapshot>
}) {
  const [period, setPeriod] = useState<DashboardAnalyticsPeriod>("30days")
  const activePeriod = periods.find((item) => item.key === period)!
  const snapshot = snapshots[period]

  return (
    <OverviewPanel
      title="زوار المنصة"
      description="نظرة على الزيارات ومصادر الوصول إلى محتوى الموقع"
      action={
        <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-800 dark:text-amber-200">
          معاينة تجريبية
        </span>
      }
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div
          aria-label="الفترة الزمنية لإحصائيات الزوار"
          className="inline-flex rounded-lg bg-muted p-1"
          role="group"
        >
          {periods.map((item) => (
            <button
              aria-pressed={period === item.key}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                period === item.key
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              key={item.key}
              onClick={() => setPeriod(item.key)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          مقارنة بالفترة السابقة
        </span>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(15rem,0.8fr)]">
        <div className="min-w-0 rounded-xl border border-border/70 p-4 sm:p-5">
          <VisitorsChart
            label={activePeriod.label}
            points={snapshot.trend}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          <div className="rounded-xl border border-border/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-700 dark:text-sky-300">
                <UsersRound className="size-4" />
              </span>
              <ChangeBadge
                current={snapshot.visitors}
                previous={snapshot.previousVisitors}
              />
            </div>
            <p className="mt-4 text-2xl font-bold tabular-nums">
              {numberFormatter.format(snapshot.visitors)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              زائر فريد خلال {activePeriod.label}
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-700 dark:text-violet-300">
                <Eye className="size-4" />
              </span>
              <ChangeBadge
                current={snapshot.pageViews}
                previous={snapshot.previousPageViews}
              />
            </div>
            <p className="mt-4 text-2xl font-bold tabular-nums">
              {numberFormatter.format(snapshot.pageViews)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              مشاهدة صفحة خلال {activePeriod.label}
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border/70 p-4 sm:col-span-2 xl:col-span-1">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
              <Globe2 className="size-4" />
            </span>
            <p className="text-xs leading-5 text-muted-foreground">
              عند ربط مصدر التحليلات، ستظهر بيانات الزوار الفعلية هنا بدل أرقام المعاينة.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 border-t border-border/70 pt-5 md:grid-cols-2">
        <TrafficBreakdown
          formatValue={(value) => numberFormatter.format(value)}
          items={snapshot.topPages}
          title="الصفحات الأكثر زيارة"
        />
        <TrafficBreakdown
          formatValue={(value) => `${numberFormatter.format(value)}٪`}
          items={snapshot.sources}
          title="مصادر الزيارات"
        />
      </div>
      <p className="mt-5 text-xs text-muted-foreground">
        الأرقام والاتجاهات المعروضة للتصميم فقط، ولا تمثل إحصاءات حقيقية.
      </p>
    </OverviewPanel>
  )
}
