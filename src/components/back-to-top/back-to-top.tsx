"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SIZE = 44;
const STROKE = 2;
const RADIUS = SIZE / 2 - STROKE / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SECTION_IDS = ["about", "experience", "stack", "projects", "contact"];
const HEADER_OFFSET = 96;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [completedSections, setCompletedSections] = useState(0);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
    });
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id));

    const onScroll = () => {
      const count = els.filter(
        (el) => el && el.getBoundingClientRect().top <= HEADER_OFFSET
      ).length;
      setCompletedSections(count);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const progress = completedSections / SECTION_IDS.length;
  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-[100vh]" />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`group fixed right-8 bottom-8 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-card shadow-md transition-all duration-300 hover:scale-[1.08] hover:shadow-lg ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {/* Progress ring */}
        <svg
          width={SIZE}
          height={SIZE}
          className="absolute inset-0 -rotate-90 overflow-visible"
          aria-hidden="true"
        >
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-primary transition-[stroke-dashoffset] duration-500"
          />
        </svg>

        <ArrowUp className="relative h-4 w-4 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
      </button>
    </>
  );
}
