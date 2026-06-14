import { Section } from "@/components/section";

import { projects } from "../../data/projects";
import { ProjectListV1 } from "../project-list-v1";

export function ProjectsSection() {
  const hasProjects = projects && projects.length > 0;

  return (
    <Section id="projects" title="Featured Projects" eyebrow="04 ——— Work" alternate>
      {hasProjects ? (
        <ProjectListV1 />
      ) : (
        <div className="rounded-2xl border border-border/40 bg-card/40 px-8 py-14 text-center">
          <p className="font-display text-2xl font-light text-foreground/60 italic">
            Projects incoming.
          </p>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
            I&apos;m currently documenting and packaging several production and side projects. Check
            back soon.
          </p>
        </div>
      )}
    </Section>
  );
}
