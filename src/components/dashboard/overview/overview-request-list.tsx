import Link from "next/link"
import {
  ArrowUpLeft,
  Building2,
  MapPinned,
  MessageSquareText,
} from "lucide-react"

import type { DashboardRequestSummary } from "@/types/dashboard"

const icons = {
  visit: MapPinned,
  service: Building2,
  feedback: MessageSquareText,
} as const

export function OverviewRequestList({
  requests,
}: {
  requests: DashboardRequestSummary[]
}) {
  return (
    <div className="divide-y divide-border">
      {requests.map((request) => {
        const Icon = icons[request.icon]

        return (
          <Link
            className="flex items-center gap-3 py-4 first:pt-0 last:pb-0"
            href={request.href}
            key={request.label}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
              <Icon className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-card-foreground">
                {request.label}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                {request.pending.toLocaleString("ar-SA")} بانتظار المتابعة
              </span>
            </span>
            <span className="text-lg font-semibold tabular-nums text-foreground">
              {request.count.toLocaleString("ar-SA")}
            </span>
            <ArrowUpLeft className="size-4 shrink-0 text-muted-foreground" />
          </Link>
        )
      })}
    </div>
  )
}
