import {
  Activity,
  ArrowUpRight,
  Check,
  CircleDot,
  Command,
  Gauge,
  Layers3,
  Radio,
  ScanLine,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { HybridButton } from "@/components/ui/hybrid-button";
import { HybridInput } from "@/components/ui/hybrid-input";
import { StatusNode } from "@/components/ui/status-node";

const metrics = [
  { label: "SYSTEM COHERENCE", value: "98.6", delta: "+12.4%", tone: "signal" },
  { label: "ACTIVE LAYERS", value: "06", delta: "NOMINAL", tone: "accent" },
  { label: "EVENTS PROCESSED", value: "2.4K", delta: "+08.2%", tone: "warning" },
  { label: "AVG LATENCY", value: "08", suffix: "MS", delta: "-14.6%", tone: "neutral" },
] as const;

const layerHealth = [
  { label: "MINIMALISM", value: "100%", tone: "lime" as const },
  { label: "BAUHAUS", value: "98%", tone: "orange" as const },
  { label: "NEO-BRUTALISM", value: "96%", tone: "blue" as const },
  { label: "SKEUOMORPHISM", value: "99%", tone: "lime" as const },
  { label: "GLASSMORPHISM", value: "97%", tone: "blue" as const },
  { label: "CYBERPUNK", value: "100%", tone: "lime" as const },
];

const activity = [
  { time: "06:21:48", event: "SYSTEM SYNC COMPLETE", detail: "All six layers synchronized.", tone: "lime" as const },
  { time: "06:20:12", event: "TOKEN SET UPDATED", detail: "Monochrome ramp available.", tone: "blue" as const },
  { time: "06:18:04", event: "INPUT VALIDATED", detail: "Command channel responded in 08ms.", tone: "orange" as const },
  { time: "06:16:39", event: "ROUTE HEALTHY", detail: "Dashboard interface loaded cleanly.", tone: "lime" as const },
];

export function DashboardView() {
  return (
    <main className="dashboard-main">
      <section className="dashboard-hero section-shell">
        <div className="dashboard-hero__copy">
          <div className="kicker">
            <span>CONTROL SURFACE / 01</span>
            <StatusNode label="ALL SYSTEMS NOMINAL" />
          </div>
          <h1>
            READ THE
            <br />
            <em>SYSTEM.</em>
          </h1>
          <p>
            A live operational view of the Hybrid/06 interface language. Track
            coherence, inspect layer health, and keep the signal clean.
          </p>
        </div>
        <div className="dashboard-hero__stamp" aria-label="Dashboard status">
          <Gauge size={22} />
          <span>LIVE WINDOW</span>
          <strong>06:21:48</strong>
          <small>UTC / BUILD 06.21</small>
        </div>
      </section>

      <section className="dashboard-content section-shell" aria-label="System dashboard">
        <div className="dashboard-toolbar">
          <div>
            <span className="eyebrow">OPERATIONAL TELEMETRY</span>
            <strong>CONTROL MATRIX / PRIMARY</strong>
          </div>
          <div className="dashboard-toolbar__actions">
            <span className="dashboard-toolbar__sync">
              <Radio size={14} /> SYNC 08MS
            </span>
            <HybridButton variant="ghost">
              EXPORT <ArrowUpRight size={15} />
            </HybridButton>
          </div>
        </div>

        <div className="dashboard-metrics">
          {metrics.map((metric) => (
            <article
              className={`dashboard-metric dashboard-metric--${metric.tone}`}
              key={metric.label}
            >
              <span>{metric.label}</span>
              <strong>
                {metric.value}
                {"suffix" in metric && metric.suffix && <small>{metric.suffix}</small>}
              </strong>
              <em>{metric.delta}</em>
            </article>
          ))}
        </div>

        <div className="dashboard-grid">
          <GlassCard accent="blue" className="dashboard-panel dashboard-panel--chart">
            <div className="dashboard-panel__header">
              <div>
                <span className="eyebrow">01 / COHERENCE TREND</span>
                <h2>Signal stability</h2>
              </div>
              <StatusNode label="LIVE" tone="blue" />
            </div>
            <div className="dashboard-chart" aria-label="System coherence trend chart">
              <div className="dashboard-chart__grid" />
              <svg viewBox="0 0 760 240" role="img" aria-label="System coherence rising from 82 to 98.6 percent">
                <defs>
                  <linearGradient id="dashboardFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--signal)" stopOpacity=".34" />
                    <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="dashboard-chart__area" d="M0 190 L76 174 L152 181 L228 138 L304 150 L380 108 L456 122 L532 77 L608 91 L684 42 L760 57 L760 240 L0 240 Z" />
                <path className="dashboard-chart__line" d="M0 190 L76 174 L152 181 L228 138 L304 150 L380 108 L456 122 L532 77 L608 91 L684 42 L760 57" />
              </svg>
              <span className="dashboard-chart__axis dashboard-chart__axis--top">100</span>
              <span className="dashboard-chart__axis dashboard-chart__axis--mid">090</span>
              <span className="dashboard-chart__axis dashboard-chart__axis--bottom">080</span>
            </div>
            <div className="dashboard-chart__footer">
              <span><i className="dashboard-chart__legend" /> COHERENCE</span>
              <span>LAST 12 HOURS</span>
              <strong>+16.6%</strong>
            </div>
          </GlassCard>

          <GlassCard accent="lime" className="dashboard-panel dashboard-panel--health">
            <div className="dashboard-panel__header">
              <div>
                <span className="eyebrow">02 / LAYER HEALTH</span>
                <h2>Six disciplines</h2>
              </div>
              <Layers3 size={20} />
            </div>
            <div className="layer-health-list">
              {layerHealth.map((layer) => (
                <div className="layer-health-row" key={layer.label}>
                  <StatusNode label={layer.label} tone={layer.tone} animated={false} />
                  <div className="layer-health-row__bar"><span style={{ width: layer.value }} /></div>
                  <strong>{layer.value}</strong>
                </div>
              ))}
            </div>
            <div className="dashboard-panel__footer">
              <Check size={14} /> ALL LAYERS REPORTING NOMINAL
            </div>
          </GlassCard>

          <GlassCard accent="orange" className="dashboard-panel dashboard-panel--activity">
            <div className="dashboard-panel__header">
              <div>
                <span className="eyebrow">03 / RECENT ACTIVITY</span>
                <h2>Signal log</h2>
              </div>
              <Activity size={20} />
            </div>
            <div className="activity-list">
              {activity.map((item) => (
                <div className="activity-row" key={item.time}>
                  <StatusNode label="" tone={item.tone} animated={false} />
                  <div>
                    <strong>{item.event}</strong>
                    <span>{item.detail}</span>
                  </div>
                  <time>{item.time}</time>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard accent="none" className="dashboard-panel dashboard-panel--command">
            <div className="dashboard-panel__header">
              <div>
                <span className="eyebrow">04 / COMMAND CHANNEL</span>
                <h2>Issue a directive</h2>
              </div>
              <Command size={20} />
            </div>
            <div className="command-panel__body">
              <label htmlFor="dashboard-command">SYSTEM COMMAND</label>
              <div className="input-shell">
                <Terminal size={17} />
                <HybridInput id="dashboard-command" placeholder="Inspect layer status..." />
                <span>↵</span>
              </div>
              <div className="command-panel__meta">
                <span><CircleDot size={13} /> READY FOR INPUT</span>
                <span>AUTH / LOCAL</span>
              </div>
              <div className="command-panel__actions">
                <HybridButton variant="signal">
                  RUN COMMAND <Zap size={15} />
                </HybridButton>
                <span><ShieldCheck size={14} /> SAFE MODE ENABLED</span>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="dashboard-footer-note">
          <ScanLine size={15} /> TELEMETRY IS REPRESENTATIVE / NO EXTERNAL DATA CONNECTION
        </div>
      </section>
    </main>
  );
}
