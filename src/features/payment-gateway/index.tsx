"use client";

import Heading from "@/components/common/Heading";
import SearchAndActionButton from "@/components/common/SearchBarWithAction";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useMemo, useState } from "react";

import stripe from "@/assets/stripe.png";
import paypal from "@/assets/paypal.png";
import square from "@/assets/square.png";
import amazonpay from "@/assets/amazon.png";
import klarna from "@/assets/klarna.png";
import mollie from "@/assets/mollie.png";
import mercado from "@/assets/mercado-pago.png";
import payu from "@/assets/payu.png";
import gocardless from "@/assets/gocardless.png";
import { useRouter } from "next/navigation";

const GATEWAYS = [
  {
    id: "cmgf18uzs0000vt60xuhqkjxt",
    name: "Stripe",
    description:
      "Accept payments globally with cards, wallets, bank transfers, and buy now pay later options. Industry-leading security with built-in fraud prevention.",
    image: stripe,
    configured: true,
  },
  {
    id: "cmgf18v0e0001vt603l164p5e",
    name: "PayPal Payments",
    description:
      "Trusted by millions worldwide. Accept PayPal, Venmo, credit cards, and debit cards. Fast checkout with PayPal accounts and guest payments.",
    image: paypal,
    configured: false,
  },
  {
    id: "cmgf18v0o0002vt60gn6i7k2w",
    name: "Square",
    description:
      "Seamless integration for online and in-person payments. Perfect for retail and restaurants with unified inventory and reporting.",
    image: square,
    configured: true,
  },
  {
    id: "amazon",
    name: "Amazon Pay",
    description:
      "Let customers pay with their Amazon account. Trusted checkout experience with address and payment info stored securely on Amazon.",
    image: amazonpay,
    configured: true,
  },
  {
    id: "klarna",
    name: "Klarna",
    description:
      "Offer flexible payment options with pay now, pay later, or installments. Popular in Europe and North America with 150+ million users.",
    image: klarna,
    configured: true,
  },
  {
    id: "mollie",
    name: "Mollie Payments",
    description:
      "European payment gateway supporting 30+ methods including iDEAL, Bancontact, and Sofort. Transparent pricing with no hidden fees.",
    image: mollie,
    configured: false,
  },
  {
    id: "mercado",
    name: "Mercado Pago",
    description:
      "Leading payment solution for Latin America. Support for local payment methods, and multiple currencies across 18 countries.",
    image: mercado,
    configured: true,
  },
  {
    id: "payu",
    name: "PayU India",
    description:
      "India's preferred payment gateway with support for UPI, net banking, cards, and wallets. Instant settlements and dedicated support.",
    image: payu,
    configured: false,
  },
  {
    id: "gocardless",
    name: "GoCardless",
    description:
      "Specialist in recurring payments and direct debit. Perfect for subscriptions, memberships, and invoices with automatic collection.",
    image: gocardless,
    configured: true,
  },
];

const PaymentGateway = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GATEWAYS;
    return GATEWAYS.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <Heading
        title="Payment Gateways"
        subTitle="Manage your payment gateways"
      />

      <SearchAndActionButton
        inputValue={query}
        placeholder="Search Payment Gateways"
        buttonText="Request Payment Gateway"
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((gateway) => (
          <Card
            key={gateway.id}
            className="p-4 flex flex-col gap-y-4 shadow-none border-none"
          >
            <div className="relative">
              <div className="w-full h-[147px] rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src={gateway.image}
                  alt={gateway.name}
                  className="w-full h-full object-cover"
                  height={147}
                  width={300}
                />
              </div>
              <div
                className={`absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-white shadow-sm ${
                  gateway.configured ? "" : "border border-[#D8D8DA]"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    gateway.configured ? "bg-[#17B551]" : "bg-[#859094]"
                  }`}
                />
                <span>
                  {gateway.configured ? "Configured" : "Not Configured"}
                </span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-primary-foreground">
                {gateway.name}
              </h3>
              <p className="text-sm text-[#566267]">{gateway.description}</p>
            </div>

            <Button
              onClick={() =>
                router.push(`/payment-gateways/${gateway.name}/configure`)
              }
              className="w-full rounded-full bg-primary hover:bg-primary/90 text-white px-4 py-2 cursor-pointer"
            >
              Configure
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PaymentGateway;
