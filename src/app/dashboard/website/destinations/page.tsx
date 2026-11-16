import { MockDataManager } from "@/components/dashboard/management/mock-data-manager"
import {
  dashboardManagementConfigs,
  dashboardManagementData,
} from "@/data/dashboard-management"

export default function DestinationsPage() {
  return (
    <MockDataManager
      config={dashboardManagementConfigs.destinations}
      initialRecords={dashboardManagementData.destinations}
    />
  )
}
