import type { CategoryId } from "@/types/website"

export type DashboardMetric = {
  label: string
  value: number
  detail: string
  href: string
  icon: "reviews" | "journeys" | "articles" | "countries" | "cities"
  tone: "gold" | "blue" | "green" | "violet" | "rose"
}

export type DashboardBreakdownItem = {
  label: string
  value: number
}

export type DashboardCategoryBreakdown = DashboardBreakdownItem & {
  categoryId?: CategoryId
}

export type DashboardRequestSummary = {
  label: string
  count: number
  pending: number
  href: string
  icon: "visit" | "service" | "feedback"
}

export type DashboardContentSummary = {
  label: string
  count: number
  href: string
  icon: "reviews" | "journeys" | "stories" | "articles"
}

export type DashboardActivity = {
  title: string
  detail: string
  time: string
  href: string
  type: "review" | "journey" | "article" | "request"
}

export type DashboardVisitedCountry = {
  label: string
  cityCount: number
  code: string
}

export type DashboardAnalyticsPeriod = "7days" | "30days" | "90days"

export type DashboardVisitorTrendPoint = {
  label: string
  visitors: number
}

export type DashboardTrafficBreakdown = {
  label: string
  value: number
}

export type DashboardTopPage = DashboardTrafficBreakdown & {
  path: string
}

export type DashboardVisitorSnapshot = {
  visitors: number
  previousVisitors: number
  pageViews: number
  previousPageViews: number
  trend: DashboardVisitorTrendPoint[]
  topPages: DashboardTopPage[]
  sources: DashboardTrafficBreakdown[]
}

export type DashboardPlatformProgressMetric = {
  label: string
  value: number
  previousValue: number
  detail: string
  href: string
  icon: "reviews" | "journeys" | "articles"
}

export type DashboardRequestProgress = {
  handled: number
  received: number
  previousHandled: number
  previousReceived: number
  href: string
}

export type DashboardManagementValue = string | number

export type DashboardManagementRecord = {
  id: string
  [key: string]: DashboardManagementValue
}

export type DashboardManagementField = {
  key: string
  label: string
  type: "text" | "number" | "email" | "textarea" | "select"
  options?: string[]
}

export type DashboardManagementConfig = {
  title: string
  description: string
  storageKey: string
  fields: DashboardManagementField[]
  columns: string[]
  primaryField: string
  statusField?: string
}
