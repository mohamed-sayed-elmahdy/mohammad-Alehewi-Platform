import { MockDataManager } from "@/components/dashboard/management/mock-data-manager"
import {
  dashboardManagementConfigs,
  dashboardManagementData,
} from "@/data/dashboard-management"

export default function JourneysPage() {
  return (
    <MockDataManager
      config={dashboardManagementConfigs.journeys}
      initialRecords={dashboardManagementData.journeys}
    />
  )
}
