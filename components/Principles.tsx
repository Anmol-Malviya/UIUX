import { ArrowBendDownRight, Eye, FlowArrow, Target } from "@phosphor-icons/react/dist/ssr";

const principles = [
  { title: "Clarity", text: "Complex systems become simple journeys.", Icon: Eye },
  { title: "Motion", text: "Animation explains hierarchy, not decoration.", Icon: FlowArrow },
  { title: "Continuity", text: "Every screen feels part of the same world.", Icon: ArrowBendDownRight },
  { title: "Outcome", text: "Design is measured by what users achieve.", Icon: Target },
];

export function Principles() {
  return (
    <section className="section principles" id="principles">
      <div className="shell">
        <div className="section-heading">
          <div className="section-kicker"><span>05</span> DESIGN PRINCIPLES</div>
          <h2>Interfaces should feel inevitable.</h2>
          <p>Every decision supports understanding, continuity, and measurable product outcomes.</p>
        </div>

        <div className="principles-grid">
          {principles.map(({ title, text, Icon }, index) => (
            <article className="principle-card" key={title}>
              <div className="principle-icon"><Icon size={24} weight="duotone" /></div>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
