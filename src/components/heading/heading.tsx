import clsx from "clsx";
import { ReactNode } from "react";

interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  marginBottom?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Heading(props: HeadingProps) {
  const { children, type, marginBottom, className } = props;

  const Component = type;

  const margin = clsx({
    "mb-1": marginBottom === "xs",
    "mb-2": marginBottom === "sm",
    "mb-4": marginBottom === "md",
    "mb-6": marginBottom === "lg",
    "mb-8": marginBottom === "xl",
  });

  const font = clsx({
    "font-display text-3xl font-bold tracking-tight": type === "h1",
    "font-display text-2xl font-semibold tracking-tight": type === "h2",
    "text-lg font-semibold": type === "h3",
    "text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground": type === "h4",
  });

  return (
    <Component
      className={clsx(font, margin, className)}
      style={type === "h2" ? { fontVariationSettings: '"SOFT" 50' } : undefined}
    >
      {children}
    </Component>
  );
}
