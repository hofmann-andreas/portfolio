import clsx from "clsx";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Badge(props: BadgeProps) {
  const { children, size = "md" } = props;

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={clsx(
        "rounded border border-border font-normal text-muted-foreground",
        sizeClasses[size]
      )}
    >
      {children}
    </span>
  );
}
