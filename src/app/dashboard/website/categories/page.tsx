import { MockDataManager } from "@/components/dashboard/management/mock-data-manager"
import {
  dashboardManagementConfigs,
  dashboardManagementData,
} from "@/data/dashboard-management"

export default function CategoriesPage() {
  return (
    <MockDataManager
      config={dashboardManagementConfigs.categories}
      initialRecords={dashboardManagementData.categories}
    />
  )
}
