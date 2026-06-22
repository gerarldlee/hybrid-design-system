import type { HTMLAttributes, ReactNode } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  accent?: "none" | "lime" | "blue" | "orange";
};

export function GlassCard({
  children,
  accent = "none",
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`glass-card glass-card--${accent} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
