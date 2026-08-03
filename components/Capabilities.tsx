import { Brain, BracketsCurly, Cloud, Database, FlowArrow, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "./SectionHeading";

const groups = [
  [BracketsCurly, "Frontend Systems", "Next.js, React, Vite, Tailwind CSS, responsive component architecture, dashboards, and interaction-heavy interfaces."],
  [FlowArrow, "Backend & Real-Time", "Node.js, Express, REST APIs, Socket.IO, authentication, rate limiting, middleware, and layered service architecture."],
  [Database, "Data & SaaS Architecture", "MongoDB, Mongoose, PostgreSQL, Prisma, tenant isolation, repositories, analytics, subscriptions, and module guards."],
  [Brain, "AI & Agent Workflows", "Ollama local models, adaptive interview logic, AI-agent skills, prompt systems, automation, and privacy-first inference."],
  [ShieldCheck, "Security Engineering", "JWT refresh flows, Helmet, CORS, HPP, Mongo sanitization, access control, threat analysis, and secure environment practices."],
  [Cloud, "Delivery & DevOps", "Docker, Docker Compose, Cloud Run readiness, PM2, Nginx, GitHub Actions, testing strategy, and production-oriented documentation."],
] as const;

export function Capabilities() {
  return (
    <section className="section shell" id="skills">
      <SectionHeading
        index="03"
        kicker="CAPABILITY NETWORK"
        title="Skills proven through systems, not progress bars."
        description="These capability groups are derived from the architecture, features, and tooling documented across the strongest repositories."
      />
      <div className="capability-grid capability-grid--six">
        {groups.map(([Icon, title, text]) => (
          <article key={title}>
            <Icon size={28} weight="duotone"/>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
