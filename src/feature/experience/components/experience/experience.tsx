import clsx from "clsx";

import { Badge } from "@/components/badge/badge";

import { ExperienceData } from "../../types";

interface ExperienceProps {
  experience: ExperienceData;
}

export function Experience(props: ExperienceProps) {
  const { experience } = props;
  return (
    <div className="relative pb-12 pl-10 last:pb-4">
      {/* Timeline dot */}
      <div
        className={clsx(
          "absolute top-[9px] left-0 h-3 w-3 -translate-x-1/2 rounded-full transition-colors",
          experience.isCurrent
            ? "bg-primary ring-4 ring-primary/20"
            : "border-2 border-muted-foreground/40 bg-app"
        )}
        aria-hidden="true"
      />

      {/* Header row */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold text-foreground">{experience.role}</h3>
            {experience.isCurrent && (
              <span className="rounded border border-primary/40 px-2 py-0.5 text-xs font-medium tracking-widest text-primary uppercase">
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
        <span className="text-sm text-muted-foreground">{experience.period}</span>
      </div>

      {/* Description */}
      <p className="mb-6 max-w-2xl text-muted-foreground">{experience.description}</p>

      {/* Focus */}
      <div className="mb-6">
        <p className="mb-3 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
          Focus
        </p>
        <ul className="flex flex-col gap-2">
          {experience.focusAreas.map((area, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
              {area}
            </li>
          ))}
        </ul>
      </div>

      {/* Stack */}
      <div>
        <p className="mb-3 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
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
  );
}
