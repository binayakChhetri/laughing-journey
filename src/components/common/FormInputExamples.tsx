"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "@/components/common/FormInput";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User, Phone, MapPin, CreditCard, Key } from "lucide-react";

// ============================================================================
// EXAMPLE 1: Login Form
// ============================================================================

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginFormExample() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login:", data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6">
        <div>
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        </div>

        <FormInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          icon={<Mail className="w-4 h-4" />}
          helpText="We'll never share your email"
          required
        />

        <FormInput
          name="password"
          label="Password"
          type="password"
          showPasswordToggle={true}
          placeholder="••••••••"
          icon={<Lock className="w-4 h-4" />}
          required
        />

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </FormProvider>
  );
}

// ============================================================================
// EXAMPLE 2: Registration Form
// ============================================================================

const registrationSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "One uppercase letter")
      .regex(/[0-9]/, "One number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegistrationFormData = z.infer<typeof registrationSchema>;

export function RegistrationFormExample() {
  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Register:", data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6">
        <div>
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        </div>

        <FormInput
          name="name"
          label="Full Name"
          placeholder="John Doe"
          icon={<User className="w-4 h-4" />}
          required
        />

        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={<Mail className="w-4 h-4" />}
          required
        />

        <FormInput
          name="password"
          label="Password"
          type="password"
          showPasswordToggle={true}
          placeholder="••••••••"
          icon={<Lock className="w-4 h-4" />}
          helpText="Min 8 chars, uppercase, number"
          required
        />

        <FormInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          showPasswordToggle={true}
          placeholder="••••••••"
          icon={<Lock className="w-4 h-4" />}
          required
        />

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </FormProvider>
  );
}

// ============================================================================
// EXAMPLE 3: API Credentials (Like your design)
// ============================================================================

const apiCredentialsSchema = z.object({
  publishableKey: z
    .string()
    .min(1, "Publishable key is required")
    .startsWith("pk_live_", "Must be a live publishable key"),
  secretKey: z
    .string()
    .min(1, "Secret key is required")
    .startsWith("sk_live_", "Must be a live secret key"),
});

type ApiCredentialsFormData = z.infer<typeof apiCredentialsSchema>;

export function ApiCredentialsFormExample() {
  const form = useForm<ApiCredentialsFormData>({
    resolver: zodResolver(apiCredentialsSchema),
  });

  const onSubmit = (data: ApiCredentialsFormData) => {
    console.log("API Credentials:", data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">API Credentials</h1>
          <p className="text-muted-foreground">
            Add your payment gateway API credentials
          </p>
        </div>

        <FormInput
          name="publishableKey"
          label="Publishable Key"
          placeholder="pk_live_..."
          icon={<Key className="w-4 h-4" />}
          description="Use live credentials for production. Real transactions will be processed."
          helpText="Your publishable key is safe to embed in your frontend code"
          required
        />

        <FormInput
          name="secretKey"
          label="Secret Key"
          type="password"
          showPasswordToggle={true}
          placeholder="sk_live_..."
          icon={<Key className="w-4 h-4" />}
          helpText="Keep your secret key confidential. Never share it publicly."
          required
        />

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Test Connection
        </Button>
      </form>
    </FormProvider>
  );
}

// ============================================================================
// EXAMPLE 4: Billing Address Form
// ============================================================================

const billingSchema = z.object({
  fullName: z.string().min(2, "Full name required"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  address: z.string().min(5, "Address required"),
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, "Format: MM/YY"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3-4 digits"),
});

type BillingFormData = z.infer<typeof billingSchema>;

export function BillingFormExample() {
  const form = useForm<BillingFormData>({
    resolver: zodResolver(billingSchema),
  });

  const onSubmit = (data: BillingFormData) => {
    console.log("Billing:", data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6">
        <div>
          <h2 className="text-2xl font-bold mb-6">Billing Information</h2>
        </div>

        <FormInput
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          icon={<User className="w-4 h-4" />}
          required
        />

        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="john@example.com"
          icon={<Mail className="w-4 h-4" />}
          required
        />

        <FormInput
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          icon={<Phone className="w-4 h-4" />}
          required
        />

        <FormInput
          name="address"
          label="Street Address"
          placeholder="123 Main St, Apt 4B"
          icon={<MapPin className="w-4 h-4" />}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            name="expiryDate"
            label="Expiry Date"
            placeholder="MM/YY"
            type="text"
            required
          />

          <FormInput
            name="cvv"
            label="CVV"
            placeholder="123"
            type="password"
            showPasswordToggle={true}
            required
          />
        </div>

        <FormInput
          name="cardNumber"
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          icon={<CreditCard className="w-4 h-4" />}
          helpText="Your payment information is secure"
          required
        />

        <Button type="submit" className="w-full">
          Complete Payment
        </Button>
      </form>
    </FormProvider>
  );
}

// ============================================================================
// Example Usage Page
// ============================================================================

export default function FormExamplesPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-2 text-center">
          FormInput Examples
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Showcasing different use cases with React Hook Form and Zod
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Login Form */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <LoginFormExample />
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <RegistrationFormExample />
          </div>

          {/* API Credentials */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ApiCredentialsFormExample />
          </div>

          {/* Billing Form */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <BillingFormExample />
          </div>
        </div>
      </div>
    </div>
  );
}
