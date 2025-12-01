import clsx from "clsx";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Badge(props: BadgeProps) {
  const { children, size = "md" } = props;

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <span className={clsx("rounded-full bg-primary/10 text-primary", sizeClasses[size])}>
      {children}
    </span>
  );
}
