"use client";

import React from "react";
import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  label?: string;
  placeholder?: string;
  description?: string;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
  helpText?: string;
  required?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  inputWrapperClassName?: string;
  inputClassName?: string;
  type?: string;
}

const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  placeholder,
  icon,
  showPasswordToggle = false,
  helpText,
  required,
  containerClassName,
  labelClassName,
  inputWrapperClassName,
  inputClassName,
  type = "text",
  ...controllerProps
}: FormInputProps<TFieldValues, TName>) => {
  const { control } = useFormContext<TFieldValues>();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Controller
      control={control}
      {...controllerProps}
      render={({ field, fieldState: { error } }) => {
        const isPasswordInput = type === "password" && showPasswordToggle;
        const inputType = isPasswordInput && showPassword ? "text" : type;

        return (
          <div className={cn("w-full space-y-2", containerClassName)}>
            {/* Label */}
            {label && (
              <label
                htmlFor={field.name}
                className={cn(
                  "block text-sm font-medium text-foreground",
                  labelClassName
                )}
              >
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </label>
            )}

            {/* Description Box */}
            {/* {description && (
              <div className="p-3 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-amber-400 dark:bg-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  {description}
                </p>
              </div>
            )} */}

            {/* Input Wrapper */}
            <div
              className={cn(
                "relative flex items-center",
                inputWrapperClassName
              )}
            >
              {/* Left Icon */}
              {icon && (
                <div className="absolute left-3 flex items-center justify-center text-muted-foreground pointer-events-none">
                  {icon}
                </div>
              )}

              {/* Input */}
              <Input
                id={field.name}
                type={inputType}
                placeholder={placeholder}
                className={cn(
                  "transition-all duration-200",
                  icon && "pl-10",
                  isPasswordInput && "pr-10",
                  error &&
                    "border-destructive focus-visible:ring-destructive/50 focus-visible:border-destructive",
                  inputClassName
                )}
                aria-invalid={!!error}
                aria-describedby={
                  error
                    ? `${field.name}-error`
                    : helpText
                    ? `${field.name}-hint`
                    : undefined
                }
                {...field}
                value={field.value ?? ""}
              />

              {/* Error Icon */}
              {error && (
                <div className="absolute right-3 flex items-center justify-center text-destructive pointer-events-none">
                  <AlertCircle className="w-4 h-4" />
                </div>
              )}

              {/* Password Toggle */}
              {isPasswordInput && !error && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <p
                id={`${field.name}-error`}
                className="text-sm text-destructive flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                {error.message || "This field is invalid"}
              </p>
            )}

            {/* Help Text */}
            {helpText && !error && (
              <p
                id={`${field.name}-hint`}
                className="text-sm text-muted-foreground"
              >
                {helpText}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default FormInput;
