import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "completed" | "pending";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const isCompleted = status === "completed";
  
  return (
    <Badge 
      className={cn(
        "rounded-2xl px-2 py-0.5 gap-1 border",
        isCompleted 
          ? "bg-(--success-light) border-(--success-border) text-(--success-dark)" 
          : "bg-(--warning-light) border-(--warning-border) text-(--warning-dark)"
      )}
    >
      <div 
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: isCompleted ? '#17b26a' : '#ef6820' }}
      />
      <span className="label-sm capitalize">{status}</span>
    </Badge>
  );
}