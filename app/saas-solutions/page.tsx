import type { Metadata } from "next";
import SaasContent from "./SaasContent";

export const metadata: Metadata = {
  title: "SaaS Solutions",
  description:
    "VisitorDesk (Entry/Exit System), OrderDesk (QR Table Ordering System) & TrackDesk (Employee Monitoring & Task Management) - Production-ready SaaS platforms by Kreotek Technologies.",
};

export default function SaasPage() {
  return <SaasContent />;
}
