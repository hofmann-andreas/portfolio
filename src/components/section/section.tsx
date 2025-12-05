import clsx from "clsx";
import { ReactNode } from "react";

import { Heading } from "@/components/heading";

interface SectionProps {
  children: ReactNode;
  id: string;
  title?: string;
  align?: "left" | "center" | "right";
  adornment?: ReactNode;
  hasMargin?: boolean;
}

export function Section(props: SectionProps) {
  const { children, id, title, align = "left", adornment, hasMargin = true } = props;

  return (
    <section id={id}>
      <div
        className={clsx("mx-auto flex max-w-7xl scroll-mt-24 flex-col px-6", {
          "py-20": hasMargin,
        })}
      >
        {(title || adornment) && (
          <div
            className={clsx({
              "flex justify-center": align === "center",
              "flex justify-end": align === "right",
              "flex justify-between": adornment,
            })}
          >
            {title && (
              <Heading type="h2" marginBottom="xl">
                {title}
              </Heading>
            )}
            {adornment && adornment}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
