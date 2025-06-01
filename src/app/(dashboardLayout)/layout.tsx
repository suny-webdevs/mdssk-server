import { AppSidebar } from "@/components/layouts/Sidebar"
import DynamicBreadcrumb from "@/components/ui/DynamicBread"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | Admin Suny-WebDevs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen m-2 md:m-5 flex flex-col gap-4">
        <div className="flex items-center gap-5">
          <SidebarTrigger className="border" />
          <DynamicBreadcrumb />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}
