import { Section } from "@/components/section";
import { Project, ProjectProps } from "@/feature/projects/components/project";

export function ProjectsSection() {
  const projects: Array<ProjectProps> = [];
  const hasProjects = projects && projects.length > 0;

  return (
    <Section id="projects" title="Projects">
      {hasProjects ? (
        <>
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </>
      ) : (
        <div>
          <p>
            I&apos;m currently working on my first public projects while deepening my skills with
            TypeScript, React / Next.js and backend fundamentals.
          </p>
        </div>
      )}
    </Section>
  );
}
