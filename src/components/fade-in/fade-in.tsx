"use client";

import clsx from "clsx";
import { ReactNode, useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

export function FadeIn({ children, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-1000 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
