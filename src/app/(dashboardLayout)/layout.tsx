import { AppSidebar } from "@/components/layouts/Sidebar"
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
      <div className="flex items-start gap-2">
        <AppSidebar />
        <SidebarTrigger className="mt-2 ml-2 md:ml-0 bg-black p-5 rounded-full text-white" />
      </div>
      <main className="my-12 mr-6 p-5 rounded-3xl w-full bg-slate-100">
        {children}
      </main>
    </SidebarProvider>
  )
}
