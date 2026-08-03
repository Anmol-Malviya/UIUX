import { Briefcase, Code, UsersThree } from "@phosphor-icons/react/dist/ssr";

const roles = [
  {
    title: "Project Manager",
    company: "AV Technologies",
    description: "Leading execution, client communication, and product delivery across web and software projects.",
    tag: "NOW",
    Icon: UsersThree,
  },
  {
    title: "Software Developer Intern",
    company: "Klarvia Tech — IIT Madras",
    description: "Building product features, reusable interfaces, and engineering workflows.",
    tag: "INTERNSHIP",
    Icon: Code,
  },
  {
    title: "Developer",
    company: "EventDhara",
    description: "MERN systems, APIs, automation, and operational product improvements.",
    tag: "PROJECT",
    Icon: Briefcase,
  },
];

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="shell">
        <div className="section-heading">
          <div className="section-kicker"><span>04</span> EXPERIENCE ROUTE</div>
          <h2>A route built through real work.</h2>
          <p>Each role adds a new layer: product thinking, execution, engineering, and collaboration.</p>
        </div>

        <div className="experience-grid">
          {roles.map(({ title, company, description, tag, Icon }, index) => (
            <article className="experience-card" key={title}>
              <div className="experience-icon"><Icon size={22} weight="duotone" /></div>
              <span className="experience-index">0{index + 1}</span>
              <h3>{title}</h3>
              <strong>{company}</strong>
              <p>{description}</p>
              <span className="experience-tag">{tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
