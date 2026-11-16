"use client"

import type { ReactNode } from "react"

import { AppSidebar } from "@/components/dashboard/shell/app-sidebar"
import { DashboardHeader } from "@/components/dashboard/shell/dashboard-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      <SidebarProvider className="dashboard-theme" dir="rtl">
        <AppSidebar />
        <SidebarInset className="min-w-0">
          <DashboardHeader />
          <div className="min-w-0 flex-1 p-4 md:p-6">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
