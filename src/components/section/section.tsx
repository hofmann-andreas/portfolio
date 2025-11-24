import clsx from "clsx";
import { ReactNode } from "react";

import { Heading } from "@/components/heading";

interface SectionProps {
  children: ReactNode;
  id: string;
  title?: string;
  align?: "left" | "center" | "right";
  adornment?: ReactNode;
}

export function Section(props: SectionProps) {
  const { children, id, title, align = "left", adornment } = props;

  return (
    <section id={id}>
      <div
        className={clsx({
          "flex justify-center": align === "center",
          "flex justify-end": align === "right",
          "flex justify-between": adornment,
        })}
      >
        <Heading type="h2">{title}</Heading>
        {adornment && adornment}
      </div>

      {children}
    </section>
  );
}
