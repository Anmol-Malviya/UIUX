import { Code, Cube, Strategy, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "./SectionHeading";

const skills = [
  [Code, "Engineering", "Next.js, React, Node.js, APIs, MongoDB, PostgreSQL"],
  [Cube, "Product Systems", "Multi-tenant SaaS, dashboards, workflows, automation"],
  [Strategy, "UI & Motion", "Storytelling layouts, SVG motion, GSAP, Framer Motion"],
  [UsersThree, "Leadership", "Planning, team coordination, delivery, stakeholder communication"],
] as const;

export function Capabilities() {
  return (
    <section className="section shell">
      <SectionHeading index="03" kicker="CAPABILITY CONSTELLATION" title="Engineering depth. Product clarity. Human-centered execution." />
      <div className="capability-grid">{skills.map(([Icon, title, text]) => <article key={title}><Icon size={28} weight="duotone"/><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  );
}
