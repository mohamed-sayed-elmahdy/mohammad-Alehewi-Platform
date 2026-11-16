import { MockDataManager } from "@/components/dashboard/management/mock-data-manager"
import {
  dashboardManagementConfigs,
  dashboardManagementData,
} from "@/data/dashboard-management"

export default function VisitRequestsPage() {
  return (
    <MockDataManager
      config={dashboardManagementConfigs.visits}
      initialRecords={dashboardManagementData.visits}
    />
  )
}
