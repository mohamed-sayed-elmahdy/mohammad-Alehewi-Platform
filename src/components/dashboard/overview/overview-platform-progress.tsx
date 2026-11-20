import Link from "next/link"
import {
  ArrowDownLeft,
  ArrowUpLeft,
  FileText,
  Map,
  MessageSquareText,
} from "lucide-react"

import { OverviewPanel } from "@/components/dashboard/overview/overview-panel"
import type {
  DashboardPlatformProgressMetric,
  DashboardRequestProgress,
} from "@/types/dashboard"

const icons = {
  reviews: MessageSquareText,
  journeys: Map,
  articles: FileText,
} as const

const numberFormatter = new Intl.NumberFormat("ar-SA")

function percentageChange(current: number, previous: number) {
  if (previous === 0) return current === 0 ? 0 : 100
  return Math.round(((current - previous) / previous) * 100)
}

function ChangeLabel({
  current,
  previous,
}: {
  current: number
  previous: number
}) {
  const change = percentageChange(current, previous)
  const isPositive = change >= 0
  const Icon = isPositive ? ArrowUpLeft : ArrowDownLeft

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-medium ${
        isPositive
          ? "text-emerald-700 dark:text-emerald-300"
          : "text-rose-700 dark:text-rose-300"
      }`}
    >
      <Icon className="size-3.5" />
      {numberFormatter.format(Math.abs(change))}٪
    </span>
  )
}

export function OverviewPlatformProgress({
  metrics,
  requests,
}: {
  metrics: DashboardPlatformProgressMetric[]
  requests: DashboardRequestProgress
}) {
  const requestCompletion = Math.round(
    (requests.handled / Math.max(requests.received, 1)) * 100,
  )
  const previousCompletion = Math.round(
    (requests.previousHandled / Math.max(requests.previousReceived, 1)) * 100,
  )

  return (
    <OverviewPanel
      title="متابعة تقدم المنصة"
      description="مؤشرات المحتوى والطلبات خلال الشهر الحالي مقارنة بالسابق"
      action={
        <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-800 dark:text-amber-200">
          شهرية
        </span>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = icons[metric.icon]
          return (
            <Link
              className="rounded-xl border border-border/70 p-4 transition-colors hover:bg-accent/40"
              href={metric.href}
              key={metric.label}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Icon className="size-4" />
                </span>
                <ChangeLabel
                  current={metric.value}
                  previous={metric.previousValue}
                />
              </div>
              <p className="mt-4 text-2xl font-bold tabular-nums">
                {numberFormatter.format(metric.value)}
              </p>
              <p className="mt-1 text-sm font-medium">{metric.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {metric.detail}
              </p>
            </Link>
          )
        })}

        <Link
          className="rounded-xl border border-border/70 p-4 transition-colors hover:bg-accent/40"
          href={requests.href}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-medium">معالجة الطلبات</span>
            <ChangeLabel
              current={requestCompletion}
              previous={previousCompletion}
            />
          </div>
          <p className="mt-4 text-2xl font-bold tabular-nums">
            {numberFormatter.format(requestCompletion)}٪
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            عولج {numberFormatter.format(requests.handled)} من أصل{" "}
            {numberFormatter.format(requests.received)} طلبًا
          </p>
          <div
            aria-label={`تمت معالجة ${requestCompletion} بالمئة من الطلبات`}
            className="mt-4 h-2 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={requestCompletion}
          >
            <div
              className="h-full rounded-full bg-primary transition-[width]"
              style={{ width: `${Math.min(requestCompletion, 100)}%` }}
            />
          </div>
        </Link>
      </div>
      <p className="mt-5 text-xs text-muted-foreground">
        مؤشرات تجريبية للمعاينة، ولا تعتمد على أهداف شهرية أو بيانات فعلية حتى الآن.
      </p>
    </OverviewPanel>
  )
}
