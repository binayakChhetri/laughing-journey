"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  CreditCard,
  Globe,
  ShoppingBag,
  Users,
  Puzzle,
  HelpCircle,
  Settings,
  PanelRightClose,
  PanelLeftClose,
  PanelRightOpen,
  PanelLeftOpen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo/logo-krisppay.svg";
import Image from "next/image";
import ToggleSidebar from "@/components/common/ToggleSidebar";

const menuItems = [
  {
    label: "dashboard",
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChart3,
  },
  {
    label: "payment-gateways",
    title: "Payment Gateways",
    url: "/payment-gateways",
    icon: CreditCard,
  },
  {
    label: "websites",
    title: "Websites",
    url: "/websites",
    icon: Globe,
  },
  {
    label: "orders",
    title: "Orders",
    url: "/orders",
    icon: ShoppingBag,
  },
  {
    label: "customers",
    title: "Customers",
    url: "/customers",
    icon: Users,
  },
  {
    label: "integrations",
    title: "Integrations",
    url: "/integrations",
    icon: Puzzle,
  },
];

const bottomItems = [
  {
    label: "help-center",
    title: "Help Center",
    url: "/help-center",
    icon: HelpCircle,
    hasChevron: true,
  },
  { label: "settings", title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { state, open } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={cn(
          "flex flex-row justify-between items-center  pt-5 mb-4",
          !open && "flex-col"
        )}
      >
        {open && (
          <div className="ml-5">
            <Image src={logo} alt="KrispPay Logo" height={24} />
          </div>
        )}

        <ToggleSidebar />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="flex-1 py-8 px-4 flex flex-col gap-4 overflow-hidden">
          {menuItems.map((item) => {
            const isActive = pathname === item.url;
            const Icon = item.icon;
            return (
              <SidebarMenuItem
                key={item.label}
                className={cn(
                  "font-semibold p-1 text-sm text-primary-foreground rounded-xl min-w-10 group/sidebar-item hover:bg-[#F6F6F6]  transition-colors",
                  isActive && "bg-primary text-white hover:bg-primary"
                )}
              >
                <Link
                  href={item.url}
                  className="group flex items-center space-x-3 w-full "
                >
                  <div
                    className={cn(
                      "bg-secondary-background mr-3 p-1.5 rounded-lg transition-colors group-hover/sidebar-item:bg-white ",
                      isActive && "bg-white text-primary"
                    )}
                  >
                    <Icon size={20} />
                  </div>
                  {state === "expanded" ? (
                    <span className="text-nowrap">{item.title}</span>
                  ) : null}
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-0">
        <SidebarContent>
          <SidebarMenu className="py-8 px-4 flex flex-col gap-4 overflow-hidden ">
            {bottomItems.map((item) => {
              const isActive = pathname === item.url;
              const Icon = item.icon;
              return (
                <SidebarMenuItem
                  key={item.label}
                  className={cn(
                    "font-semibold p-1 text-sm text-primary-foreground rounded-xl min-w-10 group/sidebar-item  hover:bg-[#F6F6F6]  transition-colors",
                    isActive && "bg-primary text-white  hover:bg-primary"
                  )}
                >
                  <Link
                    href={item.url}
                    className="flex items-center space-x-3 w-full"
                  >
                    <div
                      className={cn(
                        "bg-secondary-background mr-3 p-1.5 rounded-lg group-hover/sidebar-item:bg-white",
                        isActive &&
                          "bg-white text-primary group-hover/sidebar-item:bg-white"
                      )}
                    >
                      <Icon size={20} />
                    </div>
                    {state === "expanded" ? (
                      <span className="text-nowrap">{item.title}</span>
                    ) : null}
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  );
}
