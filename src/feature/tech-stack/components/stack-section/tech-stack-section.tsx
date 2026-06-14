"use client";

import { LayoutList, Share2 } from "lucide-react";
import { useState, useSyncExternalStore } from "react";

import { Section } from "@/components/section";

import { TechStackData } from "../../types";

function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => obs.disconnect();
}
function useDarkMode() {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains("dark"),
    () => false
  );
}

const techStack: Array<TechStackData & { hue: number }> = [
  {
    category: "Frontend",
    hue: 220,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SWR",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Backend",
    hue: 158,
    technologies: ["Node.js", "Express.js", "Sequelize", "MySQL"],
  },
  {
    category: "Tooling",
    hue: 38,
    technologies: ["Git", "ArgoCD", "Vercel", "Playwright", "Jest", "Firebase"],
  },
];

type View = "rail" | "constellation";

/* ── Skill Rail ──────────────────────────────────────────────── */
function SkillRail() {
  return (
    <div className="flex flex-col divide-y divide-border">
      {techStack.map(({ category, technologies }) => (
        <div key={category} className="flex flex-col gap-4 py-6 md:flex-row md:gap-16">
          <div className="flex w-36 shrink-0 items-start gap-2">
            <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              {category}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-1.5 gap-y-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="group relative cursor-default overflow-hidden rounded-md border border-border bg-muted/60 px-2.5 py-1 text-sm font-medium text-foreground/80 transition-all duration-200 hover:-translate-y-px hover:border-primary/30 hover:bg-primary/5 hover:text-foreground hover:shadow-sm"
              >
                {/* shimmer sweep on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Constellation ───────────────────────────────────────────── */

type NodeDef = { x: number; y: number; label: string };
type HubDef = { x: number; y: number; label: string; hue: number; nodes: NodeDef[] };

const hubs: HubDef[] = [
  {
    label: "Frontend",
    hue: 220,
    x: 200,
    y: 178,
    nodes: [
      { x: 78, y: 62, label: "Next.js" },
      { x: 178, y: 40, label: "React" },
      { x: 272, y: 50, label: "TypeScript" },
      { x: 320, y: 134, label: "JavaScript" },
      { x: 302, y: 222, label: "Tailwind CSS" },
      { x: 50, y: 158, label: "SWR" },
      { x: 44, y: 262, label: "HTML" },
      { x: 132, y: 304, label: "CSS" },
    ],
  },
  {
    label: "Backend",
    hue: 158,
    x: 510,
    y: 362,
    nodes: [
      { x: 366, y: 430, label: "Node.js" },
      { x: 472, y: 450, label: "Express.js" },
      { x: 582, y: 432, label: "Sequelize" },
      { x: 628, y: 362, label: "MySQL" },
    ],
  },
  {
    label: "Tooling",
    hue: 38,
    x: 680,
    y: 168,
    nodes: [
      { x: 762, y: 66, label: "Git" },
      { x: 772, y: 150, label: "ArgoCD" },
      { x: 772, y: 238, label: "Vercel" },
      { x: 650, y: 36, label: "Playwright" },
      { x: 546, y: 44, label: "Jest" },
      { x: 526, y: 118, label: "Firebase" },
    ],
  },
];

const NODE_W = 72;
const NODE_H = 22;
const NODE_R = 5;

function Constellation() {
  const [hovered, setHovered] = useState<string | null>(null);
  const isDark = useDarkMode();

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-4 -left-8 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute right-12 bottom-4 h-52 w-52 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute top-8 right-32 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <svg
        viewBox="0 0 860 490"
        className="w-full"
        aria-label="Technology constellation diagram"
        role="img"
      >
        {hubs.map(({ label, hue, x: hx, y: hy, nodes }) => {
          const l = isDark ? 65 : 52;
          const hubColor = `hsl(${hue} 72% ${l}%)`;
          return (
            <g key={label}>
              {/* edges */}
              {nodes.map((n) => {
                const nx = n.x + NODE_W / 2;
                const ny = n.y + NODE_H / 2;
                const isActive = hovered === n.label;
                return (
                  <line
                    key={n.label}
                    x1={hx}
                    y1={hy}
                    x2={nx}
                    y2={ny}
                    stroke={hubColor}
                    strokeWidth={isActive ? 1.4 : 0.7}
                    opacity={isActive ? 0.5 : 0.2}
                    style={{ transition: "opacity 0.2s, stroke-width 0.2s" }}
                  />
                );
              })}

              {/* hub node */}
              <g style={{ cursor: "default" }}>
                <circle
                  cx={hx}
                  cy={hy}
                  r={30}
                  fill={`hsl(${hue} 75% 52% / 0.10)`}
                  stroke={hubColor}
                  strokeWidth={1.2}
                />
                <text
                  x={hx}
                  y={hy - 4}
                  textAnchor="middle"
                  fill={hubColor}
                  fontSize={10.5}
                  fontFamily="'Fraunces', Georgia, serif"
                  fontStyle="italic"
                >
                  {label}
                </text>
                <text
                  x={hx}
                  y={hy + 9}
                  textAnchor="middle"
                  fill={hubColor}
                  fontSize={6.5}
                  opacity={0.7}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  letterSpacing="0.1em"
                >
                  {String(hubs.indexOf(hubs.find((h) => h.label === label)!) + 1).padStart(2, "0")}
                </text>
              </g>

              {/* skill nodes */}
              {nodes.map((n) => {
                const isActive = hovered === n.label;
                return (
                  <g
                    key={n.label}
                    onMouseEnter={() => setHovered(n.label)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      cursor: "default",
                      transform: isActive ? "scale(1.14)" : "scale(1)",
                      transformOrigin: `${n.x + NODE_W / 2}px ${n.y + NODE_H / 2}px`,
                      transition: "transform 0.22s cubic-bezier(.34,1.56,.64,1)",
                    }}
                  >
                    <rect
                      x={n.x}
                      y={n.y}
                      width={NODE_W}
                      height={NODE_H}
                      rx={NODE_R}
                      fill={`hsl(${hue} 75% 52% / ${isActive ? 0.16 : 0.08})`}
                      stroke={`hsl(${hue} 70% 55% / ${isActive ? 0.7 : 0.38})`}
                      strokeWidth={isActive ? 1 : 0.8}
                      style={{
                        filter: isActive
                          ? `drop-shadow(0 2px 8px hsl(${hue} 70% 55% / 0.35))`
                          : "none",
                        transition: "all 0.2s",
                      }}
                    />
                    <text
                      x={n.x + NODE_W / 2}
                      y={n.y + 14.5}
                      textAnchor="middle"
                      fill={
                        isDark
                          ? `hsl(${hue} 75% ${isActive ? 78 : 68}%)`
                          : `hsl(${hue} 55% ${isActive ? 38 : 44}%)`
                      }
                      fontSize={9}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontWeight={isActive ? "600" : "500"}
                      style={{ transition: "fill 0.2s" }}
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>

      {/* floating label */}
      <div className="absolute right-0 bottom-3 left-0 flex justify-center">
        <span className="text-[10px] font-medium tracking-[0.12em] text-muted-foreground/50 uppercase">
          {hovered ?? "hover a node"}
        </span>
      </div>
    </div>
  );
}

/* ── Toggle button ───────────────────────────────────────────── */
function ViewToggle({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  return (
    <div className="flex overflow-hidden rounded-lg border border-border bg-muted/50 p-0.5">
      <button
        onClick={() => onChange("rail")}
        className={[
          "flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all duration-200",
          view === "rail"
            ? "bg-card text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        ].join(" ")}
        aria-pressed={view === "rail"}
      >
        <LayoutList className="h-3.5 w-3.5" />
        List
      </button>
      <button
        onClick={() => onChange("constellation")}
        className={[
          "flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all duration-200",
          view === "constellation"
            ? "bg-card text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground",
        ].join(" ")}
        aria-pressed={view === "constellation"}
      >
        <Share2 className="h-3.5 w-3.5" />
        Graph
      </button>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export function TechStackSection() {
  const [view, setView] = useState<View>("rail");

  return (
    <Section
      id="stack"
      title="Tech Stack"
      adornment={<ViewToggle view={view} onChange={setView} />}
    >
      <div key={view} className="animate-[hero-fade-up_0.35s_ease-out_both]">
        {view === "rail" ? <SkillRail /> : <Constellation />}
      </div>
    </Section>
  );
}
