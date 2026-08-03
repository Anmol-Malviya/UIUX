"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Buildings, ForkKnife, GithubLogo, Sparkle } from "@phosphor-icons/react";
import type { Project } from "@/data/projects";

const iconMap = {
  "AI Interviewer": Brain,
  "Hotel ERP": Buildings,
  "AI Agent Skills Pack": Sparkle,
  AromaOS: ForkKnife,
};

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const Icon = iconMap[project.title as keyof typeof iconMap] ?? Sparkle;
  return (
    <motion.article
      className={`project-card ${featured ? "project-card--featured" : ""}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55 }}
    >
      <div className="project-topline">
        <span className="project-icon"><Icon size={22} weight="duotone" /></span>
        <span>{project.eyebrow}</span>
        <ArrowUpRight className="project-arrow" size={18} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={`product-visual product-visual--${project.accent}`}>
        <div className="visual-toolbar"><i/><i/><i/><span>repository evidence</span></div>
        <div className="visual-grid">
          <div className="visual-orbit"><span>{project.metric}</span><small>{project.metricLabel}</small></div>
          <div className="visual-bars"><i/><i/><i/><i/></div>
          <div className="visual-pulse" />
        </div>
      </div>
      <ul className="project-highlights">
        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
      <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="project-actions">
        <a className="project-link project-link--primary" href={project.repository} target="_blank" rel="noreferrer"><GithubLogo size={17}/> Repository</a>
        <a className="project-link" href={project.repository} target="_blank" rel="noreferrer">Inspect system <ArrowUpRight size={16}/></a>
      </div>
    </motion.article>
  );
}
