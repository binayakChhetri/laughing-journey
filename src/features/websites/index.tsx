import Heading from "@/components/common/Heading";
import { columns, Website } from "./columns";

import { WebsitesClient } from "./websites-client";

async function getData(): Promise<Website[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "NepalVisuals.com",
      domain: "nepalvisuals.com",
      paymentGateways: ["Stripe", "PayPal"],
      apiKey: "kp_live_1a2b3c4d5e6f...",
      status: "Active",
    },
    {
      id: "829fe63g",
      name: "Acme Main Website",
      domain: "acme.example.com",
      paymentGateways: ["Stripe"],
      apiKey: "kp_live_a1b9r2gf54d...",
      status: "Active",
    },
    {
      id: "930gf74h",
      name: "Acme API",
      domain: "api.acme.com",
      paymentGateways: ["Stripe", "Braintree"],
      apiKey: "kp_live_x9y8z7a6b5c4...",
      status: "Active",
    },
    {
      id: "041hi85i",
      name: "Acme Store",
      domain: "store.acme.com",
      paymentGateways: [],
      apiKey: "kp_test_f1e2d3c4b5a6...",
      status: "Disconnected",
    },
  ];
}

const Websites = async () => {
  const data = await getData();

  return (
    <div>
      <Heading
        title="Websites"
        subTitle="Manage your WordPress sites and their payment settings"
      />

      {/* Client Component with Search and Table */}
      <WebsitesClient data={data} columns={columns} />
    </div>
  );
};

export default Websites;
