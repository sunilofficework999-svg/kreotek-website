import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web Development, Mobile Apps, AI/ML, Cloud Solutions, IT Consulting & UI/UX Design. Enterprise-grade technology services by Kreotek Technologies.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
