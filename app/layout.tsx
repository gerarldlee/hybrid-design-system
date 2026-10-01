import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const themeScript = `(() => {
  try {
    const stored = localStorage.getItem("hybrid-theme");
    const theme = stored === "dark" || stored === "light" || stored === "mono-light" || stored === "mono-dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();`;

export const metadata: Metadata = {
  title: "HYBRID/06 — System UI",
  description:
    "An avant-garde interface system combining Bauhaus order, brutalist structure, tactile depth, glass surfaces, and cybernetic telemetry.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
