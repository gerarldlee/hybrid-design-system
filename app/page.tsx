import {
  Activity,
  ArrowDown,
  ArrowRight,
  Box,
  Braces,
  CircleDot,
  Crosshair,
  Layers3,
  MoveUpRight,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Square,
  Terminal,
  Triangle,
  Zap,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { HybridButton } from "@/components/ui/hybrid-button";
import { HybridInput } from "@/components/ui/hybrid-input";
import { StatusNode } from "@/components/ui/status-node";
import { SystemConsole } from "@/components/system-console";

const layers = [
  {
    number: "01",
    title: "MINIMALISM",
    description: "Restraint, precision, and radical simplification.",
    icon: Square,
    color: "lime",
  },
  {
    number: "02",
    title: "BAUHAUS",
    description: "Geometric order and asymmetric visual rhythm.",
    icon: Triangle,
    color: "orange",
  },
  {
    number: "03",
    title: "NEO-BRUTALISM",
    description: "Hard boundaries and structural honesty.",
    icon: Box,
    color: "blue",
  },
  {
    number: "04",
    title: "SKEUOMORPHISM",
    description: "Tactile depth and physical interaction cues.",
    icon: Layers3,
    color: "white",
  },
  {
    number: "05",
    title: "GLASSMORPHISM",
    description: "Atmospheric layering and translucent surfaces.",
    icon: Sparkles,
    color: "blue",
  },
  {
    number: "06",
    title: "CYBERPUNK",
    description: "Telemetry, kinetic feedback, and signal glow.",
    icon: ScanLine,
    color: "lime",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Hybrid 06 home">
          <span className="wordmark__symbol">
            <span />
            <span />
          </span>
          HYBRID<span>/06</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#system">SYSTEM</a>
          <a href="#components">COMPONENTS</a>
          <a href="#principles">PRINCIPLES</a>
        </nav>
        <a href="#components" className="header-cta">
          EXPLORE <ArrowRight size={15} />
        </a>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero__signal" aria-hidden="true">
          <span>FORM</span>
          <i />
          <span>FUNCTION</span>
          <i />
          <span>FEEDBACK</span>
        </div>
        <div className="hero__copy">
          <div className="kicker">
            <span>06-LAYER UI ARCHITECTURE</span>
            <StatusNode label="SYSTEM ACTIVE" />
          </div>
          <h1>
            STRUCTURE
            <br />
            WITH <em>IMPACT.</em>
          </h1>
          <p>
            An interface system where rational geometry meets physical depth
            and live signal. Designed to make software feel built—not
            decorated.
          </p>
          <div className="hero__actions">
            <a href="#system" className="hybrid-link hybrid-link--signal">
              EXPLORE THE SYSTEM <ArrowDown size={17} />
            </a>
            <a href="#components" className="text-link">
              VIEW COMPONENTS <MoveUpRight size={16} />
            </a>
          </div>
          <div className="hero__meta">
            <div>
              <span>BASE</span>
              <strong>RADIX / SHADCN</strong>
            </div>
            <div>
              <span>ENGINE</span>
              <strong>NEXT / MOTION</strong>
            </div>
            <div>
              <span>STATUS</span>
              <strong>PRODUCTION</strong>
            </div>
          </div>
        </div>
        <SystemConsole />
        <div className="hero__index" aria-hidden="true">
          <span>SYS</span>
          <strong>01</strong>
        </div>
      </section>

      <section id="system" className="layers section-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SYSTEM DNA / 01—06</span>
            <h2>SIX DISCIPLINES.<br />ONE LANGUAGE.</h2>
          </div>
          <p>
            Each layer controls a specific dimension of the interface. Together
            they form a coherent, high-affordance system.
          </p>
        </div>
        <div className="layer-grid">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <article className="layer-card" key={layer.number}>
                <div className={`layer-card__icon layer-card__icon--${layer.color}`}>
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <span className="layer-card__number">{layer.number}</span>
                <h3>{layer.title}</h3>
                <p>{layer.description}</p>
                <span className="layer-card__line" />
              </article>
            );
          })}
        </div>
      </section>

      <section id="components" className="laboratory section-shell">
        <div className="section-heading section-heading--inverse">
          <div>
            <span className="eyebrow">COMPONENT LAB / LIVE SPECIMENS</span>
            <h2>PHYSICAL BY<br />DEFAULT.</h2>
          </div>
          <p>
            Every control carries its own affordance: hard frames, surface
            highlights, fast mechanical motion, and visible state.
          </p>
        </div>

        <div className="lab-grid">
          <GlassCard accent="lime" className="specimen specimen--buttons">
            <div className="specimen__header">
              <span>01 / INPUT ACTIONS</span>
              <Crosshair size={18} />
            </div>
            <div className="specimen__body">
              <span className="specimen__label">HYBRID BUTTON / STATES</span>
              <HybridButton variant="signal">
                INITIALIZE <Zap size={17} fill="currentColor" />
              </HybridButton>
              <HybridButton variant="primary">
                OPEN MODULE <ArrowRight size={17} />
              </HybridButton>
              <HybridButton variant="ghost">
                STANDBY <CircleDot size={17} />
              </HybridButton>
            </div>
            <code>active: translate(2px, 2px)</code>
          </GlassCard>

          <GlassCard accent="blue" className="specimen specimen--input">
            <div className="specimen__header">
              <span>02 / DATA ENTRY</span>
              <Braces size={18} />
            </div>
            <div className="specimen__body">
              <label htmlFor="system-command">SYSTEM COMMAND</label>
              <div className="input-shell">
                <Terminal size={17} />
                <HybridInput
                  id="system-command"
                  placeholder="Enter command..."
                />
                <span>↵</span>
              </div>
              <div className="input-stats">
                <StatusNode label="VALID INPUT" tone="blue" />
                <span>LATENCY 08MS</span>
              </div>
            </div>
            <code>focus: inset depth + signal edge</code>
          </GlassCard>

          <GlassCard accent="orange" className="specimen specimen--status">
            <div className="specimen__header">
              <span>03 / TELEMETRY</span>
              <Activity size={18} />
            </div>
            <div className="specimen__body">
              <div className="radar">
                <span className="radar__ring radar__ring--one" />
                <span className="radar__ring radar__ring--two" />
                <span className="radar__cross radar__cross--x" />
                <span className="radar__cross radar__cross--y" />
                <span className="radar__node" />
              </div>
              <div className="telemetry-list">
                <StatusNode label="CORE NOMINAL" />
                <StatusNode label="SYNC ACTIVE" tone="blue" />
                <StatusNode label="LOAD 64%" tone="orange" />
              </div>
            </div>
            <code>transform + opacity only</code>
          </GlassCard>
        </div>
      </section>

      <section id="principles" className="principles section-shell">
        <div className="principles__title">
          <span className="eyebrow">ARCHITECTURE / NON-NEGOTIABLES</span>
          <h2>BUILT ON<br />HARD RULES.</h2>
        </div>
        <div className="principle-list">
          <article>
            <span className="principle-list__index">01</span>
            <div className="principle-list__icon"><Square size={22} /></div>
            <div>
              <h3>NO FLUID CORNERS</h3>
              <p>Every interactive unit uses strict 90-degree geometry.</p>
            </div>
          </article>
          <article>
            <span className="principle-list__index">02</span>
            <div className="principle-list__icon"><ShieldCheck size={22} /></div>
            <div>
              <h3>BOUNDARIES ARE ABSOLUTE</h3>
              <p>Structural borders stay black, explicit, and high contrast.</p>
            </div>
          </article>
          <article>
            <span className="principle-list__index">03</span>
            <div className="principle-list__icon"><Zap size={22} /></div>
            <div>
              <h3>FEEDBACK IS PHYSICAL</h3>
              <p>Click states displace controls with rapid mechanical timing.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div className="final-cta__geometry" aria-hidden="true">
          <span className="geo-circle" />
          <span className="geo-square" />
          <span className="geo-line" />
        </div>
        <span className="eyebrow">SYSTEM READY / BUILD 06.21</span>
        <h2>MAKE THE<br />INTERFACE <em>FELT.</em></h2>
        <a href="#top" className="hybrid-link hybrid-link--light">
          RETURN TO TOP <ArrowRight size={18} />
        </a>
      </section>

      <footer className="site-footer section-shell">
        <a href="#top" className="wordmark">
          <span className="wordmark__symbol"><span /><span /></span>
          HYBRID<span>/06</span>
        </a>
        <p>FORM FOLLOWS FUNCTION. FEEDBACK FOLLOWS ACTION.</p>
        <span>© 2026 / SYSTEM UI</span>
      </footer>
    </main>
  );
}
