"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Control, FieldValues, Path } from "react-hook-form";

interface PrimaryInputProps<T extends FieldValues> {
  control?: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  min?: number;
  rows?: number;
  disabled?: boolean;
  multiline?: boolean;
}

export const PrimaryInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  className,
  type,
  disabled = false,
}: PrimaryInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem
          className={cn(className, "flex-1", {
            "mb-1": !fieldState.error,
          })}
        >
          {label && (
            <FormLabel className="text-primary-dark font-medium text-sm">
              {label}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative w-full">
              <Input
                type={type}
                max={
                  type === "date"
                    ? new Date().toISOString().split("T")[0]
                    : undefined
                }
                placeholder={placeholder}
                {...field}
                value={field.value || ""}
                className={cn(
                  "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-2 border-primary  text-white disabled:opacity-75 bg-primary",
                  fieldState.error &&
                    "border border-red-500 focus-visible:border-red-500"
                )}
                disabled={disabled}
              />
            </div>
          </FormControl>
          {name !== "message_body" && (
            <FormMessage className="text-red-500 text-xs font-normal" />
          )}
        </FormItem>
      )}
    />
  );
};
