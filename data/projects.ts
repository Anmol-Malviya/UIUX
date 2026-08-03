export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  accent: string;
  repository: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "AI Interviewer",
    eyebrow: "LOCAL-AI CAREER PLATFORM",
    description: "An adaptive mock interview system with local Ollama models, real-time Socket.IO feedback, analytics, daily challenges, streaks, and privacy-first processing.",
    metric: "5",
    metricLabel: "Daily challenge tracks",
    tags: ["React 18", "Node.js", "MongoDB", "Ollama", "Socket.IO", "Docker"],
    accent: "blue",
    repository: "https://github.com/Anmol-Malviya/AI-Interviewer",
    highlights: ["Local LLM inference", "JWT refresh flow", "Adaptive difficulty"],
  },
  {
    title: "Hotel ERP",
    eyebrow: "ENTERPRISE MULTI-TENANT SAAS",
    description: "A full hotel operations platform spanning tenant and super-admin portals, reservations, front office, housekeeping, POS, billing, analytics, subscriptions, and real-time workflows.",
    metric: "20+",
    metricLabel: "Enterprise modules",
    tags: ["Next.js 14", "Express", "MongoDB", "Redux", "Socket.IO", "Docker"],
    accent: "violet",
    repository: "https://github.com/Anmol-Malviya/Hotel-ERP",
    highlights: ["Tenant isolation", "Module guards", "Layered SaaS monolith"],
  },
  {
    title: "AI Agent Skills Pack",
    eyebrow: "AI DEVELOPER TOOLING",
    description: "A structured library of 1400+ reusable AI-agent instruction packs covering frontend, backend, cloud, databases, security, AI, DevOps, automation, and product workflows.",
    metric: "1400+",
    metricLabel: "Standardized skills",
    tags: ["AI Agents", "Developer Tools", "Prompt Systems", "Automation", "Security"],
    accent: "cyan",
    repository: "https://github.com/Anmol-Malviya/skills",
    highlights: ["Domain-specific protocols", "Reusable expert personas", "Cross-tool integration"],
  },
  {
    title: "AromaOS",
    eyebrow: "RESTAURANT OPERATIONS SYSTEM",
    description: "An all-in-one operating platform for cafes, restaurants, and meal-subscription businesses, designed around service workflows and day-to-day operations.",
    metric: "1",
    metricLabel: "Unified operations layer",
    tags: ["Restaurant SaaS", "Operations", "Subscriptions", "Product Design"],
    accent: "green",
    repository: "https://github.com/Anmol-Malviya/Cafe-OS",
    highlights: ["Restaurant workflows", "Meal subscriptions", "Unified management"],
  },
];
