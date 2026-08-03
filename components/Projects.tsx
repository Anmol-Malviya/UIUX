import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="section shell" id="work">
      <SectionHeading index="02" kicker="PRODUCT SYSTEMS" title="Products designed as living systems." description="Each product connects interface, intelligence, workflow, and measurable outcomes." />
      <div className="projects-grid">
        <ProjectCard project={projects[0]} featured />
        <ProjectCard project={projects[1]} />
        <ProjectCard project={projects[2]} featured />
      </div>
    </section>
  );
}
