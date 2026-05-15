"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (!barRef.current) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      barRef.current.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : "0%";
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div ref={barRef} className="fixed top-0 left-0 z-[60] h-0.5 w-0 bg-primary" />;
}
