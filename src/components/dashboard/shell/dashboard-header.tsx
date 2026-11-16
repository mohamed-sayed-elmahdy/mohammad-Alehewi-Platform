"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

const segmentLabels: Record<string, string> = {
  content: "إدارة المحتوى",
  reviews: "التقييمات",
  journeys: "الجولات",
  stories: "القصص",
  articles: "المقالات",
  requests: "الطلبات",
  visits: "طلبات الزيارة",
  services: "طلبات الخدمات",
  feedback: "مشاركة الرأي",
  media: "مكتبة الوسائط",
  website: "إدارة الموقع",
  pages: "صفحات الموقع",
  categories: "الفئات",
  destinations: "البلدان والمدن",
  settings: "الإعدادات",
}

export function DashboardHeader() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean).slice(1)
  const breadcrumbs = [
    { href: "/dashboard", label: "لوحة التحكم" },
    ...segments.map((segment, index) => ({
      href: `/dashboard/${segments.slice(0, index + 1).join("/")}`,
      label: segmentLabels[segment] ?? segment,
    })),
  ]

  if (segments.length === 0) {
    breadcrumbs.push({ href: "/dashboard", label: "الرئيسية" })
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border px-4">
      <SidebarTrigger aria-label="فتح أو إغلاق القائمة الجانبية" />
      <Separator orientation="vertical" className="h-5" />
      <nav aria-label="مسار التنقل" className="flex min-w-0 items-center gap-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <span className="flex min-w-0 items-center gap-2" key={breadcrumb.href + index}>
            {index > 0 ? (
              <span aria-hidden="true" className="text-muted-foreground">
                /
              </span>
            ) : null}
            {index === breadcrumbs.length - 1 ? (
              <span aria-current="page" className="truncate font-medium">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                className="truncate text-muted-foreground transition-colors hover:text-foreground"
                href={breadcrumb.href}
              >
                {breadcrumb.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </header>
  )
}
