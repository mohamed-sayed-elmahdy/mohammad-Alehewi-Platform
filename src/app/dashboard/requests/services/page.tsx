import { MockDataManager } from "@/components/dashboard/management/mock-data-manager"
import {
  dashboardManagementConfigs,
  dashboardManagementData,
} from "@/data/dashboard-management"

export default function ServiceRequestsPage() {
  return (
    <MockDataManager
      config={dashboardManagementConfigs.services}
      initialRecords={dashboardManagementData.services}
    />
  )
}
