"use client";

import { AnimatePresence, motion } from "motion/react";
import { Activity, ArrowUpRight, Check, Cpu, Zap } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { HybridButton } from "@/components/ui/hybrid-button";
import { StatusNode } from "@/components/ui/status-node";

export function SystemConsole() {
  const [mode, setMode] = useState<"live" | "inspect">("live");

  return (
    <div className="console-wrap">
      <div className="console-orbit console-orbit--one" />
      <div className="console-orbit console-orbit--two" />
      <GlassCard accent="blue" className="console">
        <div className="console__topbar">
          <div className="console__brand">
            <span className="console__mark">
              <Cpu size={17} strokeWidth={2.5} />
            </span>
            <div>
              <span className="eyebrow">SYSTEM PREVIEW</span>
              <strong>CONTROL MATRIX</strong>
            </div>
          </div>
          <StatusNode label={mode === "live" ? "ONLINE" : "INSPECT"} />
        </div>

        <div className="console__metric">
          <div>
            <span className="metric-label">SYSTEM COHERENCE</span>
            <strong className="metric-value">98.6</strong>
          </div>
          <span className="metric-delta">
            <ArrowUpRight size={14} /> 12.4%
          </span>
        </div>

        <div className="chart" aria-label="Rising system coherence chart">
          <div className="chart__grid" />
          <svg
            viewBox="0 0 480 150"
            role="img"
            aria-label="Telemetry line trending upward"
          >
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b8ff38" stopOpacity=".35" />
                <stop offset="100%" stopColor="#b8ff38" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="chart__area"
              d="M0 122 L48 112 L96 116 L144 87 L192 98 L240 60 L288 72 L336 35 L384 50 L432 22 L480 30 L480 150 L0 150 Z"
            />
            <motion.path
              className="chart__line"
              d="M0 122 L48 112 L96 116 L144 87 L192 98 L240 60 L288 72 L336 35 L384 50 L432 22 L480 30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
          </svg>
          <span className="chart__axis chart__axis--top">100</span>
          <span className="chart__axis chart__axis--bottom">000</span>
        </div>

        <div className="console__controls">
          <button
            className={mode === "live" ? "mode-button is-active" : "mode-button"}
            onClick={() => setMode("live")}
          >
            <Activity size={15} /> LIVE
          </button>
          <button
            className={
              mode === "inspect" ? "mode-button is-active" : "mode-button"
            }
            onClick={() => setMode("inspect")}
          >
            <Zap size={15} /> INSPECT
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            className="console__message"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ type: "spring", stiffness: 600, damping: 25 }}
          >
            <span className="console__check">
              <Check size={14} strokeWidth={3} />
            </span>
            {mode === "live"
              ? "ALL LAYERS SYNCHRONIZED"
              : "TOKENS EXPOSED FOR REVIEW"}
          </motion.div>
        </AnimatePresence>

        <HybridButton variant="signal" onClick={() => setMode("inspect")}>
          OPEN SYSTEM <ArrowUpRight size={17} />
        </HybridButton>
      </GlassCard>
    </div>
  );
}
