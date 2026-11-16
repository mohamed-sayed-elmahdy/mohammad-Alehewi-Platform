import { MockDataManager } from "@/components/dashboard/management/mock-data-manager"
import {
  dashboardManagementConfigs,
  dashboardManagementData,
} from "@/data/dashboard-management"

export default function FeedbackRequestsPage() {
  return (
    <MockDataManager
      config={dashboardManagementConfigs.feedback}
      initialRecords={dashboardManagementData.feedback}
    />
  )
}
