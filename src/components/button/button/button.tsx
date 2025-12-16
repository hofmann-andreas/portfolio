import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

import { ButtonVariant, getButtonBaseClassnames, getButtonVariantClasses } from "../utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isFullWidth?: boolean;
  hasMinWidthFromMD?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className,
    isFullWidth,
    hasMinWidthFromMD,
    ...rest
  } = props;
  const baseClassnames = getButtonBaseClassnames({ isFullWidth, hasMinWidthFromMD });
  const variantClassnames = getButtonVariantClasses({ variant });

  return (
    <button className={clsx(baseClassnames, variantClassnames, className)} {...rest}>
      {children}
    </button>
  );
}
