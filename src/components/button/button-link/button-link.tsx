import clsx from "clsx";

import { Link, LinkProps } from "@/components/link/link";

import { ButtonProps } from "../button/button";
import { getButtonBaseClassnames, getButtonVariantClasses } from "../utils";

type ButtonLinkProps = ButtonProps & LinkProps;

export function ButtonLink(props: ButtonLinkProps) {
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
    <Link className={clsx(baseClassnames, variantClassnames, className)} {...rest}>
      {children}
    </Link>
  );
}
