import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

import { ButtonVariant, getButtonBaseClassnames, getButtonVariantClasses } from "../utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isFullWidth?: boolean;
  hasMinWidthFromMD?: boolean;
  isLoading?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className,
    isFullWidth,
    hasMinWidthFromMD,
    isLoading,
    disabled,
    ...rest
  } = props;
  const baseClassnames = getButtonBaseClassnames({ isFullWidth, hasMinWidthFromMD });
  const variantClassnames = getButtonVariantClasses({ variant });

  return (
    <button
      className={clsx(baseClassnames, variantClassnames, className)}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
