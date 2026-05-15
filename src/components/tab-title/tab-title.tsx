"use client";

import { useEffect } from "react";

export function TabTitle() {
  useEffect(() => {
    const original = document.title;

    const handleVisibility = () => {
      document.title = document.hidden ? "👋 Come back!" : original;
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return null;
}
