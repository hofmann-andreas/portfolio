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
            "py-20": hasMargin,
          })}
        >
          {(title || adornment) && (
            <div
              className={clsx("mb-8", {
                "flex items-start justify-between": adornment,
                "flex flex-col items-center": !adornment && align === "center",
                "flex flex-col items-end": !adornment && align === "right",
              })}
            >
              {title &&
                (align === "center" ? (
                  <div className="flex flex-col items-center">
                    <Heading type="h2">{title}</Heading>
                    <div className="mt-2 h-1 w-10 rounded-full bg-primary" />
                  </div>
                ) : (
                  <div className="border-l-4 border-primary pl-4">
                    <Heading type="h2">{title}</Heading>
                  </div>
                ))}
              {adornment && adornment}
            </div>
          )}
          {children}
        </div>
      </FadeIn>
    </section>
  );
}
