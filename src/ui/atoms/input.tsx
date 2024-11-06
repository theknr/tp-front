import * as React from "react";
import { cn } from "@/lib/utils.ts";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "underline";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-lg placeholder:text-white/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          variant === "underline" &&
            "border-0 border-b-2 border-white rounded-none focus:border-white ring-0 ring-offset-0",

          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
