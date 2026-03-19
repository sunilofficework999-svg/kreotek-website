"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-50 dark:bg-primary-500/10 rounded-full blur-[120px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 glass-card p-6 sm:p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto"
        >
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Ready to Start?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a custom application, SaaS platform, or technology
            consulting — our team is ready to turn your vision into a
            market-leading product.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Get Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View All Services
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
