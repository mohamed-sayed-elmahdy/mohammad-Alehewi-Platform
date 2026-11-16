import Link from "next/link"
import { ArrowUpLeft } from "lucide-react"

type DashboardSectionLink = {
  title: string
  description: string
  href: string
}

export function DashboardSectionPage({
  title,
  description,
  links = [],
  showNote = true,
}: {
  title: string
  description: string
  links?: DashboardSectionLink[]
  showNote?: boolean
}) {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      </header>

      {links.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <Link
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent"
              href={link.href}
              key={link.href}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="font-semibold text-card-foreground">
                    {link.title}
                  </h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <ArrowUpLeft className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
              </div>
            </Link>
          ))}
        </div>
      ) : null}

      {showNote ? (
        <div
          className="rounded-xl border border-border bg-muted/50 p-5 text-sm leading-7 text-muted-foreground"
          role="note"
        >
          هذه الصفحة بداية، وتضاف أدوات الإدارة بعد تحديد طريقة حفظ بيانات المنصة
        </div>
      ) : null}
    </section>
  )
}
