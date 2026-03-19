import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kreotek Technologies. Start your project, request a demo, or schedule a free consultation.",
};

export default function ContactPage() {
  return <ContactContent />;
}
