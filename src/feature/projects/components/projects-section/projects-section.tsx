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
        <div className="flex flex-col items-center gap-8 py-8">
          <div className="grid w-full gap-4 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={clsx(
                  "flex flex-col gap-4 rounded-lg border border-dashed border-border/60 bg-muted/30 p-6 backdrop-blur-sm",
                  i > 0 && "hidden md:flex"
                )}
              >
                <div className="h-28 rounded-md bg-foreground/4" />
                <div className="space-y-2.5">
                  <div className="h-2.5 w-2/3 rounded-full bg-foreground/6" />
                  <div className="h-2.5 w-full rounded-full bg-foreground/4" />
                  <div className="h-2.5 w-4/5 rounded-full bg-foreground/4" />
                </div>
                <div className="flex gap-2">
                  <div className="h-5 w-14 rounded-full bg-foreground/5" />
                  <div className="h-5 w-18 rounded-full bg-foreground/5" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1.5 text-center">
            <p className="text-sm font-medium text-foreground">Projects in progress</p>
            <p className="max-w-sm text-sm text-muted-foreground">Check back soon.</p>
          </div>
        </div>
      )}
    </Section>
  );
}
