import clsx from "clsx";
import { ReactNode } from "react";

import { FadeIn } from "@/components/fade-in/fade-in";
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
      <FadeIn>
        <div
          className={clsx("mx-auto flex max-w-7xl scroll-mt-24 flex-col px-6", {
            "py-12 md:py-20": hasMargin,
          })}
        >
          {(title || adornment) && (
            <div
              className={clsx("mb-8", {
                "flex items-start justify-between": adornment,
                "flex flex-col items-center text-center": !adornment && align === "center",
              })}
            >
              {title && <Heading type="h2">{title}</Heading>}
              {adornment && adornment}
            </div>
          )}
          {children}
        </div>
      </FadeIn>
    </section>
  );
}
