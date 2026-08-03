export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Secure OS",
    eyebrow: "AI SECURITY PRODUCT",
    description: "Phishing detection with explainable URL analysis, live threat scoring, and actionable safety guidance.",
    metric: "92%",
    metricLabel: "Risk confidence",
    tags: ["Next.js", "AI", "Cyber Security"],
    accent: "cyan",
  },
  {
    title: "AI Interviewer",
    eyebrow: "CAREER INTELLIGENCE",
    description: "Resume-aware mock interviews, daily assessments, analytics, and candidate readiness scoring.",
    metric: "87",
    metricLabel: "Readiness score",
    tags: ["Next.js", "Analytics", "LLM"],
    accent: "blue",
  },
  {
    title: "Hotel ERP",
    eyebrow: "MULTI-TENANT SAAS",
    description: "An operating layer for reservations, rooms, guests, housekeeping, billing, subscriptions, and audit logs.",
    metric: "8.4L",
    metricLabel: "Revenue tracked",
    tags: ["Node.js", "MongoDB", "Sockets"],
    accent: "violet",
  },
];
