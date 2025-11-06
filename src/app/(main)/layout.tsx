import { AppSidebar } from "@/components/layouts/sidebar/app-sidebar";
import Header from "@/components/layouts/Header";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col bg-secondary-background">
        <Header />
        <main className="w-full max-w-6xl mx-auto flex-1 py-8">{children}</main>
      </div>
    </SidebarProvider>
  );
}
