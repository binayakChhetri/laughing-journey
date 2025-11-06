// Props types (data passed to components)
export interface SetupStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  actionText: string;
  actionLink: string;
}

export interface Metric {
  id: string;
  title: string;
  value: string | number;
  subtitle: string;
  change?: number;
  changeLabel?: string;
  iconColor: string;
}

export interface Order {
  orderId: string;
  customer: string;
  total: string;
  status: "completed" | "pending";
}

export interface TopCustomer {
  rank: number;
  name: string;
  total: string;
}

export interface DashboardProps {
  setupSteps: SetupStep[];
  metrics: Metric[];
  recentOrders: Order[];
  topCustomers: TopCustomer[];
}