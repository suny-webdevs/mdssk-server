"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  GalleryHorizontalEnd,
  LayoutDashboard,
  LogOut,
  NotebookPen,
  Users,
} from "lucide-react"
import Link from "next/link"
import { signOut } from "next-auth/react"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: Users,
  },
  {
    title: "Portfolios",
    url: "/portfolios",
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: NotebookPen,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => signOut()}
              className="text-red-500 font-bold hover:text-red-600"
            >
              <LogOut className="mr-1 h-4 w-4" /> Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
