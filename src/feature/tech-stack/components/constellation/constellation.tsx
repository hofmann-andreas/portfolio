"use client";

import { useState, useSyncExternalStore } from "react";

import { HUB_R, hubs, NODE_H, NODE_R, NODE_W } from "../../data/tech-stack-data";

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

/** Point on the hub circle edge facing toward (tx, ty). */
function hubEdge(hx: number, hy: number, tx: number, ty: number) {
  const dx = tx - hx;
  const dy = ty - hy;
  const d = Math.sqrt(dx * dx + dy * dy) || 1;
  return { x: hx + (dx / d) * HUB_R, y: hy + (dy / d) * HUB_R };
}

/** Point on the nearest edge of a rect, on the line from (hx,hy) to rect center (cx,cy). */
function rectEdge(hx: number, hy: number, cx: number, cy: number) {
  const dx = hx - cx;
  const dy = hy - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const hw = NODE_W / 2;
  const hh = NODE_H / 2;
  const tx = Math.abs(dx) > 0 ? hw / Math.abs(dx) : Infinity;
  const ty = Math.abs(dy) > 0 ? hh / Math.abs(dy) : Infinity;
  const t = Math.min(tx, ty);
  return { x: cx + dx * t, y: cy + dy * t };
}

export function Constellation() {
  const [hovered, setHovered] = useState<string | null>(null);
  const isDark = useDarkMode();

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
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
        {hubs.map(({ label, hue, x: hx, y: hy, nodes }, hubIndex) => {
          const l = isDark ? 65 : 52;
          const hubColor = `hsl(${hue} 72% ${l}%)`;

          return (
            <g key={label}>
              {/* edges — from hub circle edge to rect edge */}
              {nodes.map((n) => {
                const cx = n.x + NODE_W / 2;
                const cy = n.y + NODE_H / 2;
                const from = hubEdge(hx, hy, cx, cy);
                const to = rectEdge(hx, hy, cx, cy);
                const isActive = hovered === n.label;
                return (
                  <line
                    key={n.label}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={hubColor}
                    strokeWidth={isActive ? 1.4 : 0.7}
                    opacity={isActive ? 0.55 : 0.22}
                    style={{ transition: "opacity 0.2s, stroke-width 0.2s" }}
                  />
                );
              })}

              {/* hub circle */}
              <g style={{ cursor: "default" }}>
                <circle
                  cx={hx}
                  cy={hy}
                  r={HUB_R}
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
                  {String(hubIndex + 1).padStart(2, "0")}
                </text>
              </g>

              {/* skill nodes */}
              {nodes.map((n) => {
                const isActive = hovered === n.label;
                const cx = n.x + NODE_W / 2;
                const cy = n.y + NODE_H / 2;
                return (
                  <g
                    key={n.label}
                    onMouseEnter={() => setHovered(n.label)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      cursor: "default",
                      transform: isActive ? "scale(1.14)" : "scale(1)",
                      transformOrigin: `${cx}px ${cy}px`,
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
                      x={cx}
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

      <div className="absolute right-0 bottom-3 left-0 flex justify-center">
        <span className="text-[10px] font-medium tracking-[0.12em] text-muted-foreground/50 uppercase">
          {hovered ?? "hover a node"}
        </span>
      </div>
    </div>
  );
}
