import { projects } from "../../data/projects";
import { ProjectCardV2 } from "../project-card-v2";

export function ProjectListV2() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCardV2 key={project.title} project={project} />
      ))}
    </div>
  );
}
