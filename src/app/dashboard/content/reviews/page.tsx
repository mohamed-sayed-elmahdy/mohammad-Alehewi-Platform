import { MockDataManager } from "@/components/dashboard/management/mock-data-manager"
import {
  dashboardManagementConfigs,
  dashboardManagementData,
} from "@/data/dashboard-management"

export default function ReviewsPage() {
  return (
    <MockDataManager
      config={dashboardManagementConfigs.reviews}
      initialRecords={dashboardManagementData.reviews}
    />
  )
}
