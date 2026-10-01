import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type SiteHeaderProps = {
  activePath?: "dashboard";
};

export function SiteHeader({ activePath }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Hybrid 06 home">
        <span className="wordmark__symbol">
          <span />
          <span />
        </span>
        HYBRID<span>/06</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/#system">SYSTEM</Link>
        <Link href="/#components">COMPONENTS</Link>
        <Link href="/#principles">PRINCIPLES</Link>
        <Link
          href="/dashboard"
          className={activePath === "dashboard" ? "is-current" : undefined}
          aria-current={activePath === "dashboard" ? "page" : undefined}
        >
          DASHBOARD
        </Link>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <Link href="/admin" className="header-cta">
          EXPLORE <ArrowRight size={15} />
        </Link>
      </div>
    </header>
  );
}
