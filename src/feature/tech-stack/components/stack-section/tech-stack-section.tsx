"use client";

import { LayoutList, Share2 } from "lucide-react";
import { useState } from "react";

import { Section } from "@/components/section";

import { Constellation } from "../constellation/constellation";
import { SkillRail } from "../skill-rail/skill-rail";

type View = "rail" | "constellation";

function ViewToggle({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  return (
    <div className="flex overflow-hidden rounded-lg border border-border bg-muted/50 p-0.5">
      <button
        onClick={() => onChange("rail")}
        aria-pressed={view === "rail"}
        className={[
          "flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all duration-200",
          view === "rail"
            ? "bg-card text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        ].join(" ")}
      >
        <LayoutList className="h-3.5 w-3.5" />
        List
      </button>
      <button
        onClick={() => onChange("constellation")}
        aria-pressed={view === "constellation"}
        className={[
          "flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all duration-200",
          view === "constellation"
            ? "bg-card text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        ].join(" ")}
      >
        <Share2 className="h-3.5 w-3.5" />
        Graph
      </button>
    </div>
  );
}

export function TechStackSection() {
  const [view, setView] = useState<View>("rail");

  return (
    <Section
      id="stack"
      title="Tech Stack"
      eyebrow="03 ——— Tools"
      adornment={
        <span className="hidden md:block">
          <ViewToggle view={view} onChange={setView} />
        </span>
      }
    >
      {/* Mobile: always show list */}
      <div className="md:hidden">
        <SkillRail />
      </div>
      {/* Desktop: toggle between list and graph */}
      <div key={view} className="hidden animate-[hero-fade-up_0.35s_ease-out_both] md:block">
        {view === "rail" ? <SkillRail /> : <Constellation />}
      </div>
    </Section>
  );
}
