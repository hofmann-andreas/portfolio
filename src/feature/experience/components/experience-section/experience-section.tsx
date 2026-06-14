"use client";

import { useEffect, useRef, useState } from "react";

import { Section } from "@/components/section";

import { experiences } from "../../data/experiences";
import { Experience } from "../experience/experience";

export function ExperienceSection() {
  const [lineVisible, setLineVisible] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section id="experience" title="Experience" eyebrow="02 ——— Work" alternate>
      <div ref={ref} className="relative pl-1">
        {/* Timeline line — draws downward as section enters view */}
        <div
          className="absolute top-3 bottom-0 left-0 w-px origin-top transition-[transform] duration-[1600ms] ease-out"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-border), var(--color-border) 80%, transparent)",
            transform: lineVisible ? "scaleY(1)" : "scaleY(0)",
          }}
          aria-hidden="true"
        />

        {experiences.map((experience) => (
          <Experience key={experience.id} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
