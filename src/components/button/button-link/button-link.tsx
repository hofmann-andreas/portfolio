import clsx from "clsx";

import { getButtonBaseClassnames, getButtonVariantClasses } from "../utils";
import { Link, LinkProps } from "@/components/link/link";
import { ButtonProps } from "../button/button";

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
  const variantClassnames = getButtonVariantClasses(variant);

  return (
    <Link
      className={clsx(baseClassnames, variantClassnames, className, { "w-full": isFullWidth })}
      {...rest}
    >
      {children}
    </Link>
  );
}
