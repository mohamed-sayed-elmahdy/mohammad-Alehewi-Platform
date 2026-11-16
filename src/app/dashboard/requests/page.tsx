import { DashboardSectionPage } from "@/components/dashboard/section-page"
import { MockDataManager } from "@/components/dashboard/management/mock-data-manager"
import {
  dashboardManagementConfigs,
  dashboardManagementData,
} from "@/data/dashboard-management"

export default function RequestsPage() {
  return (
    <div className="space-y-8">
      <DashboardSectionPage
        title="الطلبات"
        description="تابع الطلبات الواردة من زوار المنصة والمنشآت، واختر نوع الطلب لإدارته"
        showNote={false}
        links={[
          {
            title: "طلبات الزيارة",
            description: "طلبات زيارة الأماكن وتقييمها",
            href: "/dashboard/requests/visits",
          },
          {
            title: "طلبات الخدمات",
            description: "طلبات الخدمات المقدمة للمنشآت",
            href: "/dashboard/requests/services",
          },
          {
            title: "مشاركة الرأي",
            description: "الآراء والملاحظات التي يرسلها زوار المنصة",
            href: "/dashboard/requests/feedback",
          },
        ]}
      />
      <MockDataManager
        config={dashboardManagementConfigs.requests}
        initialRecords={dashboardManagementData.requests}
      />
    </div>
  )
}
