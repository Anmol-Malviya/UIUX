import { Achievements } from "@/components/Achievements";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Principles } from "@/components/Principles";
import { Projects } from "@/components/Projects";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <div className="page-grid" aria-hidden="true" />
      <div className="story-route" aria-hidden="true">
        <i /><i /><i /><i /><i /><i /><i />
      </div>
      <Hero />
      <Journey />
      <Projects />
      <Capabilities />
      <Experience />
      <Achievements />
      <Principles />
      <Contact />
    </main>
  );
}
