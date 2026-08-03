import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return <main><div className="page-grid" aria-hidden="true"/><Hero/><Journey/><Projects/><Capabilities/><Contact/></main>;
}
