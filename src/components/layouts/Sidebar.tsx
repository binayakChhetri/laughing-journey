"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  ChevronRight,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Payment Gateways", href: "/payment-gateways", icon: CreditCard },
  { name: "Websites", href: "/websites", icon: Globe, badge: "8" },
  { name: "Orders", href: "/orders", icon: ShoppingBag },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Integrations", href: "/integrations", icon: Puzzle },
];

const bottomItems = [
  {
    name: "Help Center",
    href: "/help-center",
    icon: HelpCircle,
    hasChevron: true,
  },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-20 md:w-[296px] h-screen bg-(--white) flex flex-col fixed left-0 top-0">
      <div className="py-5 px-4 md:px-8 border-b border-[rgba(19,24,26,0.08)] flex items-center">
        <svg
          width="121"
          height="25"
          viewBox="0 0 121 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 md:w-auto"
        >
          <path
            d="M3.19324 3.19323H0V24.2396L24.2396 0H21.0463L5.00758 11.6537L3.19324 3.19323Z"
            fill="#5F47F6"
          />
          <path
            d="M7.03955 18.7965L10.4505 15.3856L19.3045 24.2395H12.4826L7.03955 18.7965Z"
            fill="#13181A"
          />
          <path
            d="M105.096 11.1418H108.991L112.738 17.3692L116.504 11.1418H120.343L114.373 20.143V24.0006H111.085V20.2165L105.096 11.1418Z"
            fill="#13181A"
          />
          <path
            d="M100.172 15.8997C100.172 13.9892 99.2904 13.4014 96.4064 13.4014C94.9368 13.4014 93.3754 13.5851 91.7221 13.8974V12.336C91.7221 11.84 92.0528 11.4358 92.5671 11.344C94.0551 11.0685 95.3409 10.9031 96.8105 10.9031C101.66 10.9031 103.46 12.538 103.46 16.6161V24.0007H100.172V22.7332H100.025C99.0516 23.7986 97.6188 24.2395 95.5614 24.2395C91.9058 24.2395 90.0321 22.8985 90.0321 20.088C90.0321 17.3325 91.9793 16.0834 95.9288 16.0834C96.3329 16.0834 96.884 16.0834 97.6739 16.1752V18.2326C97.0309 18.2143 96.4982 18.1959 96.0941 18.1959C94.3122 18.1959 93.3203 18.747 93.3203 20.0329C93.3203 21.282 94.202 21.8331 96.1492 21.8331C99.0332 21.8331 100.172 20.8595 100.172 18.9674V15.8997Z"
            fill="#13181A"
          />
          <path
            d="M83.4483 11.1418C86.865 11.1418 88.6101 12.6849 88.6101 15.6424C88.6101 18.5448 86.865 20.0879 83.4483 20.0879H78.6538V24.0006H75.384V11.1418H83.4483ZM78.6538 17.6447H83.0257C84.5504 17.6447 85.322 16.9834 85.322 15.6424C85.322 14.2463 84.5504 13.585 83.0257 13.585H78.6538V17.6447Z"
            fill="#13181A"
          />
          <path
            d="M63.0696 11.1418C66.4864 11.1418 68.2315 12.6849 68.2315 15.6424C68.2315 18.5448 66.4864 20.0879 63.0696 20.0879H58.2751V24.0006H55.0053V11.1418H63.0696ZM58.2751 17.6447H62.6471C64.1718 17.6447 64.9433 16.9834 64.9433 15.6424C64.9433 14.2463 64.1718 13.585 62.6471 13.585H58.2751V17.6447Z"
            fill="#13181A"
          />
          <path
            d="M46.2998 18.9123C44.0771 18.5449 40.3113 18.2326 40.3113 14.7608C40.3113 12.1523 42.4422 10.9031 46.8325 10.9031C48.5042 10.9031 49.8635 11.0501 51.2963 11.3256C51.7923 11.4358 52.123 11.84 52.123 12.3176V13.8606C50.5616 13.53 48.945 13.3463 47.0346 13.3463C44.3526 13.3463 43.5811 13.7872 43.5811 14.6138C43.5811 15.716 45.0323 15.9548 46.7407 16.1752C49.3308 16.561 52.821 17.0386 52.821 20.2717C52.821 22.9904 50.433 24.2395 45.9508 24.2395C44.224 24.2395 42.8096 24.0926 41.2665 23.8354C40.7522 23.7435 40.4031 23.321 40.4031 22.825V21.3004C42.0748 21.6126 43.8383 21.7596 45.7487 21.7596C48.449 21.7596 49.5512 21.3555 49.5512 20.4554C49.5512 19.4818 48.3756 19.2613 46.2998 18.9123Z"
            fill="#13181A"
          />
          <path
            d="M34.8057 11.1418H38.0755V24.0006H34.8057V11.1418Z"
            fill="#13181A"
          />
          <path
            d="M30.522 13.4014C27.9135 13.4014 27.5094 13.8606 27.5094 15.569V24.0007H24.2396V15.569C24.2396 12.1155 25.5071 10.9031 30.2281 10.9031C31.2201 10.9031 32.212 10.9582 33.1672 11.0868V13.5116C32.2855 13.4381 31.1466 13.4014 30.522 13.4014Z"
            fill="#13181A"
          />
        </svg>
      </div>

      <nav className="flex-1 py-8 px-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 p-1 rounded-[12px] text-[14px] font-semibold leading-5 transition-colors text-[var(--neutral-100)]",
                isActive && "bg-[var(--primary)] text-[var(--white)] font"
              )}
            >
              <div
                className={cn(
                  "flex p-1.5 items-center justify-center rounded-md bg-[var(--neutral-10)]",
                  isActive && "bg-[var(--white)]"
                )}
              >
                <Icon
                  size={20}
                  strokeWidth={1.39}
                  className={cn(
                    isActive ? "text-(--primary)" : "text-(--neutral-100)"
                  )}
                />
              </div>
              <span className="hidden md:block flex-1">{item.name}</span>
              {item.badge && (
                <span className="hidden md:inline-block px-2 py-0.5 rounded-md border border-[var(--neutral-20)] bg-[var(--white)] text-xs font-normal leading-4 text-[var(--neutral-100)] shadow-sm">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="py-5 border-t border-[rgba(19,24,26,0.08)] flex flex-col gap-4 px-3 md:px-5">
        {bottomItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between text-(--heading) no-underline"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-[rgba(19,24,26,0.06)] flex items-center justify-center">
                  <Icon size={20} strokeWidth={1.39} />
                </div>
                <span className="hidden md:block text-[14px] font-semibold leading-5">
                  {item.name}
                </span>
              </div>
              {item.hasChevron && <ChevronRight size={20} strokeWidth={1.39} />}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
