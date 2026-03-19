"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { products } from "@/lib/constants";

const techStack = [
  "React / Next.js",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "AWS / Azure",
  "Docker & Kubernetes",
  "REST & GraphQL APIs",
  "CI/CD Pipelines",
];

export default function SaasContent() {
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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              SaaS Platforms{" "}
              <span className="gradient-text">Built to Scale</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
              Production-ready, multi-tenant SaaS solutions designed for modern
              businesses. Secure, scalable, and built with enterprise-grade architecture.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Products Detail */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="space-y-16">
            {products.map((product) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 lg:p-12 relative overflow-hidden"
              >
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[100px] opacity-15 ${product.color === "blue" ? "bg-primary-500" : "bg-emerald-500"}`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-4 py-1.5 text-sm font-bold rounded-full ${product.color === "blue" ? "bg-primary-50 text-primary-600 border border-primary-100" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`}>
                      {product.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">SaaS Platform</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    {product.fullName}
                  </h2>
                  <p className={`text-lg font-medium mb-4 ${product.color === "blue" ? "text-primary-600" : "text-emerald-400"}`}>
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <svg className={`w-5 h-5 flex-shrink-0 ${product.color === "blue" ? "text-primary-600" : "text-emerald-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button href="/contact" variant={product.color === "blue" ? "primary" : "outline"}>
                    Request Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <Container>
          <SectionHeading
            label="Technology"
            title="Enterprise-Grade Tech Stack"
            description="Our products are built on proven, scalable technologies used by the world's leading companies."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card p-4 text-center hover:border-primary-500/30 transition-all"
              >
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
