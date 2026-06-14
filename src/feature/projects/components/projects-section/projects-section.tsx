"use client";

import { Briefcase, Lock, Wind } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/icon";
import { Section } from "@/components/section";

import { projects } from "../../data/projects";
import { ProjectListV1 } from "../project-list-v1";

const realProjects = [
  {
    label: "School project",
    title: "Air Quality Sensor",
    description:
      "Measuring air quality with an Oxocard Connect and sending real-time push notifications to users when thresholds are exceeded. Built with NanoPy.",
    stack: ["NanoPy", "Oxocard Connect", "Push Notifications"],
    status: "In progress",
    icon: Wind,
    github: null as string | null,
  },
  {
    label: "This site",
    title: "Portfolio",
    description:
      "You're looking at it. Built with Next.js, TypeScript, and Tailwind CSS. Focused on clean architecture, accessibility, and intentional design.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
    icon: null,
    github: "https://github.com/hofmann-andreas",
  },
  {
    label: "Professional work",
    title: "Interdiscount Platform",
    description:
      "Frontend work on a high-traffic e-commerce platform — features, migrations, and production stability. Details are under NDA.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    status: "NDA",
    icon: Briefcase,
    github: null,
  },
];

function ProjectCard({
  item,
  index,
  visible,
}: {
  item: (typeof realProjects)[0];
  index: number;
  visible: boolean;
}) {
  const ProjectIcon = item.icon;
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-7 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
      style={{
        animation: "card-in 0.55s ease-out both",
        animationDelay: `${index * 80}ms`,
        animationPlayState: visible ? "running" : "paused",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary/60 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {ProjectIcon && (
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
              <ProjectIcon className="h-4 w-4" />
            </div>
          )}
          <div>
            <p className="mb-1 text-[10px] font-bold tracking-[0.25em] text-primary/80 uppercase">
              {String(index + 1).padStart(2, "0")} — {item.label}
            </p>
            <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:border-border hover:bg-muted hover:text-foreground"
            >
              <Icon icon="github" size={16} />
            </a>
          )}
          <span className="flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            {item.status === "NDA" && <Lock className="h-3 w-3" />}
            {item.status}
          </span>
        </div>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {item.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-muted/60 px-2 py-0.5 text-xs font-medium text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectGrid() {
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
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-3">
      {realProjects.map((item, i) => (
        <ProjectCard key={item.title} item={item} index={i} visible={visible} />
      ))}
    </div>
  );
}

export function ProjectsSection() {
  const hasProjects = projects && projects.length > 0;

  return (
    <Section id="projects" title="Projects" eyebrow="04 ——— Work" alternate>
      {hasProjects ? <ProjectListV1 /> : <ProjectGrid />}
    </Section>
  );
}
