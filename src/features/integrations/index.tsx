"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Heading from "@/components/common/Heading";
import SearchAndActionButton from "@/components/common/SearchBarWithAction";
import { useMemo, useState } from "react";

const integrations = [
  {
    id: 1,
    name: "WooCommerce",
    description:
      "Seamlessly integrate KrispPay with WooCommerce to accept payments on your online store. Support for all major payment gateways and subscription products.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/a0ba792a8f50420f3442076e7448dda17a65eafa?width=635",
    color: "#8B5CF6",
  },
  {
    id: 2,
    name: "WP Travel Engine",
    description:
      "Accept tour and travel bookings with KrispPay integration for WP Travel Engine. Process payments for trips, tours, and travel packages effortlessly.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0489e92c0f002f35d349340801530584a806f7b0?width=473",
    color: "#E2F8F5",
    isLogo: true,
  },
  {
    id: 3,
    name: "Easy Digital Downloads",
    description:
      "Sell digital products with ease using KrispPay for Easy Digital Downloads. Perfect for software, ebooks, music, and any digital goods.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/a1e7a0dcdb5630f2dd430c385e5351c2a1ca0acc?width=635",
    color: "#2D3748",
  },
];

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter by name functionality
  const filteredIntegrations = useMemo(() => {
    const searchItem = searchQuery.trim().toLowerCase();
    if (!searchItem) return integrations;

    return integrations.filter((item) => item.name.includes(searchQuery));
  }, [searchQuery]);

  return (
    <div>
      <Heading
        title=" Integrations"
        subTitle="Connect KrispPay with your favorite WordPress plugins"
      />

      <SearchAndActionButton
        inputValue={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search integrations..."
        buttonText="Request Integration"
      />

      {/* Integration Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIntegrations.map((integration) => (
          <Card
            key={integration.id}
            className="p-4 flex flex-col gap-4 rounded-xl"
          >
            <div className="flex flex-col gap-4">
              {/* Image Section */}
              <div className="relative">
                {integration.isLogo ? (
                  <div
                    className="h-[147px] rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: integration.color }}
                  >
                    <img
                      src={integration.image}
                      alt={integration.name}
                      className="max-w-[200px] max-h-[80px] object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={integration.image}
                    alt={integration.name}
                    className="w-full h-[147px] object-cover rounded-lg"
                  />
                )}
              </div>

              {/* Content Section */}
              <CardContent className="flex flex-col gap-2 p-0">
                <CardHeader className="p-0">
                  <CardTitle>{integration.name}</CardTitle>
                </CardHeader>
                <p className="text-sm leading-[22px] text-[#566267]">
                  {integration.description}
                </p>
              </CardContent>
            </div>

            {/* Footer with Button */}
            <CardFooter className="p-0">
              <Button className="text-white w-full rounded-full bg-[#5F47F6] hover:bg-[#5F47F6]/90 px-4 py-2 h-9 gap-2 text-sm font-semibold">
                View Guide
                <ExternalLink className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
