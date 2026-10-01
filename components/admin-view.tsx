"use client";

import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  Boxes,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Database,
  LayoutDashboard,
  MousePointer2,
  PanelTop,
  Search,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { HybridButton } from "@/components/ui/hybrid-button";
import { HybridInput } from "@/components/ui/hybrid-input";
import { StatusNode } from "@/components/ui/status-node";

const sidebarItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "components", label: "Components", icon: Boxes },
  { id: "data", label: "Data", icon: Database },
  { id: "activity", label: "Activity", icon: Activity },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

const metrics = [
  { label: "TOTAL REVENUE", value: "$84.2K", change: "+18.6%", icon: CircleDollarSign, tone: "signal" },
  { label: "ACTIVE USERS", value: "12,480", change: "+08.2%", icon: Users, tone: "blue" },
  { label: "CONVERSION", value: "24.8%", change: "+04.7%", icon: MousePointer2, tone: "orange" },
  { label: "SYSTEM HEALTH", value: "99.2", change: "NOMINAL", icon: Zap, tone: "lime" },
] as const;

const activities = [
  { label: "Checkout flow published", detail: "Production / 04 minutes ago", tone: "lime" as const },
  { label: "Component token synced", detail: "Design system / 17 minutes ago", tone: "blue" as const },
  { label: "New workspace created", detail: "Northstar team / 32 minutes ago", tone: "orange" as const },
];

const dataRows = [
  { name: "Checkout system", owner: "Commerce", status: "Healthy", tone: "lime" as const, sync: "04 min ago", coverage: "98.6%" },
  { name: "Token registry", owner: "Design ops", status: "Syncing", tone: "blue" as const, sync: "17 min ago", coverage: "94.2%" },
  { name: "Component catalog", owner: "Frontend", status: "Healthy", tone: "lime" as const, sync: "32 min ago", coverage: "100%" },
  { name: "Telemetry stream", owner: "Platform", status: "Review", tone: "orange" as const, sync: "48 min ago", coverage: "87.4%" },
];

const carouselSlides = [
  { eyebrow: "SURFACE / 01", title: "Signal controls", copy: "High-affordance actions with a physical response.", tone: "lime" },
  { eyebrow: "SURFACE / 02", title: "Glass modules", copy: "Layered cards keep dense information tactile and legible.", tone: "blue" },
  { eyebrow: "SURFACE / 03", title: "Status systems", copy: "Every state is visible, named, and ready for feedback.", tone: "orange" },
] as const;

export function AdminView() {
  const [activeItem, setActiveItem] = useState("overview");
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = carouselSlides[activeSlide];

  function moveSlide(direction: number) {
    setActiveSlide((current) => (current + direction + carouselSlides.length) % carouselSlides.length);
  }

  return (
    <main className="admin-page">
      <aside className="admin-sidebar" aria-label="Admin navigation">
        <div className="admin-sidebar__heading">
          <span className="admin-sidebar__mark"><PanelTop size={17} /></span>
          <div>
            <strong>COMMAND DECK</strong>
            <span>ADMIN / 06.21</span>
          </div>
        </div>
        <div className="admin-sidebar__section-label">WORKSPACE</div>
        <nav className="admin-sidebar__nav">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <a
                className={isActive ? "is-active" : undefined}
                href={`#${item.id}`}
                key={item.id}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveItem(item.id)}
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {isActive && <i aria-hidden="true" />}
              </a>
            );
          })}
        </nav>
        <div className="admin-sidebar__footer">
          <StatusNode label="Workspace online" tone="lime" />
          <span>BUILD 06.21 / LOCAL</span>
        </div>
      </aside>

      <section className="admin-workspace">
        <header className="admin-toolbar">
          <div className="admin-toolbar__title">
            <span className="eyebrow">ADMIN CONTROL / {activeItem.toUpperCase()}</span>
            <h1>Overview <em>in motion.</em></h1>
          </div>
          <div className="admin-toolbar__actions">
            <div className="admin-search">
              <Search size={15} />
              <HybridInput aria-label="Search workspace" placeholder="Search workspace..." />
              <kbd>⌘ K</kbd>
            </div>
            <button className="admin-icon-button" type="button" aria-label="View notifications">
              <Bell size={17} />
              <i aria-hidden="true" />
            </button>
            <div className="admin-avatar" aria-label="Signed in as Ada Chen">AC</div>
          </div>
        </header>

        <div className="admin-content">
          <section className="admin-welcome" id="overview">
            <div>
              <span className="admin-welcome__signal"><Sparkles size={14} /> DESIGN SYSTEM / LIVE</span>
              <p>Good morning, Ada. Here is the signal across your workspace.</p>
            </div>
            <HybridButton variant="signal">
              CREATE REPORT <ArrowUpRight size={15} />
            </HybridButton>
          </section>

          <section className="admin-metrics" aria-label="Workspace metrics">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <article className={`admin-metric admin-metric--${metric.tone}`} key={metric.label}>
                  <div className="admin-metric__topline">
                    <span>{metric.label}</span>
                    <Icon size={17} />
                  </div>
                  <strong>{metric.value}</strong>
                  <span className="admin-metric__change"><ArrowUpRight size={12} /> {metric.change}</span>
                </article>
              );
            })}
          </section>

          <section className="admin-main-grid" id="analytics">
            <GlassCard accent="blue" className="admin-panel admin-panel--trend">
              <div className="admin-panel__header">
                <div>
                  <span className="eyebrow">01 / WORKSPACE PULSE</span>
                  <h2>Signal over time</h2>
                </div>
                <div className="admin-panel__meta"><StatusNode label="LIVE" tone="blue" /> <span>12H</span></div>
              </div>
              <div className="admin-line-chart" aria-label="Workspace signal trend chart">
                <div className="admin-line-chart__grid" />
                <svg viewBox="0 0 800 260" role="img" aria-label="Signal trend rising from 64 to 92 percent">
                  <defs>
                    <linearGradient id="adminTrendFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity=".28" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="admin-line-chart__area" d="M0 214 L80 190 L160 198 L240 158 L320 175 L400 110 L480 132 L560 88 L640 104 L720 48 L800 63 L800 260 L0 260 Z" />
                  <path className="admin-line-chart__line" d="M0 214 L80 190 L160 198 L240 158 L320 175 L400 110 L480 132 L560 88 L640 104 L720 48 L800 63" />
                  <circle cx="800" cy="63" r="6" className="admin-line-chart__point" />
                </svg>
                <span className="admin-line-chart__axis admin-line-chart__axis--top">100</span>
                <span className="admin-line-chart__axis admin-line-chart__axis--mid">080</span>
                <span className="admin-line-chart__axis admin-line-chart__axis--bottom">060</span>
              </div>
              <div className="admin-chart-footer"><span><i /> WORKSPACE SIGNAL</span><span>LAST 12 HOURS</span><strong>+28.4%</strong></div>
            </GlassCard>

            <GlassCard accent="lime" className="admin-panel admin-panel--breakdown">
              <div className="admin-panel__header">
                <div>
                  <span className="eyebrow">02 / DISTRIBUTION</span>
                  <h2>Layer mix</h2>
                </div>
                <Database size={19} />
              </div>
              <div className="admin-bars" aria-label="Layer distribution bar chart">
                <div className="admin-bars__axis"><span>100%</span><span>50%</span><span>0%</span></div>
                <div className="admin-bars__chart">
                  {[76, 58, 88, 68, 47, 80, 63].map((height, index) => <span style={{ height: `${height}%` }} key={index}><i /></span>)}
                </div>
                <div className="admin-bars__labels"><span>M</span><span>B</span><span>N</span><span>S</span><span>G</span><span>C</span><span>+</span></div>
              </div>
              <div className="admin-breakdown-note"><Check size={14} /> All layers within target range</div>
            </GlassCard>

            <GlassCard accent="orange" className="admin-panel admin-panel--activity" id="activity">
              <div className="admin-panel__header">
                <div>
                  <span className="eyebrow">03 / RECENT ACTIVITY</span>
                  <h2>What changed</h2>
                </div>
                <Activity size={19} />
              </div>
              <div className="admin-activity-list">
                {activities.map((item) => <div className="admin-activity-row" key={item.label}><StatusNode label="" tone={item.tone} animated={false} /><div><strong>{item.label}</strong><span>{item.detail}</span></div><ArrowUpRight size={14} /></div>)}
              </div>
            </GlassCard>
          </section>

          <section className="admin-showcase" id="components">
            <div className="admin-section-heading">
              <div><span className="eyebrow">04 / COMPONENT LAB</span><h2>Built to be <em>felt.</em></h2></div>
              <p>A working specimen shelf for the controls, surfaces, and feedback patterns inside the system.</p>
            </div>
            <div className="admin-showcase-grid">
              <GlassCard accent={slide.tone} className="admin-carousel">
                <div className="admin-carousel__topline"><span>{slide.eyebrow}</span><span>{String(activeSlide + 1).padStart(2, "0")} / 03</span></div>
                <div className={`admin-carousel__visual admin-carousel__visual--${slide.tone}`} aria-hidden="true"><span /><span /><span /><i /></div>
                <div className="admin-carousel__copy"><h3>{slide.title}</h3><p>{slide.copy}</p></div>
                <div className="admin-carousel__controls">
                  <div>{carouselSlides.map((item, index) => <button className={index === activeSlide ? "is-active" : undefined} key={item.title} type="button" aria-label={`Show slide ${index + 1}`} aria-current={index === activeSlide ? "true" : undefined} onClick={() => setActiveSlide(index)} />)}</div>
                  <div><button type="button" aria-label="Previous showcase slide" onClick={() => moveSlide(-1)}><ChevronLeft size={16} /></button><button type="button" aria-label="Next showcase slide" onClick={() => moveSlide(1)}><ChevronRight size={16} /></button></div>
                </div>
              </GlassCard>

              <GlassCard accent="none" className="admin-component-shelf">
                <div className="admin-panel__header"><div><span className="eyebrow">05 / INPUT ACTIONS</span><h2>Control shelf</h2></div><SlidersHorizontal size={19} /></div>
                <div className="admin-control-row"><span>Buttons</span><div><HybridButton variant="signal">Primary <ArrowUpRight size={14} /></HybridButton><HybridButton variant="ghost">Standby</HybridButton></div></div>
                <div className="admin-control-row"><span>Status</span><div className="admin-status-stack"><StatusNode label="SYNC ACTIVE" tone="blue" /><StatusNode label="READY" tone="lime" /></div></div>
                <div className="admin-control-row admin-control-row--input"><label htmlFor="admin-command">Command input</label><div className="admin-command-input"><HybridInput id="admin-command" placeholder="Type a directive..." /><kbd>↵</kbd></div></div>
              </GlassCard>
            </div>
          </section>

          <section className="admin-data-section" id="data">
            <div className="admin-section-heading">
              <div><span className="eyebrow">06 / DATA SURFACE</span><h2>Make the signal <em>scannable.</em></h2></div>
              <p>A dense table pattern for operational records, status states, ownership, and coverage at a glance.</p>
            </div>
            <GlassCard accent="blue" className="admin-table-panel">
              <div className="admin-table-panel__header">
                <div><span className="eyebrow">WORKSPACE REGISTRY / 04 RECORDS</span><h3>Connected systems</h3></div>
                <HybridButton variant="ghost">EXPORT CSV <ArrowUpRight size={14} /></HybridButton>
              </div>
              <div className="admin-table-scroll">
                <table className="admin-table">
                  <caption className="sr-only">Connected systems and their current health</caption>
                  <thead>
                    <tr><th scope="col">System</th><th scope="col">Owner</th><th scope="col">Status</th><th scope="col">Last sync</th><th scope="col">Coverage</th><th scope="col"><span className="sr-only">Open</span></th></tr>
                  </thead>
                  <tbody>
                    {dataRows.map((row) => (
                      <tr key={row.name}>
                        <th scope="row"><span className="admin-table__system-mark" />{row.name}</th>
                        <td>{row.owner}</td>
                        <td><StatusNode label={row.status} tone={row.tone} animated={false} /></td>
                        <td>{row.sync}</td>
                        <td><div className="admin-table__coverage"><span><i style={{ width: row.coverage }} /></span><strong>{row.coverage}</strong></div></td>
                        <td><button className="admin-table__open" type="button" aria-label={`Open ${row.name}`}><ArrowUpRight size={14} /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="admin-table-panel__footer"><span>SHOWING 04 OF 04 SYSTEMS</span><span><Check size={13} /> DATA REFRESHED 08MS AGO</span></div>
            </GlassCard>
          </section>

          <section className="admin-settings" id="settings" aria-label="Workspace status">
            <div><Settings size={18} /><div><strong>Workspace configuration</strong><span>All systems are using the current token set.</span></div></div>
            <StatusNode label="CONFIGURATION NOMINAL" tone="lime" />
          </section>
        </div>
      </section>
    </main>
  );
}
