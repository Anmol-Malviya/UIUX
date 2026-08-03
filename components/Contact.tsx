import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export function Contact() {
  return (
    <footer className="contact shell" id="contact">
      <div className="contact-card">
        <span>06 / FINAL STATION</span>
        <h2>Have an ambitious product idea?</h2>
        <p>Let&apos;s turn it into a clear system, a memorable interface, and a production-ready experience.</p>
        <a className="button button--primary" href="mailto:anmoldiscord4328@gmail.com"><EnvelopeSimple size={19}/> Start a conversation <ArrowUpRight size={18}/></a>
      </div>
      <div className="footer-row"><strong>ANMOL MALVIYA</strong><span>Designed in Figma. Built with Next.js.</span><span>© 2026</span></div>
    </footer>
  );
}
