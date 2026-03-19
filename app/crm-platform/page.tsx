import type { Metadata } from "next";
import CrmContent from "./CrmContent";

export const metadata: Metadata = {
  title: "CRM Platform",
  description:
    "Scalable multi-tenant CRM platform by Kreotek Technologies. Manage leads, automate workflows, and gain actionable business insights.",
};

export default function CrmPage() {
  return <CrmContent />;
}
