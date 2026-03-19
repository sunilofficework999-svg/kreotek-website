import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Kreotek Technologies Private Limited.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you fill out a contact form, request a demo, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to respond to your inquiries, provide our services, send you updates and marketing communications (with your consent), improve our website and services, and comply with legal obligations.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services, comply with the law, or protect our rights.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of our website.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications at any time by contacting us or using the unsubscribe link in our emails.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at contact@kreotek.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding pt-24 sm:pt-32 bg-white dark:bg-gray-950 min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Kreotek Technologies Private Limited (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, and safeguard your information when you visit our
              website or use our services.
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
