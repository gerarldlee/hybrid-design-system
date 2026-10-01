"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "hybrid-theme";
type Theme = "light" | "dark";

function getNextTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
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

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      {isDark ? (
        <Sun size={15} aria-hidden="true" />
      ) : (
        <Moon size={15} aria-hidden="true" />
      )}
      <span>{isDark ? "LIGHT" : "DARK"}</span>
    </button>
  );
}
