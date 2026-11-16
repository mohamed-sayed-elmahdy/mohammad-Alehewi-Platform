import Link from "next/link"
import {
  BookOpenText,
  FileText,
  Map,
  MessageSquareText,
} from "lucide-react"

import type { DashboardActivity } from "@/types/dashboard"

const icons = {
  review: MessageSquareText,
  journey: Map,
  article: FileText,
  request: BookOpenText,
} as const

export function OverviewActivityList({
  activities,
}: {
  activities: DashboardActivity[]
}) {
  return (
    <div className="divide-y divide-border">
      {activities.map((activity) => {
        const Icon = icons[activity.type]

        return (
          <Link
            className="flex items-start gap-3 py-4 first:pt-0 last:pb-0"
            href={activity.href}
            key={`${activity.title}-${activity.time}`}
          >
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <Icon className="size-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-card-foreground">
                {activity.title}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                {activity.detail}
              </span>
            </span>
            <span className="shrink-0 text-xs text-muted-foreground">
              {activity.time}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
