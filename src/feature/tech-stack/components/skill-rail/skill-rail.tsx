"use client";

import { useEffect, useRef, useState } from "react";

import { techStack } from "../../data/tech-stack-data";

// Cumulative chip counts before each category — used to compute stagger delays
const offsets = techStack.reduce<number[]>((acc, {}, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + techStack[i - 1].technologies.length);
  return acc;
}, []);

export function SkillRail() {
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 250);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref}>
      {techStack.map(({ category, technologies }, catIndex) => (
        <div key={category} className="border-t border-border py-7 last:border-b">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-16">
            {/* Category label */}
            <div className="shrink-0 md:w-44">
              {/* Accent bar grows in when section becomes visible */}
              <div
                className="mb-3 h-0.5 rounded-full bg-primary transition-[width] duration-500 ease-out"
                style={{
                  width: visible ? "2rem" : "0",
                  transitionDelay: visible ? `${catIndex * 100}ms` : "0ms",
                }}
              />
              <p className="mb-1.5 text-[9px] font-bold tracking-[0.3em] text-muted-foreground/40 uppercase">
                {String(catIndex + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {category}
              </h3>
              <p className="mt-2 text-[11px] text-muted-foreground/50 tabular-nums">
                {technologies.length} technologies
              </p>
            </div>

            {/* Technology chips — stagger in via animation-play-state */}
            <div className="flex flex-1 flex-wrap gap-2">
              {technologies.map((tech, techIndex) => (
                <span
                  key={tech}
                  className="group relative animate-chip-in cursor-default overflow-hidden rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/70 transition-[background-color,border-color,color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/25"
                  style={{
                    animationDelay: `${(offsets[catIndex] + techIndex) * 35}ms`,
                    animationPlayState: visible ? "running" : "paused",
                  }}
                >
                  {/* Shimmer sweep on hover */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative">{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
