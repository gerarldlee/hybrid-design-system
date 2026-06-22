"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type HybridButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "signal" | "ghost";
};

export function HybridButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: HybridButtonProps) {
  return (
    <motion.button
      whileTap={{ x: 2, y: 2 }}
      transition={{ type: "spring", stiffness: 600, damping: 25 }}
      className={`hybrid-button hybrid-button--${variant} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
