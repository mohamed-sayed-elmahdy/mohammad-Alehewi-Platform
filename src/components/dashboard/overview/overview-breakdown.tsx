import type { DashboardBreakdownItem } from "@/types/dashboard"

export function OverviewBreakdown({
  items,
  color = "primary",
}: {
  items: DashboardBreakdownItem[]
  color?: "primary" | "blue"
}) {
  const maxValue = Math.max(...items.map((item) => item.value), 1)

  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div className="space-y-2" key={item.label}>
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="truncate text-foreground">{item.label}</span>
            <span className="shrink-0 font-semibold tabular-nums text-foreground">
              {item.value.toLocaleString("ar-SA")}
            </span>
          </div>
          <div
            className="h-2 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-label={item.label}
            aria-valuemin={0}
            aria-valuemax={maxValue}
            aria-valuenow={item.value}
          >
            <div
              className={`h-full rounded-full ${
                color === "blue" ? "bg-sky-400" : "bg-primary"
              }`}
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
