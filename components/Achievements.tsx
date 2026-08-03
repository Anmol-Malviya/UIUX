"use client";

import { motion } from "framer-motion";
import { Certificate, GraduationCap, Medal, Trophy } from "@phosphor-icons/react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Trophy, value: "Runner-up", title: "TechSprint", text: "Recognised for building and presenting a practical technology solution." },
  { icon: Medal, value: "₹5,000", title: "Safe Click 2.0", text: "Cyber-safety achievement supported by Raisen Police, RNTU and AIC-RNTU." },
  { icon: GraduationCap, value: "8.7 CGPA", title: "B.Tech CSE", text: "Studying IoT, Cyber Security and Blockchain at PIEMR, Indore." },
  { icon: Certificate, value: "Multiple", title: "Certifications", text: "Google Cloud, Infosys Springboard, cyber security and software development learning." },
];

export function Achievements() {
  return (
    <section className="section shell proof-section" id="proof">
      <SectionHeading index="05" kicker="PROOF & ACHIEVEMENTS" title="Built in public. Tested in the real world." description="A compact evidence layer connecting education, competitions, certifications, and practical delivery." />
      <div className="proof-grid">
        {items.map(({ icon: Icon, value, title, text }, index) => (
          <motion.article key={title} className="proof-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}>
            <div className="proof-icon"><Icon size={24} weight="duotone" /></div>
            <strong>{value}</strong>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
