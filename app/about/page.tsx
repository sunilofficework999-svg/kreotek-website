import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kreotek Technologies - our vision, mission, and the team driving digital transformation for businesses worldwide.",
};

export default function AboutPage() {
  return <AboutContent />;
}
