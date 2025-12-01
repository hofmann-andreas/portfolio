import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export function Badge(props: BadgeProps) {
  const { children } = props;

  return <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">{children}</span>;
}
