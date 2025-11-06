import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";
import type { PaymentGateway } from "../types";

interface PaymentGatewayCheckboxProps {
  id: PaymentGateway;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function PaymentGatewayCheckbox({
  id,
  label,
  checked,
  onCheckedChange,
}: PaymentGatewayCheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <CheckmarkIcon width={20} height={20} color="#10b981" />
      ) : (
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="rounded-md"
        />
      )}
      <Label
        htmlFor={id}
        className="body-sm-medium cursor-pointer select-none"
      >
        {label}
      </Label>
    </div>
  );
}