import { PaymentGatewayCheckbox } from "./PaymentGatewayCheckbox";
import type { PaymentGateway } from "../types";

interface PaymentGatewaysSectionProps {
  selectedGateways: PaymentGateway[];
  onGatewayToggle: (gateway: PaymentGateway) => void;
}

const PAYMENT_GATEWAYS: { id: PaymentGateway; label: string }[] = [
  { id: "credit_debit_card", label: "Credit / Debit Card" },
  { id: "stripe", label: "Stripe" },
  { id: "paypal", label: "PayPal" },
  { id: "google_pay", label: "Google Pay" },
];

export function PaymentGatewaysSection({
  selectedGateways,
  onGatewayToggle,
}: PaymentGatewaysSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <label className="body-sm-medium">Payment Gateways</label>
      <div className="flex flex-col gap-4 rounded-lg border border-neutral-20 p-4">
        <div className="flex gap-4">
          <PaymentGatewayCheckbox
            id={PAYMENT_GATEWAYS[0].id}
            label={PAYMENT_GATEWAYS[0].label}
            checked={selectedGateways.includes(PAYMENT_GATEWAYS[0].id)}
            onCheckedChange={() => onGatewayToggle(PAYMENT_GATEWAYS[0].id)}
          />
          <PaymentGatewayCheckbox
            id={PAYMENT_GATEWAYS[1].id}
            label={PAYMENT_GATEWAYS[1].label}
            checked={selectedGateways.includes(PAYMENT_GATEWAYS[1].id)}
            onCheckedChange={() => onGatewayToggle(PAYMENT_GATEWAYS[1].id)}
          />
        </div>
        <div className="flex gap-4">
          <PaymentGatewayCheckbox
            id={PAYMENT_GATEWAYS[2].id}
            label={PAYMENT_GATEWAYS[2].label}
            checked={selectedGateways.includes(PAYMENT_GATEWAYS[2].id)}
            onCheckedChange={() => onGatewayToggle(PAYMENT_GATEWAYS[2].id)}
          />
          <PaymentGatewayCheckbox
            id={PAYMENT_GATEWAYS[3].id}
            label={PAYMENT_GATEWAYS[3].label}
            checked={selectedGateways.includes(PAYMENT_GATEWAYS[3].id)}
            onCheckedChange={() => onGatewayToggle(PAYMENT_GATEWAYS[3].id)}
          />
        </div>
      </div>
    </div>
  );
}