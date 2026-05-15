import clsx from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { HTMLAttributes, ReactNode } from "react";

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement>, NextLinkProps {
  children?: ReactNode;
  shouldOpenInNewWindow?: boolean;
}

export function Link(props: LinkProps) {
  const { shouldOpenInNewWindow, children, className, ...rest } = props;

  const externalProps = shouldOpenInNewWindow
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <NextLink
      {...externalProps}
      {...rest}
      className={clsx(
        "flex items-center gap-2 rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none",
        className
      )}
    >
      {children}
    </NextLink>
  );
}
