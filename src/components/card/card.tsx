import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

export function Card(props: CardProps) {
  const { children } = props;

  return <div className="rounded-lg border border-border bg-card p-8">{children}</div>;
}
