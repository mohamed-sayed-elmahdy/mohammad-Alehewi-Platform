"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Compass,
  FileText,
  FolderOpen,
  LayoutDashboard,
  MapPinned,
  MessageSquareText,
  Tags,
  UsersRound,
} from "lucide-react"

import { NavMain } from "@/components/dashboard/shell/nav-main"
import { NavUser } from "@/components/dashboard/shell/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "الرئيسية",
    url: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: "إدارة المحتوى",
    url: "/dashboard/content",
    icon: <FolderOpen />,
    items: [
      { title: "التقييمات", url: "/dashboard/content/reviews", icon: <MessageSquareText /> },
      { title: "الجولات", url: "/dashboard/content/journeys", icon: <Compass /> },
      { title: "المقالات", url: "/dashboard/content/articles", icon: <FileText /> },
    ],
  },
  {
    title: "إدارة الموقع",
    url: "/dashboard/website",
    icon: <Compass />,
    items: [
      { title: "صفحات الموقع", url: "/dashboard/website/pages", icon: <FileText /> },
      { title: "الفئات", url: "/dashboard/website/categories", icon: <Tags /> },
      { title: "البلدان والمدن", url: "/dashboard/website/destinations", icon: <MapPinned /> },
    ],
  },
  {
    title: "الطلبات",
    url: "/dashboard/requests",
    icon: <UsersRound />,
    items: [
      { title: "طلبات الزيارة", url: "/dashboard/requests/visits", icon: <MapPinned /> },
      { title: "طلبات الخدمات", url: "/dashboard/requests/services", icon: <UsersRound /> },
      { title: "مشاركة الرأي", url: "/dashboard/requests/feedback", icon: <MessageSquareText /> },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const items = navigationItems.map((item) => ({
    ...item,
    isActive:
      pathname === item.url ||
      (item.url !== "/dashboard" && pathname.startsWith(`${item.url}/`)),
    items: "items" in item ? item.items : undefined,
  }))
  return (
    <Sidebar side="right" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              render={<Link href="/dashboard" />}
              tooltip="منصة محمد الإحيوي"
            >
              <Image
                src="/newlogo.png"
                alt=""
                width={32}
                height={32}
                className="size-8 object-contain"
              />
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-medium">منصة محمد الإحيوي</span>
                <span className="truncate text-xs">لوحة إدارة المنصة</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: "مدير المنصة",
            detail: "إدارة المنصة",
            avatar: "/mohamedwhite1.png",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}
