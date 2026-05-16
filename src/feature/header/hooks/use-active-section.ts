"use client";

import { useEffect, useState } from "react";

const HEADER_HEIGHT = 80;

export function useActiveSection(sectionIds: Array<string>) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const getSections = () =>
      sectionIds.flatMap((id) => {
        const element = document.getElementById(id);
        return element ? [{ id, top: element.getBoundingClientRect().top + window.scrollY }] : [];
      });

    const onScroll = () => {
      const scrollY = window.scrollY + HEADER_HEIGHT + 1;
      const active = getSections()
        .filter((section) => section.top <= scrollY)
        .at(-1);
      setActiveId(active?.id ?? "");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return activeId;
}
