import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

import { ButtonVariant, getButtonBaseClassnames, getButtonVariantClasses } from "../utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isFullWidth?: boolean;
  isFullWidthFromSM?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className,
    isFullWidth,
    isFullWidthFromSM,
    ...rest
  } = props;
  const baseClassnames = getButtonBaseClassnames({ isFullWidth, isFullWidthFromSM });
  const variantClassnames = getButtonVariantClasses(variant);

  return (
    <button
      className={clsx(baseClassnames, variantClassnames, className, { "w-full": isFullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}
