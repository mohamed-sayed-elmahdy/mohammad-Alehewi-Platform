import { DashboardSectionPage } from "@/components/dashboard/section-page"

export default function WebsitePage() {
  return (
    <DashboardSectionPage
      title="إدارة الموقع"
      description="اختر ما تريد إدارته من صفحات الموقع وبيانات الوجهات"
      links={[
        {
          title: "صفحات الموقع",
          description: "صفحات الموقع ومحتواها التعريفي",
          href: "/dashboard/website/pages",
        },
        {
          title: "الفئات",
          description: "فئات التقييمات والوجهات",
          href: "/dashboard/website/categories",
        },
        {
          title: "البلدان والمدن",
          description: "البلدان والمدن المستخدمة في الجولات والتقييمات",
          href: "/dashboard/website/destinations",
        },
      ]}
    />
  )
}
