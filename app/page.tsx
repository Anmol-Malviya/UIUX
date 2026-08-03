import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Principles } from "@/components/Principles";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return (
    <main>
      <div className="page-grid" aria-hidden="true" />
      <div className="story-route" aria-hidden="true">
        <i /><i /><i /><i /><i /><i />
      </div>
      <Hero />
      <Journey />
      <Projects />
      <Capabilities />
      <Experience />
      <Principles />
      <Contact />
    </main>
  );
}
