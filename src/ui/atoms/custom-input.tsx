import { Input } from "@/ui/atoms/input.tsx";
import React from "react";

type CustomUnderlineInputProps = {
  type: string;
  variant?: "default" | "underline";
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomUnderlineInput = React.forwardRef<
  HTMLInputElement,
  CustomUnderlineInputProps
>(({ type, variant = "underline", placeholder, ...rest }, ref) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="relative">
        <Input
          type={type}
          variant={variant}
          placeholder={placeholder}
          className="peer pl-0 bg-transparent !border-0 !border-b-2 !border-white rounded-none !outline-none !ring-0 !ring-offset-0 placeholder-transparent focus:!outline-none focus:!border-white focus:!ring-0 focus:!ring-offset-0 !text-xl !text-white"
          ref={ref}
          {...rest}
        />
      </div>
    </div>
  );
});

export default CustomUnderlineInput;
