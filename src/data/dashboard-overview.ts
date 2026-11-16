import type {
  DashboardActivity,
  DashboardCategoryBreakdown,
  DashboardContentSummary,
  DashboardMetric,
  DashboardRequestSummary,
  DashboardVisitedCountry,
} from "@/types/dashboard"

export const dashboardMetrics: DashboardMetric[] = [
  {
    label: "إجمالي التقييمات",
    value: 1348,
    detail: "تقييم منشور",
    href: "/dashboard/content/reviews",
    icon: "reviews",
    tone: "gold",
  },
  {
    label: "الجولات",
    value: 42,
    detail: "جولة موثقة",
    href: "/dashboard/content/journeys",
    icon: "journeys",
    tone: "blue",
  },
  {
    label: "المقالات",
    value: 28,
    detail: "مقال منشور",
    href: "/dashboard/content/articles",
    icon: "articles",
    tone: "violet",
  },
  {
    label: "البلدان",
    value: 5,
    detail: "بلدان تمت زيارتها",
    href: "/dashboard/website/destinations",
    icon: "countries",
    tone: "green",
  },
  {
    label: "المدن",
    value: 34,
    detail: "مدينة موثقة",
    href: "/dashboard/website/destinations",
    icon: "cities",
    tone: "rose",
  },
]

export const dashboardCityReviews = [
  { label: "جدة", value: 386 },
  { label: "الرياض", value: 294 },
  { label: "مكة المكرمة", value: 172 },
  { label: "الطائف", value: 108 },
  { label: "الدمام", value: 83 },
  { label: "مدن أخرى", value: 305 },
]

export const dashboardCategoryReviews: DashboardCategoryBreakdown[] = [
  { categoryId: "restaurants", label: "مطاعم", value: 426 },
  { categoryId: "cafes", label: "كافيهات", value: 238 },
  { categoryId: "hotels", label: "فنادق", value: 146 },
  { categoryId: "malls", label: "مراكز تسوق", value: 124 },
  { categoryId: "tourist-attractions", label: "وجهات سياحية", value: 112 },
  { categoryId: "sweets-bakeries", label: "حلويات ومخابز", value: 96 },
  { label: "تصنيفات أخرى", value: 206 },
]

export const dashboardVisitedCountries: DashboardVisitedCountry[] = [
  { label: "السعودية", cityCount: 24, code: "SA" },
  { label: "مصر", cityCount: 3, code: "EG" },
  { label: "تركيا", cityCount: 3, code: "TR" },
  { label: "جورجيا", cityCount: 3, code: "GE" },
  { label: "الإمارات", cityCount: 1, code: "AE" },
]

export const dashboardRequests: DashboardRequestSummary[] = [
  {
    label: "طلبات الزيارة",
    count: 18,
    pending: 5,
    href: "/dashboard/requests/visits",
    icon: "visit",
  },
  {
    label: "طلبات الخدمات",
    count: 32,
    pending: 8,
    href: "/dashboard/requests/services",
    icon: "service",
  },
  {
    label: "مشاركات الرأي",
    count: 47,
    pending: 11,
    href: "/dashboard/requests/feedback",
    icon: "feedback",
  },
]

export const dashboardContentSummary: DashboardContentSummary[] = [
  {
    label: "التقييمات",
    count: 1348,
    href: "/dashboard/content/reviews",
    icon: "reviews",
  },
  {
    label: "الجولات",
    count: 42,
    href: "/dashboard/content/journeys",
    icon: "journeys",
  },
  {
    label: "المقالات",
    count: 28,
    href: "/dashboard/content/articles",
    icon: "articles",
  },
]

export const dashboardRecentActivity: DashboardActivity[] = [
  {
    title: "جولة على الواجهة البحرية",
    detail: "جدة · 4 أماكن ضمن الجولة",
    time: "منذ ساعتين",
    href: "/dashboard/content/journeys",
    type: "journey",
  },
  {
    title: "تقييم مطعم مذاق البحر",
    detail: "مطاعم · جدة",
    time: "منذ 5 ساعات",
    href: "/dashboard/content/reviews",
    type: "review",
  },
  {
    title: "طلب زيارة جديد",
    detail: "مطعم أطياف · الرياض",
    time: "أمس",
    href: "/dashboard/requests/visits",
    type: "request",
  },
  {
    title: "مقال: حكاية مكان",
    detail: "مقال جديد",
    time: "منذ يومين",
    href: "/dashboard/content/articles",
    type: "article",
  },
]
