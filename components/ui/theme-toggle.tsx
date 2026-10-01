"use client";

import { Contrast, Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "hybrid-theme";
type Theme = "light" | "dark" | "mono-light" | "mono-dark";

function getNextTheme(theme: Theme): Theme {
  switch (theme) {
    case "light":
      return "mono-dark";
    case "dark":
      return "light";
    case "mono-light":
      return "dark";
    case "mono-dark":
      return "mono-light";
  }
}

function getTheme(): Theme {
  const theme = document.documentElement.dataset.theme;
  return theme === "dark" || theme === "mono-light" || theme === "mono-dark"
    ? theme
    : "light";
}

function subscribe(callback: () => void) {
  window.addEventListener("hybrid-theme-change", callback);
  return () => window.removeEventListener("hybrid-theme-change", callback);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(subscribe, getTheme, () => "light");

  function toggleTheme() {
    const nextTheme = getNextTheme(theme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event("hybrid-theme-change"));
  }

  const isDark = theme === "dark" || theme === "mono-dark";
  const isMonochrome = theme === "mono-light" || theme === "mono-dark";
  const nextThemeLabel = {
    light: "MONO DARK",
    dark: "LIGHT",
    "mono-light": "DARK",
    "mono-dark": "MONO LIGHT",
  }[theme];

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${nextThemeLabel.toLowerCase()} theme`}
      aria-pressed={isDark || isMonochrome}
      onClick={toggleTheme}
    >
      {isMonochrome ? (
        <Contrast size={15} aria-hidden="true" />
      ) : isDark ? (
        <Sun size={15} aria-hidden="true" />
      ) : (
        <Moon size={15} aria-hidden="true" />
      )}
      <span>{nextThemeLabel}</span>
    </button>
  );
}
