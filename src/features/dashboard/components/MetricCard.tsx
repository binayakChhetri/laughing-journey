import type { Metric } from "../types";
import TrendUpIcon from "@/components/icons/TrendUpIcon";

interface MetricCardProps {
  metric: Metric;
  icon: React.ComponentType<{ width: number; height: number; color: string }>;
}

export function MetricCard({ metric, icon: Icon }: MetricCardProps) {
  return (
    <div className="bg-(--white) rounded-lg border border-(--neutral-20) p-6 flex items-start justify-between gap-4">
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="body-sm-medium text-(--neutral-100)">{metric.title}</h3>
        <div className="flex flex-col gap-2">
          <p className="heading-lg">{metric.value}</p>
          <p className="body-sm">{metric.subtitle}</p>
          {metric.change && metric.changeLabel && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <TrendUpIcon width={13} height={7} color="#17b26a" />
                <span className="body-sm-medium text-(--success)">{metric.change}%</span>
              </div>
              <span className="body-sm">{metric.changeLabel}</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex-shrink-0">
        <Icon width={22} height={20} color={metric.iconColor} />
      </div>
    </div>
  );
}