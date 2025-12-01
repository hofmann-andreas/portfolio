import clsx from "clsx";
import { ReactNode } from "react";

interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  marginBottom?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function Heading(props: HeadingProps) {
  const { children, type, marginBottom } = props;

  const Component = type;

  const margin = clsx({
    "mb-1": marginBottom === "xs",
    "mb-2": marginBottom === "sm",
    "mb-4": marginBottom === "md",
    "mb-6": marginBottom === "lg",
    "mb-8": marginBottom === "xl",
  });

  const font = clsx({
    "text-3xl font-bold": type === "h1",
    "text-2xl font-semibold": type === "h2",
    "text-xl font-medium": type === "h3",
    "text-lg font-normal": type === "h4",
  });

  return <Component className={clsx(font, margin)}>{children}</Component>;
}
