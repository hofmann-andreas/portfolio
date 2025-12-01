import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

import { ButtonVariant, getButtonVariantClasses } from "./utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className, ...rest } = props;

  const variantClassnames = getButtonVariantClasses(variant);

  return (
    <button className={clsx(variantClassnames, className)} {...rest}>
      {children}
    </button>
  );
}
