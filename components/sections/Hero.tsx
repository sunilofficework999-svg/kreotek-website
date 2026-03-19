"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { stats } from "@/lib/constants";

function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Browser Window */}
      <rect x="60" y="40" width="380" height="260" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
      <rect x="60" y="40" width="380" height="32" rx="12" fill="#f9fafb"/>
      <rect x="60" y="70" width="380" height="2" fill="#e5e7eb"/>
      <circle cx="82" cy="56" r="5" fill="#fca5a5"/>
      <circle cx="98" cy="56" r="5" fill="#fde68a"/>
      <circle cx="114" cy="56" r="5" fill="#86efac"/>
      <rect x="160" y="50" width="180" height="12" rx="6" fill="#f3f4f6"/>

      {/* Code Lines */}
      <rect x="80" y="88" width="100" height="8" rx="4" fill="#8d0802" opacity="0.15"/>
      <rect x="80" y="104" width="160" height="8" rx="4" fill="#8d0802" opacity="0.1"/>
      <rect x="80" y="120" width="120" height="8" rx="4" fill="#8d0802" opacity="0.08"/>
      <rect x="100" y="136" width="200" height="8" rx="4" fill="#e5e7eb"/>
      <rect x="100" y="152" width="170" height="8" rx="4" fill="#e5e7eb"/>
      <rect x="100" y="168" width="220" height="8" rx="4" fill="#e5e7eb"/>
      <rect x="80" y="184" width="140" height="8" rx="4" fill="#8d0802" opacity="0.1"/>
      <rect x="100" y="200" width="190" height="8" rx="4" fill="#e5e7eb"/>
      <rect x="100" y="216" width="150" height="8" rx="4" fill="#e5e7eb"/>

      {/* Dashboard Card - floating */}
      <g filter="url(#shadow1)">
        <rect x="300" y="100" width="130" height="90" rx="10" fill="white"/>
        <rect x="312" y="112" width="50" height="6" rx="3" fill="#8d0802" opacity="0.2"/>
        <rect x="312" y="126" width="80" height="14" rx="4" fill="#8d0802" opacity="0.15"/>
        <rect x="312" y="150" width="106" height="28" rx="6" fill="#f9fafb"/>
        {/* Mini chart bars */}
        <rect x="320" y="164" width="8" height="10" rx="2" fill="#8d0802" opacity="0.3"/>
        <rect x="332" y="158" width="8" height="16" rx="2" fill="#8d0802" opacity="0.4"/>
        <rect x="344" y="161" width="8" height="13" rx="2" fill="#8d0802" opacity="0.35"/>
        <rect x="356" y="155" width="8" height="19" rx="2" fill="#8d0802" opacity="0.5"/>
        <rect x="368" y="159" width="8" height="15" rx="2" fill="#8d0802" opacity="0.4"/>
        <rect x="380" y="152" width="8" height="22" rx="2" fill="#8d0802" opacity="0.6"/>
        <rect x="392" y="156" width="8" height="18" rx="2" fill="#8d0802" opacity="0.45"/>
      </g>

      {/* Notification Card - floating */}
      <g filter="url(#shadow1)">
        <rect x="20" y="160" width="120" height="60" rx="10" fill="white"/>
        <circle cx="42" cy="182" r="10" fill="#8d0802" opacity="0.1"/>
        <path d="M38 182l3 3 5-5" stroke="#8d0802" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="58" y="176" width="70" height="5" rx="2.5" fill="#d1d5db"/>
        <rect x="58" y="186" width="50" height="4" rx="2" fill="#e5e7eb"/>
      </g>

      {/* Gear Icon - floating */}
      <g filter="url(#shadow1)">
        <circle cx="70" cy="100" r="22" fill="white"/>
        <path d="M70 90v2m0 16v2m-8.5-11.5h-2m20 0h2m-3.5-7.5l-1.5 1.5m-11 11l-1.5 1.5m14-1.5l1.5 1.5m-14-14l1.5 1.5" stroke="#8d0802" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <circle cx="70" cy="100" r="5" stroke="#8d0802" strokeWidth="1.5" fill="none" opacity="0.4"/>
      </g>

      {/* Floating dots */}
      <circle cx="460" cy="80" r="4" fill="#8d0802" opacity="0.15"/>
      <circle cx="450" cy="300" r="6" fill="#8d0802" opacity="0.1"/>
      <circle cx="30" cy="260" r="5" fill="#8d0802" opacity="0.12"/>
      <circle cx="250" cy="320" r="3" fill="#8d0802" opacity="0.2"/>

      {/* Connection lines */}
      <line x1="140" y1="160" x2="80" y2="190" stroke="#8d0802" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4"/>
      <line x1="300" y1="145" x2="260" y2="170" stroke="#8d0802" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4"/>

      <defs>
        <filter id="shadow1" x="-10" y="-10" width="calc(100% + 20px)" height="calc(100% + 20px)">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.08"/>
        </filter>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-white dark:bg-gray-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-50 dark:bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom section-padding relative z-10 pt-24 sm:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-6"
            >
              We Build Technology
              <br />
              <span className="gradient-text">That Scales Business</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              From enterprise software to SaaS platforms — we deliver production-ready
              digital solutions with the quality of a Fortune 500 and the speed of a startup.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Button href="/contact" size="lg">
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
    </section>
  );
}
