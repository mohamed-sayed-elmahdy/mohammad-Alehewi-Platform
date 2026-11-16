import Link from "next/link"
import {
  BookOpenText,
  FileText,
  Map,
  MessageSquareText,
} from "lucide-react"

import type { DashboardContentSummary } from "@/types/dashboard"

const icons = {
  reviews: MessageSquareText,
  journeys: Map,
  stories: BookOpenText,
  articles: FileText,
} as const

export function OverviewContentList({
  items,
}: {
  items: DashboardContentSummary[]
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => {
        const Icon = icons[item.icon]

        return (
          <Link
            className="flex items-center gap-3 rounded-xl border border-border/70 p-4 transition-colors hover:bg-accent/40"
            href={item.href}
            key={item.label}
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <Icon className="size-4" />
            </span>
            <span className="min-w-0 flex-1 text-sm text-muted-foreground">
              {item.label}
            </span>
            <span className="font-semibold tabular-nums text-card-foreground">
              {item.count.toLocaleString("ar-SA")}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
