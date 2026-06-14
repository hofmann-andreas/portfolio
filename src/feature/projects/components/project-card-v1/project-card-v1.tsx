import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { Icon } from "@/components/icon";

import { ProjectData } from "../../types";

interface ProjectCardV1Props {
  project: ProjectData;
  index: number;
}

export function ProjectCardV1({ project, index }: ProjectCardV1Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-border hover:shadow-xl hover:shadow-black/6 dark:hover:shadow-black/25">
      {/* Sliding top accent — reveals left-to-right on hover */}
      <div className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-primary/80 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative h-56 shrink-0 overflow-hidden md:h-auto md:w-2/5">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent md:bg-linear-to-r" />
          {/* index badge */}
          <span className="absolute top-4 left-4 font-display text-xs text-white/60 italic">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between gap-6 p-7 md:w-3/5">
          <div className="flex flex-col gap-3">
            {/* Title + links row */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <div className="flex shrink-0 items-center gap-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View code of ${project.title} on GitHub`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-200 hover:border-border hover:bg-muted hover:text-foreground"
                >
                  <Icon icon="github" className="h-4 w-4" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View demo of ${project.title}`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-200 hover:border-border hover:bg-muted hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          </div>

          {/* Stack chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-muted/60 px-2 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
