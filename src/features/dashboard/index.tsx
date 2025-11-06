import Heading from "@/components/common/Heading";
import { SetupGuideCard } from "./components/SetupGuideCard";
import { MetricCard } from "./components/MetricCard";
import { RecentOrdersTable } from "./components/RecentOrdersTable";
import { TopCustomersTable } from "./components/TopCustomersTable";
import { mockRootProps } from "./dashboardMockData";
import UsersIcon from "@/components/icons/UsersIcon";
import CreditCardIcon from "@/components/icons/CreditCardIcon";
import DocumentIcon from "@/components/icons/DocumentIcon";
import UsersGroupIcon from "@/components/icons/UsersGroupIcon";

const metricIcons = {
  websites: UsersIcon,
  gateways: CreditCardIcon,
  transactions: DocumentIcon,
  customers: UsersGroupIcon,
};

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <Heading
        title="Dashboard"
        subTitle="Welcome back! Here's your overview."
      />

      {/* Setup Guide */}
      <SetupGuideCard steps={mockRootProps.setupSteps} />

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockRootProps.metrics.map((metric) => (
          <MetricCard 
            key={metric.id} 
            metric={metric} 
            icon={metricIcons[metric.id as keyof typeof metricIcons]} 
          />
        ))}
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RecentOrdersTable orders={mockRootProps.recentOrders} />
        <TopCustomersTable customers={mockRootProps.topCustomers} />
      </div>
    </div>
  );
};

export default Dashboard;