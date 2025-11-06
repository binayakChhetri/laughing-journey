import type { DashboardProps } from "./types";


export const mockRootProps: DashboardProps = {
  setupSteps: [
    {
      id: 1,
      title: "Setup Payment Gateway",
      description: "Connect your preferred payment gateway to start accepting payments",
      completed: true,
      actionText: "Payment Settings",
      actionLink: "/payment-gateways"
    },
    {
      id: 2,
      title: "Add Your Website",
      description: "Add your website to integrate KrispPay payment solutions",
      completed: true,
      actionText: "Website Settings",
      actionLink: "/websites"
    },
    {
      id: 3,
      title: "Configure KrispPay to Your Website",
      description: "Download and install the KrispPay plugin on your site",
      completed: false,
      actionText: "Integration Settings",
      actionLink: "/integrations"
    }
  ],
  metrics: [
    {
      id: "websites",
      title: "Total websites",
      value: 4,
      subtitle: "3 connected",
      change: 8,
      changeLabel: "vs. previous period",
      iconColor: "#4588ca"
    },
    {
      id: "gateways",
      title: "Payment Gateways",
      value: "28,400",
      subtitle: "2 active, 1 test mode",
      iconColor: "#e456a4"
    },
    {
      id: "transactions",
      title: "Transactions",
      value: "$12,847",
      subtitle: "156 transactions",
      change: 23,
      changeLabel: "vs. previous period",
      iconColor: "#17b26a"
    },
    {
      id: "customers",
      title: "Total Customers",
      value: "1,248",
      subtitle: "89 new this month",
      change: 12,
      changeLabel: "vs. previous period",
      iconColor: "#5f47f6"
    }
  ],
  recentOrders: [
    {
      orderId: "#5678",
      customer: "Emily Carter",
      total: "$145.67",
      status: "completed" as const
    },
    {
      orderId: "#5677",
      customer: "Michael Chen",
      total: "$52.30",
      status: "completed" as const
    },
    {
      orderId: "#5675",
      customer: "Olivia Davis",
      total: "$275.89",
      status: "pending" as const
    },
    {
      orderId: "#5674",
      customer: "Ava Wilson",
      total: "$310.22",
      status: "completed" as const
    }
  ],
  topCustomers: [
    {
      rank: 1,
      name: "Isabella Martinez",
      total: "$145.67"
    },
    {
      rank: 2,
      name: "Mia Thompson",
      total: "$52.30"
    },
    {
      rank: 3,
      name: "Liam Harris",
      total: "$275.89"
    },
    {
      rank: 4,
      name: "Robert Brown",
      total: "$310.22"
    }
  ]
};