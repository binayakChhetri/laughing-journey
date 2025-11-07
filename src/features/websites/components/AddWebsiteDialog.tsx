"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PaymentGatewaysSection } from "./PaymentGatewaysSection";
import CloseIcon from "@/components/icons/CloseIcon";
import type { PaymentGateway, WebsiteFormData } from "../types";

interface AddWebsiteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit?: (data: WebsiteFormData) => void;
}

export function AddWebsiteDialog({
  open,
  onOpenChange,
  onSubmit,
}: AddWebsiteDialogProps) {
  const [formData, setFormData] = useState<WebsiteFormData>({
    name: "",
    url: "",
    paymentGateways: ["credit_debit_card", "stripe"],
  });

  const handleGatewayToggle = (gateway: PaymentGateway) => {
    setFormData((prev) => ({
      ...prev,
      paymentGateways: prev.paymentGateways.includes(gateway)
        ? prev.paymentGateways.filter((g) => g !== gateway)
        : [...prev.paymentGateways, gateway],
    }));
  };

  const handleSubmit = () => {
    onSubmit?.(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[580px] gap-0 p-0"
        showCloseButton={false}
      >
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-start justify-between">
            <DialogTitle className="heading-sm">Add New Website</DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-sm p-1 transition-opacity hover:opacity-70"
              aria-label="Close dialog"
            >
              <CloseIcon width={12} height={12} color="#f04438" />
            </button>
          </div>
          
          <Separator className="bg-neutral-20" />

          <div className="flex flex-col gap-4">
            {/* Website Name Input */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-0.5">
                <Label htmlFor="website-name" className="body-sm-medium">
                  Website Name
                </Label>
                <span className="text-sm font-medium text-error">*</span>
              </div>
              <Input
                id="website-name"
                type="text"
                placeholder="Example.com"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="body-sm h-10 rounded-lg border-neutral-20 px-3.5 text-neutral-100 placeholder:text-neutral-100"
              />
            </div>

            {/* Website URL Input */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="website-url" className="body-sm-medium">
                Website URL
              </Label>
              <Input
                id="website-url"
                type="url"
                placeholder="https://www.example.com"
                value={formData.url}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, url: e.target.value }))
                }
                className="body-sm h-10 rounded-lg border-neutral-20 px-3.5 text-neutral-100 placeholder:text-neutral-100"
              />
              <p className="body-sm text-helper-text">
                Required for tax documentation and invoicing
              </p>
            </div>

            {/* Payment Gateways */}
            <PaymentGatewaysSection
              selectedGateways={formData.paymentGateways}
              onGatewayToggle={handleGatewayToggle}
            />

            {/* Continue Button */}
            <Button
              onClick={handleSubmit}
              className="h-10 w-fit rounded-full bg-purple px-6 text-sm font-semibold text-white hover:bg-purple/90"
            >
              Continue
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}