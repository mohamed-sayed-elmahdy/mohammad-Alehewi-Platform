import { MockDataManager } from "@/components/dashboard/management/mock-data-manager"
import {
  dashboardManagementConfigs,
  dashboardManagementData,
} from "@/data/dashboard-management"

export default function ArticlesPage() {
  return (
    <MockDataManager
      config={dashboardManagementConfigs.articles}
      initialRecords={dashboardManagementData.articles}
    />
  )
}
