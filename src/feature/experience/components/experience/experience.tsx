import clsx from "clsx";

import { Badge } from "@/components/badge/badge";

import { ExperienceData } from "../../types";

interface ExperienceProps {
  experience: ExperienceData;
}

export function Experience(props: ExperienceProps) {
  const { experience } = props;
  return (
    <div className="relative pb-6 pl-10 last:pb-2">
      {/* Timeline dot */}
      <div
        className={clsx(
          "absolute top-[22px] left-0 h-3 w-3 -translate-x-1/2 rounded-full transition-colors",
          experience.isCurrent
            ? "bg-primary ring-4 ring-primary/20"
            : "border-2 border-muted-foreground/40 bg-app"
        )}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="rounded-xl border border-border/50 bg-card/40 px-6 py-5 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-lg hover:shadow-black/4 dark:hover:shadow-black/20">
        {/* Header */}
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="text-lg font-semibold text-foreground">{experience.role}</h3>
              {experience.isCurrent && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  Current
                </span>
              )}
            </div>
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-block font-medium text-primary transition-opacity hover:opacity-75"
              >
                {experience.company}
              </a>
            ) : (
              <p className="mt-0.5 font-medium text-primary">{experience.company}</p>
            )}
          </div>
          <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {experience.period}
          </span>
        </div>

        {/* Description */}
        <p className="mb-6 max-w-2xl text-muted-foreground">{experience.description}</p>

        {/* Focus */}
        <div className="mb-6">
          <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-muted-foreground/70 uppercase">
            Focus
          </p>
          <ul className="flex flex-col gap-2">
            {experience.focusAreas.map((area, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-sm leading-5 text-muted-foreground"
              >
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div>
          <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-muted-foreground/70 uppercase">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.stack.map((tech) => (
              <Badge key={tech} size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
