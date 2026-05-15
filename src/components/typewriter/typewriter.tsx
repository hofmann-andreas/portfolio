"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function Typewriter({ text, delay = 0, speed = 60, className }: TypewriterProps) {
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [displayed, setDisplayed] = useState(prefersReduced ? text : "");
  const [started, setStarted] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay, prefersReduced]);

  useEffect(() => {
    if (!started || displayed === text) return;
    const timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
    return () => clearTimeout(timeout);
  }, [started, displayed, text, speed]);

  return (
    <span className={`relative ${className ?? ""}`}>
      {displayed}
      <span
        aria-hidden
        className={`absolute -right-[0.1em] ${displayed !== text ? "animate-pulse" : "opacity-0"}`}
      >
        |
      </span>
    </span>
  );
}
