import type { Metadata } from "next";
import { DashboardView } from "@/components/dashboard-view";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Dashboard | HYBRID/06",
  description: "Operational telemetry and system health for the Hybrid/06 interface system.",
};

export default function DashboardPage() {
  return (
    <>
      <SiteHeader activePath="dashboard" />
      <DashboardView />
    </>
  );
}
