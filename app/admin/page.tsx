import type { Metadata } from "next";
import { AdminView } from "@/components/admin-view";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Admin Showcase | HYBRID/06",
  description:
    "A working admin dashboard showcase for the Hybrid/06 interface system.",
};

export default function AdminPage() {
  return (
    <>
      <SiteHeader />
      <AdminView />
    </>
  );
}
