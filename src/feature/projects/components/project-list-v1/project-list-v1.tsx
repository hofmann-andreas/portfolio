import { projects } from "../../data/projects";
import { ProjectCardV1 } from "../project-card-v1/project-card-v1";

export function ProjectListV1() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCardV1 key={project.title} project={project} />
      ))}
      <p className="mt-8 text-center text-muted-foreground">
        This portfolio will be continuously expanded with production-oriented side projects.
      </p>
    </div>
  );
}
