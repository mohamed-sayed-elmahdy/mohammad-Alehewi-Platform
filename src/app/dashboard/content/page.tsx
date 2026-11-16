import { DashboardSectionPage } from "@/components/dashboard/section-page"

export default function ContentPage() {
  return (
    <DashboardSectionPage
      title="إدارة المحتوى"
      description="اختر ما تريد مراجعته من محتوى المنصة"
      links={[
        {
          title: "التقييمات",
          description: "تجاربك وتقييماتك للأماكن والخدمات",
          href: "/dashboard/content/reviews",
        },
        {
          title: "الجولات",
          description: "الجولات التي تجمع عدة أماكن ضمن تجربة واحدة",
          href: "/dashboard/content/journeys",
        },
        {
          title: "المقالات",
          description: "المقالات والموضوعات المنشورة",
          href: "/dashboard/content/articles",
        },
      ]}
    />
  )
}
