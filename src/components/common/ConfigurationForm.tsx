"use client";

import {
  useForm,
  FormProvider,
  Controller,
  useFormContext,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { CircleAlert, FlaskConical, RadioTower } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../ui/field";
import { Input } from "../ui/input";

interface PaymentConfigSchema {
  required: string[];
  properties: Record<string, { type: string; description: string }>;
}

// Create dynamic form schema based on PaymentConfigSchema
const createDynamicSchema = (configSchema: PaymentConfigSchema) => {
  const { properties, required } = configSchema;
  console.log("Inside createDynamicSchema", configSchema);

  const schemaFields: Record<string, z.ZodTypeAny> = {};
  Object.entries(properties).forEach(([key, value]) => {
    let fieldSchema;

    switch (value.type) {
      case "string":
        fieldSchema = required.includes(key)
          ? z.string().min(1, { message: `${value.description} is required` })
          : z.string().optional();
        break;
      default:
        fieldSchema = z.string().optional();
    }

    schemaFields[key] = fieldSchema;
  });

  return z.object(schemaFields);
};

// Create default values for the form fields
const createDefaultValues = (
  properties: Record<string, { type: string; description: string }>
) => {
  const defaultValues: Record<string, string> = {};

  Object.entries(properties).forEach(([key]) => {
    defaultValues[key] = "";
  });

  return defaultValues;
};

// Prefix properties with 'test_' for test/sandbox form
// Similar function can be used if needed to differentiate between production and test fields
// It prevents naming conflicts in the form state
function prefixFormFields(
  properties: Record<string, { type: string; description: string }>,
  prefix: string
) {
  const result: Record<string, { type: string; description: string }> = {};
  Object.entries(properties).forEach(([key, value]) => {
    result[`${prefix}${key}`] = value;
  });
  return Object.entries(result);
}

export default function ConfigurationForm({
  configSchema,
  paymentName,
}: {
  configSchema: PaymentConfigSchema;
  paymentName: string;
}) {
  // Generate dynamic form schema and default values for payment gateway configuration in  production
  const prodFormFields = prefixFormFields(configSchema.properties, "prod_");
  const prodFormSchema = createDynamicSchema({
    properties: Object.fromEntries(prodFormFields),
    required: configSchema.required.map((field) => `prod_${field}`),
  });

  type ProductionSchemaDataType = z.infer<typeof prodFormSchema>;
  const prodForm = useForm<ProductionSchemaDataType>({
    resolver: zodResolver(prodFormSchema),
    defaultValues: createDefaultValues(Object.fromEntries(prodFormFields)),
    mode: "onChange",
  });

  const onSubmitProductionForm = (data: ProductionSchemaDataType) => {
    console.log("Production form was submitted with the following data:", data);
  };

  // Generate dynamic form schema and default values for payment gateway configuration in test/sandbox
  const testFormFields = prefixFormFields(configSchema.properties, "test_");
  const testFormSchema = createDynamicSchema({
    properties: Object.fromEntries(testFormFields),
    required: configSchema.required.map((field) => `test_${field}`),
  });
  type TestSchemaDataType = z.infer<typeof testFormSchema>;

  const testForm = useForm<TestSchemaDataType>({
    resolver: zodResolver(testFormSchema),
    defaultValues: createDefaultValues(Object.fromEntries(testFormFields)),
    mode: "onChange",
  });

  const onSubmitTestForm = (data: TestSchemaDataType) => {
    console.log("Test form was submitted with the following data:", data);
  };

  // Generate dynamic form schema and default values for webhook configuration
  const webhookConfigSchema = {
    webHook: {
      description: "Webhook URL",
      type: "string",
      metaInfo: `Add this URL to your ${paymentName} webhook settings`,
      placeholder: `https://yoursite.com/webhook/${paymentName}`,
    },
    webHookSecret: {
      description: "Webhook Secret",
      type: "string",
      metaInfo: "This is used to verify webhook authenticity",
      placeholder: "Enter your webhook secret here",
    },
  };

  const webhookFormFields = prefixFormFields(webhookConfigSchema, "webhook_");

  const webhookFormSchema = createDynamicSchema({
    properties: Object.fromEntries(webhookFormFields),
    required: configSchema.required.map((field) => `webhook_${field}`),
  });

  type WebhookSchemaDataType = z.infer<typeof webhookFormSchema>;

  const webhookForm = useForm<WebhookSchemaDataType>({
    resolver: zodResolver(webhookFormSchema),
    defaultValues: createDefaultValues(Object.fromEntries(webhookFormFields)),
    mode: "onChange",
  });

  const onSubmitWebhookForm = (data: WebhookSchemaDataType) => {
    console.log("Webhook form was submitted with the following data:", data);
  };

  return (
    <div className="w-full space-y-4">
      <div className="bg-white rounded-xl p-6 pt-4 text-primary-foreground">
        <div className="">
          <h1 className="text-xl font-semibold">API Credentials</h1>
          <hr className="mt-4 mb-4 border-[#E3E6E7] border" />
        </div>

        {/* Live/Production Credentials Form */}
        <FormRoot
          title="Live/Production Credentials"
          icon={<RadioTower size={20} />}
        >
          <AlertMessage message="Use live credentials for production. Real transactions will be processed." />
          <FormProvider {...prodForm}>
            <form onSubmit={prodForm.handleSubmit(onSubmitProductionForm)}>
              <DynamicFormFields formFields={prodFormFields} />
              <Button
                type="submit"
                className="rounded-3xl cursor-pointer w-[152px] h-11 text-white mt-4"
              >
                Test Connection
              </Button>
            </form>
          </FormProvider>
        </FormRoot>

        <hr className="my-6" />

        {/* Test/Sandbox Credentials Form */}
        <FormRoot
          title="Test/Sandbox Credentials"
          icon={<FlaskConical size={20} />}
        >
          <AlertMessage message="Use test credentials for development. No real transactions will be processed." />
          <FormProvider {...testForm}>
            <form onSubmit={testForm.handleSubmit(onSubmitTestForm)}>
              <DynamicFormFields formFields={testFormFields} />
              <Button
                type="submit"
                className="rounded-3xl cursor-pointer w-[152px] h-11 text-white mt-4"
              >
                Test Connection
              </Button>
            </form>
          </FormProvider>
        </FormRoot>
      </div>

      {/* Webhook Configuration   form */}
      <div className="bg-white rounded-xl p-6 pt-4 text-primary-foreground">
        <FormRoot
          title="Webhook Configuration"
          subTitle="Configure webhooks to receive real-time notifications about payment events."
        >
          <FormProvider {...webhookForm}>
            <form onSubmit={webhookForm.handleSubmit(onSubmitWebhookForm)}>
              <DynamicFormFields
                formFields={webhookFormFields}
                formFor="webhook"
              />
              {/* <Button
                type="submit"
                className="rounded-3xl cursor-pointer w-[152px] h-11 text-white mt-4"
              >
                Test Connection
              </Button> */}
            </form>
          </FormProvider>
          <AlertMessage message="Webhooks are essential for processing refunds, chargebacks, and subscription events. Make sure to configure them in your Stripe dashboard.." />
        </FormRoot>
      </div>
    </div>
  );
}

// We have used the component composition pattern here.
// We have separated FormRoot and AlertMessage components for better reusability and cleaner code.
// This allows us to easily reuse these components in different parts of the application.
interface FormRootProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  icon?: React.ReactNode;
}

const FormRoot = ({ children, title, icon, subTitle }: FormRootProps) => {
  return (
    <div className="space-y-4">
      <div className="">
        <div className="flex text-lg font-medium items-center space-x-2">
          {" "}
          {icon}
          <h2>{title}</h2>
        </div>
        {subTitle && <p className="text-sm text-[#566267] mt-1">{subTitle}</p>}
      </div>
      {children}
    </div>
  );
};

const AlertMessage = ({ message }: { message: string }) => {
  return (
    <div className="p-3 bg-[#FEF6EE] border border-[#FFB546] rounded-lg flex items-center gap-2 ">
      <CircleAlert className="text-[#FFB546]" />
      <p className="text-sm text-primary-foreground">{message}</p>
    </div>
  );
};

interface DynamicFormFieldsProps {
  formFields: [
    string,
    {
      type: string;
      description: string;
      metaInfo?: string;
      placeholder?: string;
    }
  ][];
  formFor?: string;
}

export const DynamicFormFields = ({
  formFields,
  formFor,
}: DynamicFormFieldsProps) => {
  const { control } = useFormContext();

  console.log("Rendering DynamicFormFields with fields:", formFields);

  return (
    <FieldGroup className="gap-4">
      {formFields.map(([key, value]) => (
        <Controller
          key={key}
          name={key}
          control={control}
          render={({ field, fieldState }) => (
            <Field className="gap-1.5">
              <FieldLabel htmlFor={key}>{value.description}</FieldLabel>
              <Input
                className="bg-[#0F1D230A] placeholder-[#859094] border-[#E3E6E7] font-medium tracking-wider h-10"
                id={key}
                aria-invalid={fieldState.invalid}
                placeholder={formFor ? `${value?.placeholder}` : key}
                autoComplete="off"
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={
                  typeof field.value === "string" ||
                  typeof field.value === "number"
                    ? field.value
                    : ""
                }
                name={field.name}
                ref={field.ref}
              />
              {formFor === "webhook" && value?.metaInfo && (
                <FieldDescription>{value?.metaInfo}</FieldDescription>
              )}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      ))}
    </FieldGroup>
  );
};
