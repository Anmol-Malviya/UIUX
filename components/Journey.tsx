import { SectionHeading } from "./SectionHeading";

const milestones = [
  ["2022", "Started Diploma CSE", "Built the foundation in programming and practical software development."],
  ["2025", "B.Tech + product building", "Expanded into full-stack systems, UI engineering, hackathons, and SaaS products."],
  ["2026", "Project leadership", "Managing teams, delivery, architecture, and product storytelling at AV Technologies."],
];

export function Journey() {
  return (
    <section className="section shell" id="journey">
      <SectionHeading index="01" kicker="JOURNEY MAP" title="From student projects to product ecosystems." description="Every milestone became a station. Every project became a district. One route connects the entire story." />
      <div className="timeline"><div className="timeline-line" />{milestones.map(([year, title, text], index) => <article className="timeline-item" key={year}><div className="timeline-node">0{index + 1}</div><span>{year}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  );
}
