import type {
  DashboardAnalyticsPeriod,
  DashboardPlatformProgressMetric,
  DashboardRequestProgress,
  DashboardVisitorSnapshot,
} from "@/types/dashboard"

export const dashboardVisitorSnapshots: Record<
  DashboardAnalyticsPeriod,
  DashboardVisitorSnapshot
> = {
  "7days": {
    visitors: 1284,
    previousVisitors: 1106,
    pageViews: 2940,
    previousPageViews: 2486,
    trend: [
      { label: "السبت", visitors: 148 },
      { label: "الأحد", visitors: 172 },
      { label: "الاثنين", visitors: 160 },
      { label: "الثلاثاء", visitors: 196 },
      { label: "الأربعاء", visitors: 181 },
      { label: "الخميس", visitors: 214 },
      { label: "الجمعة", visitors: 213 },
    ],
    topPages: [
      { path: "/reviews", label: "صفحة التقييمات", value: 842 },
      { path: "/", label: "الرئيسية", value: 624 },
      { path: "/journeys", label: "الجولات", value: 418 },
    ],
    sources: [
      { label: "بحث Google", value: 42 },
      { label: "دخول مباشر", value: 28 },
      { label: "منصات التواصل", value: 19 },
      { label: "مواقع أخرى", value: 11 },
    ],
  },
  "30days": {
    visitors: 5842,
    previousVisitors: 5104,
    pageViews: 13760,
    previousPageViews: 12086,
    trend: [
      { label: "أسبوع ١", visitors: 1120 },
      { label: "أسبوع ٢", visitors: 1284 },
      { label: "أسبوع ٣", visitors: 1458 },
      { label: "أسبوع ٤", visitors: 1980 },
    ],
    topPages: [
      { path: "/reviews", label: "صفحة التقييمات", value: 4128 },
      { path: "/", label: "الرئيسية", value: 2864 },
      { path: "/journeys", label: "الجولات", value: 1942 },
    ],
    sources: [
      { label: "بحث Google", value: 44 },
      { label: "دخول مباشر", value: 27 },
      { label: "منصات التواصل", value: 18 },
      { label: "مواقع أخرى", value: 11 },
    ],
  },
  "90days": {
    visitors: 16420,
    previousVisitors: 14980,
    pageViews: 38640,
    previousPageViews: 34110,
    trend: [
      { label: "أسبوع ١", visitors: 1420 },
      { label: "أسبوع ٢", visitors: 1560 },
      { label: "أسبوع ٣", visitors: 1690 },
      { label: "أسبوع ٤", visitors: 1510 },
      { label: "أسبوع ٥", visitors: 1880 },
      { label: "أسبوع ٦", visitors: 1960 },
      { label: "أسبوع ٧", visitors: 2140 },
      { label: "أسبوع ٨", visitors: 2260 },
      { label: "أسبوع ٩", visitors: 2000 },
    ],
    topPages: [
      { path: "/reviews", label: "صفحة التقييمات", value: 12480 },
      { path: "/", label: "الرئيسية", value: 8520 },
      { path: "/journeys", label: "الجولات", value: 6184 },
    ],
    sources: [
      { label: "بحث Google", value: 46 },
      { label: "دخول مباشر", value: 25 },
      { label: "منصات التواصل", value: 18 },
      { label: "مواقع أخرى", value: 11 },
    ],
  },
}

export const dashboardPlatformProgress: DashboardPlatformProgressMetric[] = [
  {
    label: "التقييمات الجديدة",
    value: 86,
    previousValue: 72,
    detail: "تقييمًا أضيفت هذا الشهر",
    href: "/dashboard/content/reviews",
    icon: "reviews",
  },
  {
    label: "الجولات المنشورة",
    value: 3,
    previousValue: 2,
    detail: "جولات أضيفت هذا الشهر",
    href: "/dashboard/content/journeys",
    icon: "journeys",
  },
  {
    label: "المقالات المنشورة",
    value: 2,
    previousValue: 3,
    detail: "مقالان أضيفا هذا الشهر",
    href: "/dashboard/content/articles",
    icon: "articles",
  },
]

export const dashboardRequestProgress: DashboardRequestProgress = {
  handled: 24,
  received: 34,
  previousHandled: 21,
  previousReceived: 30,
  href: "/dashboard/requests",
}
