"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const features = [
  { title: "Lead Management", description: "Capture, track, and nurture leads through automated pipelines. Never miss an opportunity.", icon: "users" },
  { title: "Sales Automation", description: "Automate repetitive tasks, follow-ups, and workflows. Let your team focus on closing deals.", icon: "zap" },
  { title: "Analytics Dashboard", description: "Real-time insights into pipeline health, team performance, and revenue forecasts.", icon: "chart" },
  { title: "Multi-tenant Architecture", description: "Serve multiple organizations from a single platform with complete data isolation.", icon: "building" },
  { title: "Custom Workflows", description: "Build automation rules that match your business processes. Drag-and-drop simplicity.", icon: "workflow" },
  { title: "Integration Hub", description: "Connect with your existing tools — email, calendar, payment gateways, and more.", icon: "plug" },
];

const iconMap: Record<string, React.ReactNode> = {
  users: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  zap: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  chart: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
  building: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  workflow: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>,
  plug: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>,
};

export default function CrmContent() {
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
              CRM Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              The CRM Built for{" "}
              <span className="gradient-text">Scale</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
              A powerful, multi-tenant CRM platform that grows with your business.
              Manage relationships, automate workflows, and close more deals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Request Early Access
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            label="Platform Features"
            title="Everything You Need to Close More Deals"
            description="Built for modern sales teams who demand speed, intelligence, and reliability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-8 hover:border-primary-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-600 mb-5 group-hover:bg-primary-100 transition-colors">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dashboard Preview */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary-600 font-semibold text-sm tracking-widest uppercase mb-4">
                Powerful Dashboard
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Real-time Insights at Your Fingertips
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                Track pipeline health, monitor team performance, and forecast
                revenue — all from a single, beautiful dashboard. No data
                engineering required.
              </p>
              <ul className="space-y-4">
                {["Pipeline analytics & forecasting", "Team performance tracking", "Custom report builder", "Export to PDF & Excel"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6"
            >
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-gray-900 dark:text-white font-semibold text-sm">Revenue Overview</h4>
                  <span className="text-primary-600 text-xs">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Total Revenue", value: "$2.4M", change: "+12%" },
                    { label: "Active Deals", value: "847", change: "+8%" },
                    { label: "Win Rate", value: "68%", change: "+5%" },
                    { label: "Avg Deal Size", value: "$28K", change: "+15%" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{stat.label}</p>
                      <p className="text-gray-900 dark:text-white font-bold text-xl mt-1">{stat.value}</p>
                      <span className="text-emerald-400 text-xs">{stat.change}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">Monthly Revenue</p>
                  <div className="flex items-end gap-2 h-28">
                    {[35, 50, 45, 65, 55, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary-500/30 to-primary-500/70 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
