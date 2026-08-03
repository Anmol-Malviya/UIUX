"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Buildings, ShieldCheck } from "@phosphor-icons/react";
import type { Project } from "@/data/projects";

const iconMap = { "Secure OS": ShieldCheck, "AI Interviewer": Brain, "Hotel ERP": Buildings };

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const Icon = iconMap[project.title as keyof typeof iconMap];
  return (
    <motion.article className={`project-card ${featured ? "project-card--featured" : ""}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.55 }}>
      <div className="project-topline"><span className="project-icon"><Icon size={22} weight="duotone" /></span><span>{project.eyebrow}</span><ArrowUpRight className="project-arrow" size={18} /></div>
      <h3>{project.title}</h3><p>{project.description}</p>
      <div className={`product-visual product-visual--${project.accent}`}>
        <div className="visual-toolbar"><i/><i/><i/><span>live system</span></div>
        <div className="visual-grid"><div className="visual-orbit"><span>{project.metric}</span><small>{project.metricLabel}</small></div><div className="visual-bars"><i/><i/><i/><i/></div><div className="visual-pulse" /></div>
      </div>
      <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </motion.article>
  );
}
