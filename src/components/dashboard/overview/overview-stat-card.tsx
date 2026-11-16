import Link from "next/link"
import {
  ArrowUpLeft,
  FileText,
  Map,
  MapPin,
  Star,
} from "lucide-react"

import type { DashboardMetric } from "@/types/dashboard"

const icons = {
  reviews: Star,
  journeys: Map,
  articles: FileText,
  countries: MapPin,
  cities: MapPin,
} as const

export function OverviewStatCard({ metric }: { metric: DashboardMetric }) {
  const Icon = icons[metric.icon]

  return (
    <Link
      href={metric.href}
      className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30 hover:bg-accent/40"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`dashboard-metric-icon dashboard-metric-icon-${metric.tone}`}
        >
          <Icon className="size-5" />
        </span>
        <ArrowUpLeft className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
      <p className="mt-5 text-sm text-muted-foreground">{metric.label}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-3xl font-bold tracking-tight text-foreground">
          {metric.value.toLocaleString("ar-SA")}
        </span>
        <span className="text-xs text-muted-foreground">{metric.detail}</span>
      </div>
    </Link>
  )
}
