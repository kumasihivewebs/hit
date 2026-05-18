"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-orange-600/50",
        secondary:
          "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600",
        outline:
          "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
        ghost: "text-white hover:bg-white/10",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-lg",
        md: "px-6 py-3 text-base rounded-lg",
        lg: "px-8 py-4 text-lg rounded-lg",
        xl: "px-10 py-5 text-xl rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  className,
  variant,
  size,
  isLoading,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="inline-block animate-spin">⏳</span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};
