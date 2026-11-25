import Link from "next/link";
import { ArrowUpRight, Code2, Layers3, Sparkles, Workflow } from "lucide-react";
import { BrandMark } from "@/components/Brand";

const work = [
  { icon: Code2, label: "Digital experiences" },
  { icon: Workflow, label: "Business systems" },
  { icon: Layers3, label: "Custom software" },
];

export default function Home() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-grid" aria-hidden="true" />
      <div className="maintenance-glow maintenance-glow-one" aria-hidden="true" />
      <div className="maintenance-glow maintenance-glow-two" aria-hidden="true" />

      <header className="maintenance-header">
        <Link className="maintenance-brand" href="/" aria-label="NESBYTE Technologies home">
          <BrandMark />
          <span>NESBYTE<small>TECHNOLOGIES</small></span>
        </Link>
        <span className="maintenance-status"><i /> WEBSITE IN DEVELOPMENT</span>
      </header>

      <section className="maintenance-content">
        <div className="maintenance-kicker"><Sparkles size={14} /> SOMETHING GOOD IS TAKING SHAPE</div>
        <h1>We&apos;re building<br />what&apos;s <em>next.</em></h1>
        <p className="maintenance-copy">
          Our new digital home is currently under development. We&apos;re working
          behind the scenes to bring you a better way to explore what NESBYTE can build.
        </p>
        <div className="maintenance-divider"><span /></div>
        <div className="maintenance-work">
          <span className="maintenance-work-label">WHAT WE&apos;RE CRAFTING</span>
          <div className="maintenance-work-list">
            {work.map(({ icon: Icon, label }) => (
              <div className="maintenance-work-item" key={label}>
                <Icon size={17} /><span>{label}</span><ArrowUpRight size={14} className="maintenance-work-arrow" />
              </div>
            ))}
          </div>
        </div>
        <div className="maintenance-bottom">
          <span><i className="maintenance-live-dot" /> IN THE WORKSHOP</span>
          <span>GOOD THINGS TAKE BUILDING.</span>
        </div>
      </section>

      <footer className="maintenance-footer">
        <span>© {new Date().getFullYear()} NESBYTE TECHNOLOGIES</span>
        <span>INDIA <b>·</b> WORLDWIDE</span>
      </footer>
      <div className="maintenance-orbit orbit-one" aria-hidden="true"><span /></div>
      <div className="maintenance-orbit orbit-two" aria-hidden="true"><span /></div>
    </main>
  );
}
