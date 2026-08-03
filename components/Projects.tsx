import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="section shell" id="work">
      <SectionHeading
        index="02"
        kicker="SELECTED SYSTEMS"
        title="Real repositories. Real architecture. One connected story."
        description="The portfolio now prioritizes the strongest evidence from the codebase: local AI, multi-tenant SaaS, developer tooling, and operations software."
      />
      <div className="projects-grid projects-grid--evidence">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0 || index === 1} />
        ))}
      </div>
    </section>
  );
}
