import clsx from "clsx";
import { ReactNode } from "react";

import { FadeIn } from "@/components/fade-in/fade-in";
import { Heading } from "@/components/heading";

interface SectionProps {
  children: ReactNode;
  id: string;
  title?: string;
  eyebrow?: string;
  align?: "left" | "center" | "right";
  adornment?: ReactNode;
  hasMargin?: boolean;
  alternate?: boolean;
}

export function Section(props: SectionProps) {
  const {
    children,
    id,
    title,
    eyebrow,
    align = "left",
    adornment,
    hasMargin = true,
    alternate,
  } = props;

  return (
    <section id={id} className={clsx("scroll-mt-24", alternate && "bg-card/30")}>
      <FadeIn>
        <div
          className={clsx("mx-auto flex max-w-7xl flex-col px-6", {
            "py-12 md:py-20": hasMargin,
          })}
        >
          {(title || adornment) && (
            <div
              className={clsx("mb-10", {
                "flex items-start justify-between": adornment,
                "flex flex-col items-center text-center": !adornment && align === "center",
              })}
            >
              <div>
                {eyebrow && (
                  <p className="mb-2.5 text-[10px] font-bold tracking-[0.28em] text-primary/70 uppercase">
                    {eyebrow}
                  </p>
                )}
                {title && <Heading type="h2">{title}</Heading>}
              </div>
              {adornment && adornment}
            </div>
          )}
          {children}
        </div>
      </FadeIn>
    </section>
  );
}
