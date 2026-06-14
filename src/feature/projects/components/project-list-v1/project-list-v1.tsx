import { projects } from "../../data/projects";
import { ProjectCardV1 } from "../project-card-v1/project-card-v1";

export function ProjectListV1() {
  return (
    <div className="flex flex-col gap-5">
      {projects.map((project, index) => (
        <ProjectCardV1 key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
