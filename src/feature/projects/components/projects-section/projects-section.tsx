import clsx from "clsx";

import { Section } from "@/components/section";

import { projects } from "../../data/projects";
import { ProjectListV1 } from "../project-list-v1";

export function ProjectsSection() {
  const hasProjects = projects && projects.length > 0;

  return (
    <Section id="projects" title="Featured Projects">
      {hasProjects ? (
        <ProjectListV1 />
      ) : (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={clsx(
                  "flex-col gap-4 rounded-lg border border-dashed border-border p-6",
                  i === 0 ? "flex" : "hidden md:flex"
                )}
              >
                <div className="h-32 rounded bg-foreground/3" />
                <div className="space-y-2">
                  <div className="h-3 w-2/3 rounded bg-foreground/6" />
                  <div className="h-3 w-full rounded bg-foreground/4" />
                  <div className="h-3 w-4/5 rounded bg-foreground/4" />
                </div>
                <div className="flex gap-2">
                  <div className="h-5 w-12 rounded-full bg-foreground/5" />
                  <div className="h-5 w-16 rounded-full bg-foreground/5" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">Projects coming soon</p>
        </div>
      )}
    </Section>
  );
}
