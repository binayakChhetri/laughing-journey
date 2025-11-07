"use client";

import ConfigurationForm from "@/components/common/ConfigurationForm";
import Heading from "@/components/common/Heading";
import { FileText, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface PaymentConfigSchema {
  required: string[];
  properties: Record<string, { type: string; description: string }>;
}

interface PaymentGatewayConfigProps {
  paymentName: string;
  paymentConfigSchema: PaymentConfigSchema;
}

const PaymentGatewayConfig = ({
  paymentName,
  paymentConfigSchema,
}: PaymentGatewayConfigProps) => {
  const paymentNameCapitalized =
    paymentName.charAt(0).toUpperCase() + paymentName.slice(1);

  console.log(paymentConfigSchema);

  return (
    <div>
      <div className="flex justify-between items-end">
        <Heading
          customStyle="font-semibold"
          title={`Configure ${paymentNameCapitalized}`}
          subTitle={`Setup your ${paymentNameCapitalized} integration to start accepting payments`}
        />
        <div className="flex mb-6 text-sm text-primary font-medium ">
          <Link
            href="#"
            className="flex space-x-2 pr-3 border-[#B5BEC2] border-solid border-r"
          >
            <FileText size={20} />
            <span>Documentation</span>
          </Link>

          <Link href="https://www.facebook.com" className="flex space-x-2 pl-3">
            <SquareArrowOutUpRight size={20} />
            <span>{paymentNameCapitalized} Integration</span>
          </Link>
        </div>
      </div>
      <ConfigurationForm
        configSchema={paymentConfigSchema}
        paymentName={paymentName}
      />
      {/* <LoginFormExample /> */}
    </div>
  );
};

export default PaymentGatewayConfig;
