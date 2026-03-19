"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const features = [
  "Multi-tenant Architecture",
  "Role-based Access Control",
  "Real-time Analytics Dashboard",
  "Automated Workflows",
  "Third-party Integrations",
  "Custom Report Builder",
  "REST & GraphQL APIs",
  "White-label Ready",
];

export default function CrmCapability() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary-600 font-semibold text-sm tracking-widest uppercase mb-4">
              CRM Platform
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Scalable CRM for{" "}
              <span className="gradient-text">Modern Teams</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Our CRM platform is designed from the ground up as a multi-tenant
              SaaS solution. Manage customer relationships, automate sales
              pipelines, and gain actionable insights — all from one powerful
              dashboard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button href="/crm-platform" size="lg">
              Explore CRM Platform
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Button>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card p-8 relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-50 dark:bg-primary-500/10 rounded-full blur-[60px]" />

              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">CRM Dashboard</h4>
                    <p className="text-gray-500 text-xs">Real-time overview</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Active Leads", value: "2,847" },
                    { label: "Conversion", value: "24.8%" },
                    { label: "Revenue", value: "$1.2M" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                      <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{stat.label}</p>
                      <p className="text-gray-900 dark:text-white font-bold text-lg">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-500 text-xs mb-3">Pipeline Activity</p>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary-500/40 to-primary-500/80 rounded-t-sm"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Activity */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-500 text-xs mb-3">Recent Activity</p>
                  <div className="space-y-3">
                    {[
                      { text: "New lead from website", time: "2m ago" },
                      { text: "Deal closed - $45,000", time: "15m ago" },
                      { text: "Meeting scheduled", time: "1h ago" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full" />
                          <span className="text-gray-700 dark:text-gray-300 text-xs">{item.text}</span>
                        </div>
                        <span className="text-gray-400 text-xs">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
