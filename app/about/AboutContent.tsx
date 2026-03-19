"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

const values = [
  {
    title: "Innovation First",
    description:
      "We embrace cutting-edge technology to solve real problems. Every solution we build pushes boundaries while remaining practical and scalable.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
  },
  {
    title: "Quality Obsessed",
    description:
      "We don't ship until it's right. Code reviews, testing, security audits — every deliverable meets enterprise-grade standards.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    title: "Client Partnership",
    description:
      "We're not vendors — we're partners. Your success is our success. We invest in understanding your business to deliver maximum impact.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    title: "Transparent Always",
    description:
      "No black boxes. Weekly updates, real-time dashboards, and honest communication. You always know where your project stands.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
  },
];

const milestones = [
  { year: "Founded", title: "Kreotek Technologies Launched", description: "Started with a vision to build enterprise-quality technology accessible to all businesses." },
  { year: "Products", title: "SaaS Products Built", description: "Developed VisitorDesk and CareDesk platforms — production-ready solutions for healthcare and enterprise sectors." },
  { year: "Expanding", title: "Growing Service Portfolio", description: "Building a full-stack service offering with 24/7 support and modern cloud-native architecture." },
  { year: "Future", title: "AI-Powered Ecosystem", description: "Building next-generation AI-integrated platforms for the future of business." },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-24 sm:pt-32 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/8 rounded-full blur-[120px]" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-primary-600 font-semibold text-sm tracking-widest uppercase mb-4">
              About Kreotek
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Technology That{" "}
              <span className="gradient-text">Means Business</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
              We are a modern technology company building the digital
              infrastructure that businesses need to compete, grow, and lead in
              their industries.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-600 mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                To become the most trusted technology partner for businesses
                worldwide — known for delivering products that are not just
                functional, but transformative. We envision a world where
                enterprise-grade technology is accessible to every business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                To empower businesses with scalable, secure, and innovative
                digital solutions. We combine deep technical expertise with
                a genuine understanding of business needs to deliver technology
                that drives measurable growth and lasting competitive advantage.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <Container>
          <SectionHeading
            label="Our Values"
            title="What Drives Us Every Day"
            description="These principles guide every decision we make, every line of code we write."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-8 hover:border-primary-500/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-600 mb-5 group-hover:bg-primary-100 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Journey */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            label="Our Journey"
            title="Building the Future, One Milestone at a Time"
          />
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-500/10 border-2 border-primary-500/30 flex items-center justify-center text-primary-600 text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-gray-200 dark:bg-gray-800 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-primary-600 text-sm font-semibold">{milestone.year}</span>
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg mt-1">{milestone.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement Models */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <Container>
          <SectionHeading
            label="Work With Us"
            title="Flexible Engagement Models"
            description="Choose the model that fits your business. No lock-ins, no surprises."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Fixed Price",
                description: "Best for well-defined projects with clear scope and deliverables. You know the cost upfront — no surprises.",
                features: ["Defined scope & timeline", "Milestone-based payments", "Ideal for MVPs & launches"],
              },
              {
                title: "Dedicated Team",
                description: "Get a fully integrated engineering team that works exclusively on your project, as an extension of your company.",
                features: ["Full-time dedicated resources", "Direct team management", "Scale up or down anytime"],
              },
              {
                title: "Time & Material",
                description: "Maximum flexibility for evolving projects. Pay for the hours worked with full transparency on effort and costs.",
                features: ["Flexible scope changes", "Weekly billing & reports", "Best for ongoing development"],
              },
            ].map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-8 hover:border-primary-500/30 transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{model.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
