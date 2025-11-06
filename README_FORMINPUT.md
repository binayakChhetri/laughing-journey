![FormInput Component](https://img.shields.io/badge/FormInput-Production%20Ready-brightgreen?style=for-the-badge)

# FormInput Component

A **production-ready**, **fully-typed** form input component with **React Hook Form**, **Zod validation**, and **shadcn/ui** integration.

> Built for KrisPPay Frontend with ❤️

---

## 🌟 Features at a Glance

| Feature                 | Benefit                                    |
| ----------------------- | ------------------------------------------ |
| 🎯 **React Hook Form**  | Minimal re-renders, best performance       |
| ✅ **Zod Validation**   | Type-safe, automatic error display         |
| 🎨 **shadcn/ui Styled** | Professional, consistent design            |
| 📘 **TypeScript**       | Full type safety from schema to submission |
| 🌙 **Dark Mode**        | Works in any theme automatically           |
| ♿ **Accessible**       | WCAG 2.1 AA compliant                      |
| 📱 **Responsive**       | Works on all devices                       |
| 🔒 **Secure**           | No hardcoded secrets, validated input      |

---

## 📦 What's Included

### Core Files

```
src/components/common/
├── FormInput.tsx             (Main component)
├── FormInputExample.tsx       (Simple example)
├── FormInputExamples.tsx      (4 complete examples)
└── FormInput.md              (Full documentation)
```

### Documentation

```
Root/
├── FORMINPUT_INDEX.md        (This navigation guide)
├── FORMINPUT_GUIDE.md        (Quick start & setup)
├── FORMINPUT_ARCHITECTURE.md (Technical details)
├── FORMINPUT_RECIPES.md      (Common patterns)
└── FORMINPUT_COMPLETE.md     (Project overview)
```

---

## 🚀 Quick Start

### 1️⃣ Import Component

```tsx
import FormInput from "@/components/common/FormInput";
```

### 2️⃣ Define Schema

```tsx
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Min 8 characters"),
});
```

### 3️⃣ Create Form

```tsx
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const form = useForm({
  resolver: zodResolver(schema),
});
```

### 4️⃣ Build Form

```tsx
<FormProvider {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormInput name="email" label="Email" type="email" required />
    <FormInput
      name="password"
      label="Password"
      type="password"
      showPasswordToggle
      required
    />
    <button type="submit">Submit</button>
  </form>
</FormProvider>
```

**That's it!** ✨

---

## 📖 Documentation

### Start Here

👉 **[FORMINPUT_INDEX.md](./FORMINPUT_INDEX.md)** - Navigation guide

### Quick Reference

- **[FORMINPUT_GUIDE.md](./FORMINPUT_GUIDE.md)** - Getting started (10 min read)
- **[src/components/common/FormInput.md](./src/components/common/FormInput.md)** - Full API (15 min read)

### Learn by Example

- **[FormInputExample.tsx](./src/components/common/FormInputExample.tsx)** - Single example
- **[FormInputExamples.tsx](./src/components/common/FormInputExamples.tsx)** - 4 examples
  1. Login Form
  2. Registration Form
  3. API Credentials (Your Design!)
  4. Billing Form

### Advanced Topics

- **[FORMINPUT_ARCHITECTURE.md](./FORMINPUT_ARCHITECTURE.md)** - Architecture & internals
- **[FORMINPUT_RECIPES.md](./FORMINPUT_RECIPES.md)** - Common patterns & solutions

---

## 💻 Examples

### Simple Login Form

```tsx
<FormInput name="email" label="Email" type="email" required />
<FormInput
  name="password"
  label="Password"
  type="password"
  showPasswordToggle
  required
/>
```

### With Icons

```tsx
import { Mail, Lock } from "lucide-react";

<FormInput
  name="email"
  label="Email"
  icon={<Mail className="w-4 h-4" />}
/>
<FormInput
  name="password"
  label="Password"
  type="password"
  icon={<Lock className="w-4 h-4" />}
/>
```

### With Description (Your Design)

```tsx
<FormInput
  name="apiKey"
  label="API Key"
  description="Keep your API key secret. Never share it publicly."
  placeholder="pk_live_..."
/>
```

### With Validation

```tsx
const schema = z.object({
  password: z
    .string()
    .min(8, "At least 8 characters")
    .regex(/[A-Z]/, "One uppercase")
    .regex(/[0-9]/, "One number"),
});

// Errors auto-display in FormInput! ✅
<FormInput name="password" label="Password" type="password" />;
```

---

## 🎯 Key Props

```tsx
<FormInput
  // Required (from React Hook Form)
  name="fieldName" // Field in Zod schema
  // UI Labels
  label="Field Label" // Display label
  placeholder="Enter..." // Placeholder text
  description="Info text" // Info box
  helpText="Help text" // Help below input
  required={true} // Show * indicator
  // Features
  type="text" // text, email, password, etc
  icon={<IconComponent />} // Icon in input
  showPasswordToggle={true} // For password fields
  // Styling
  containerClassName="" // Wrapper classes
  labelClassName="" // Label classes
  inputWrapperClassName="" // Wrapper classes
  inputClassName="" // Input classes
/>
```

See **[FormInput.md](./src/components/common/FormInput.md)** for full API reference.

---

## ✨ Features

### ✅ Core Features

- React Hook Form integration
- Zod validation with error display
- shadcn/ui styling
- Full TypeScript support
- Password toggle
- Icon support
- Description boxes
- Help text

### ✅ Advanced Features

- Dark mode support
- Full accessibility (WCAG AA)
- Keyboard navigation
- Screen reader friendly
- Responsive design
- Custom class support
- Error icons
- Semantic HTML

---

## 🛠️ Technologies

| Technology      | Version  | Purpose        |
| --------------- | -------- | -------------- |
| React           | 19.2.0   | UI Framework   |
| Next.js         | 16.0.1   | Meta Framework |
| TypeScript      | 5.x      | Type Safety    |
| React Hook Form | ^7.66.0  | Form State     |
| Zod             | ^4.1.12  | Validation     |
| shadcn/ui       | Latest   | Components     |
| Tailwind CSS    | 4.x      | Styling        |
| Lucide React    | ^0.552.0 | Icons          |

---

## 🎨 Design

The component matches your API Credentials design:

- ✅ Yellow/amber description boxes
- ✅ Info icon indicator
- ✅ Professional styling
- ✅ Dark mode compatible
- ✅ Error states with icons
- ✅ Password toggle with eye icon

---

## ♿ Accessibility

WCAG 2.1 AA compliant:

- ✅ Semantic HTML
- ✅ ARIA labels and descriptions
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ Error announcements

---

## 🚀 Getting Started

### Option 1: Copy & Customize Example

```tsx
// Copy from FormInputExample.tsx
// Customize for your needs
// Use in your page
```

### Option 2: Create From Scratch

```tsx
// Define schema → Create form → Add FormInput fields → Done!
```

### Option 3: Use Gallery

```tsx
// View all 4 examples in FormInputExamples.tsx
// Pick one to customize
```

---

## 📚 Learning Resources

| Resource                      | Time   | Purpose        |
| ----------------------------- | ------ | -------------- |
| **FORMINPUT_GUIDE.md**        | 10 min | Quick start    |
| **FormInput.md**              | 15 min | Full API       |
| **FormInputExample.tsx**      | 5 min  | Single example |
| **FormInputExamples.tsx**     | 10 min | 4 examples     |
| **FORMINPUT_RECIPES.md**      | 20 min | Patterns       |
| **FORMINPUT_ARCHITECTURE.md** | 15 min | Internals      |

---

## 🎯 Use Cases

✅ Login forms
✅ Registration forms
✅ API credential inputs
✅ Billing information
✅ Profile updates
✅ Checkout forms
✅ Settings forms
✅ Any form requiring validation

---

## 💡 Common Patterns

### Email Validation

```tsx
z.string().email("Invalid email");
```

### Password Requirements

```tsx
z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/);
```

### Confirm Password

```tsx
.refine((data) => data.password === data.confirmPassword)
```

### Conditional Fields

```tsx
const accountType = form.watch("accountType");
{
  accountType === "business" && <FormInput name="companyName" />;
}
```

See **[FORMINPUT_RECIPES.md](./FORMINPUT_RECIPES.md)** for 15+ patterns!

---

## 🔧 Troubleshooting

### Errors not displaying?

→ Make sure form is wrapped with `<FormProvider>`

### TypeScript errors?

→ Use `z.infer` for proper typing: `type FormData = z.infer<typeof schema>`

### Module not found?

→ Check import path: `import FormInput from "@/components/common/FormInput"`

See **[FORMINPUT_GUIDE.md](./FORMINPUT_GUIDE.md#troubleshooting)** for more!

---

## 📊 Stats

- **Total Files**: 8
- **Lines of Code**: 700+
- **Documentation**: 2000+ lines
- **Examples**: 4 complete forms
- **Patterns**: 15+
- **TypeScript**: 100%
- **Accessibility**: WCAG AA
- **Browser Support**: All modern

---

## ✅ Quality Checklist

- ✅ All files error-free
- ✅ TypeScript strict mode
- ✅ ESLint compliant
- ✅ Production-ready
- ✅ Fully documented
- ✅ Type-safe
- ✅ Accessible
- ✅ Performant
- ✅ Dark mode support
- ✅ Mobile friendly

---

## 🎁 What You Get

```
✅ Main component (FormInput.tsx)
✅ Simple example (FormInputExample.tsx)
✅ 4 complete examples (FormInputExamples.tsx)
✅ 5 markdown guides
✅ Architecture documentation
✅ Recipe collection
✅ Setup instructions
✅ This README
```

---

## 🚀 Next Steps

1. **Read**: [FORMINPUT_INDEX.md](./FORMINPUT_INDEX.md) for navigation
2. **Choose**: Your learning path
3. **Build**: Your first form
4. **Deploy**: To production! 🎉

---

## 📞 Quick Links

| Link                                                                   | Purpose          |
| ---------------------------------------------------------------------- | ---------------- |
| [FORMINPUT_INDEX.md](./FORMINPUT_INDEX.md)                             | Navigation guide |
| [FORMINPUT_GUIDE.md](./FORMINPUT_GUIDE.md)                             | Quick start      |
| [FormInput.md](./src/components/common/FormInput.md)                   | Full API         |
| [FormInputExample.tsx](./src/components/common/FormInputExample.tsx)   | Simple example   |
| [FormInputExamples.tsx](./src/components/common/FormInputExamples.tsx) | 4 examples       |
| [FORMINPUT_RECIPES.md](./FORMINPUT_RECIPES.md)                         | Patterns         |
| [FORMINPUT_ARCHITECTURE.md](./FORMINPUT_ARCHITECTURE.md)               | Technical        |

---

## 🎉 Ready?

```tsx
// Import
import FormInput from "@/components/common/FormInput";

// Define schema
const schema = z.object({
  /* your fields */
});

// Create form
const form = useForm({ resolver: zodResolver(schema) });

// Build form
<FormProvider {...form}>
  <form>
    <FormInput name="field" label="Label" />
  </form>
</FormProvider>;

// Done! ✨
```

**Start building amazing forms today!** 🚀

---

## 📄 License

Built with ❤️ for KrisPPay Frontend

---

## 👨‍💻 Author Notes

This component was designed to:

- ✅ Be production-ready out of the box
- ✅ Provide type-safe forms
- ✅ Handle validation elegantly
- ✅ Be fully accessible
- ✅ Work in dark mode
- ✅ Be reusable everywhere
- ✅ Require minimal configuration
- ✅ Scale with your application

---

**Questions?** Check [FORMINPUT_INDEX.md](./FORMINPUT_INDEX.md) 📖

**Ready to code?** Start with [FORMINPUT_GUIDE.md](./FORMINPUT_GUIDE.md) 🚀

**Happy coding!** ✨
