import type { ReactNode } from "react"

export function OverviewPanel({
  title,
  description,
  action,
  children,
}: {
  title: string
  description?: string
  action?: ReactNode
  children: ReactNode
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <header className="mb-6 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h2 className="font-semibold text-card-foreground">{title}</h2>
          {description ? (
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {action}
      </header>
      {children}
    </section>
  )
}
