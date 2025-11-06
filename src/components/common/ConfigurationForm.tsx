"use client";

import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "@/components/common/FormInput";
import { Button } from "@/components/ui/button";
import { Key, Lock, RadioTower } from "lucide-react";
import { RegistrationFormExample } from "./FormInputExamples";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

interface PaymentConfigSchema {
  required: string[];
  properties: Record<string, { type: string; description: string }>;
}

// Define Zod Schema
const apiCredentialsSchema = z.object({
  publishableKey: z
    .string()
    .min(1, "Publishable key is required")
    .startsWith("pk_live_", "Must be a live key"),
  secretKey: z
    .string()
    .min(1, "Secret key is required")
    .startsWith("sk_live_", "Must be a live key"),
});

type ApiCredentialsFormData = z.infer<typeof apiCredentialsSchema>;

// Create dynamic form schema based on PaymentConfigSchema
const createDynamicSchema = (configSchema: PaymentConfigSchema) => {
  const { properties, required } = configSchema;
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

export default function ConfigurationForm({
  configSchema,
}: {
  configSchema: PaymentConfigSchema;
}) {
  const dynamicSchema = createDynamicSchema(configSchema);
  const formFields = Object.entries(configSchema.properties);

  console.log(formFields);

  type SchemaDataType = z.infer<typeof dynamicSchema>;

  // const form = useForm<ApiCredentialsFormData>({
  //   resolver: zodResolver(apiCredentialsSchema),
  //   defaultValues: {
  //     publishableKey: "",
  //     secretKey: "",
  //   },
  // });

  const form = useForm<SchemaDataType>({
    resolver: zodResolver(dynamicSchema),
    defaultValues: createDefaultValues(configSchema.properties),
    mode: "onChange",
  });

  // const onSubmit = (data: ApiCredentialsFormData) => {
  //   console.log("Form Data:", data);
  //   // Handle submission
  // };

  const onSubmit = (data: SchemaDataType) => {
    console.log("New Form Data:", data);
  };

  return (
    <div className="w-full ">
      <div className="bg-white rounded-xl p-6 pt-4 text-primary-foreground">
        <div className="">
          <h1 className="text-xl font-semibold">API Credentials</h1>
          <hr className="mt-4 mb-4 border-[#E3E6E7] border" />
        </div>

        {/* Live/Production details credentials */}
        <div className="space-y-4">
          <div className="flex text-lg font-medium items-center space-x-2">
            <RadioTower size={20} className="text-primary-secondary" />
            <h2>Live/Production Credentials</h2>
          </div>
          <div>
            <div className="p-3 bg-[#FEF6EE] border border-[#FFB546] rounded-lg flex items-start gap-2">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Use live credentials for production. Real transactions will be
                processed.
              </p>
            </div>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              {formFields.map(([key, value]) => {
                console.log(key, value);
                return (
                  <Controller
                    key={key}
                    name={key}
                    control={form.control}
                    render={({ field, fieldState }) => {
                      console.log(field);
                      return (
                        <Field>
                          <FieldLabel htmlFor={key}>
                            {value.description}
                          </FieldLabel>
                          <Input
                            id={key}
                            aria-invalid={fieldState.invalid}
                            placeholder={key}
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
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      );
                    }}
                  />
                );
              })}
            </FieldGroup>
          </form>
          <Button
            type="submit"
            className="rounded-3xl cursor-pointer w-[152px] h-11 text-white"
          >
            Test Connection
          </Button>
        </div>
      </div>

      {/* <FormProvider {...form}> */}
      {/* <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"> */}
      {/* Publishable Key */}
      {/* <FormInput
            name="publishableKey"
            label="Publishable Key"
            placeholder="pk_live_..."
            type="text"
            icon={<Key className="w-4 h-4" />}
            description="Use live credentials for production. Real transactions will be processed."
            required
            helpText="Your publishable key is safe to embed in your frontend code"
          /> */}

      {/* Secret Key */}
      {/* <FormInput
            name="secretKey"
            label="Secret Key"
            placeholder="sk_live_..."
            type="password"
            showPasswordToggle={true}
            icon={<Lock className="w-4 h-4" />}
            required
            helpText="Keep your secret key confidential and never share it publicly"
          /> */}

      {/* Submit Button */}
      {/* <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Test Connection
          </Button> */}
      {/* </form> */}
      {/* </FormProvider> */}

      {/* <FormProvider {...newForm}>
        <form onSubmit={newForm.handleSubmit(onNewSubmit)}>
          {formFields.map(([key, value]) => {
            return (
              <FormInput
                name={key}
                key={key}
                label={value.description}
                placeholder={value.description}
                showPasswordToggle={true}
              />
            );
          })}

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
          >
            Test Connection
          </Button>
        </form>
      </FormProvider> */}

      {/* <RegistrationFormExample /> */}
    </div>
  );
}
