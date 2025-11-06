import PaymentGatewayConfig from "@/features/payment-gateway/PaymentGatewayConfig";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  // Mock paymentConfigSchema for demonstration
  const paymentConfigSchema = {
    required: ["apiKey", "secretKey"],
    properties: {
      apiKey: {
        type: "string",
        description: "API Key",
      },
      secretKey: {
        type: "string",
        description: "Secret Key",
      },
      clientId: {
        type: "string",
        description: "Client ID",
      },
    },
  };

  return (
    <PaymentGatewayConfig
      paymentName={slug}
      paymentConfigSchema={paymentConfigSchema}
    />
  );
};

export default page;
