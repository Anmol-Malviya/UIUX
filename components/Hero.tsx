"use client";

import { motion } from "framer-motion";
import { ArrowDown, GithubLogo, LinkedinLogo, List } from "@phosphor-icons/react";

export function Hero() {
  return (
    <header className="hero shell">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top"><span>AM</span><strong>Anmol Malviya</strong></a>
        <div className="nav-links">
          <a href="#journey">Story</a>
          <a href="#work">Work</a>
          <a href="#experience">Journey</a>
          <a href="#proof">Proof</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s build</a>
        <button className="mobile-menu" type="button" aria-label="Open navigation"><List size={20} /></button>
      </nav>
      <div className="hero-grid" id="top">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="availability"><i/> Available for product & web projects</div>
          <h1>I turn complex ideas into <em>digital worlds.</em></h1>
          <p>Anmol Malviya — full-stack developer and project manager crafting expressive products, connected systems, and scroll-based stories.</p>
          <div className="hero-actions"><a className="button button--primary" href="#work">Explore the story <ArrowDown size={18}/></a><a className="button" href="https://github.com/Anmol-Malviya" target="_blank" rel="noreferrer"><GithubLogo size={19}/> View GitHub</a></div>
        </motion.div>
        <div className="hero-system" aria-hidden="true">
          <div className="system-ring ring-one"/><div className="system-ring ring-two"/><div className="system-core">AM<span>Creative<br/>Command Center</span></div>
          <div className="floating-chip chip-a">Next.js</div><div className="floating-chip chip-b">Systems</div><div className="floating-chip chip-c">Motion</div>
          <div className="hero-card"><span>Currently</span><strong>Project Manager</strong><small>AV Technologies</small></div>
        </div>
      </div>
      <div className="social-rail"><a href="https://www.linkedin.com/in/anmol-malviya27" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinLogo size={19}/></a><a href="https://github.com/Anmol-Malviya" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubLogo size={19}/></a></div>
    </header>
  );
}
