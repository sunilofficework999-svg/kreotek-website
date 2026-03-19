"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeConfigurator() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, mode, setTheme, setMode, presets } = useTheme();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Theme Settings</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Customize the look & feel</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-6">
                {/* Mode Toggle */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                    Appearance
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
                    <button
                      onClick={() => setMode("light")}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                        mode === "light"
                          ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Light
                    </button>
                    <button
                      onClick={() => setMode("dark")}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                        mode === "dark"
                          ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      Dark
                    </button>
                  </div>
                </div>

                {/* Color Presets */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                    Brand Color
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {presets.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => setTheme(preset.name)}
                        className={`group relative flex flex-col items-center gap-1.5 p-2.5 rounded-xl border-2 transition-all ${
                          currentTheme === preset.name
                            ? "border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-800 shadow-sm"
                            : "border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                      >
                        <div
                          className="w-8 h-8 rounded-full shadow-inner ring-2 ring-white dark:ring-gray-900"
                          style={{ background: preset.primary[500] }}
                        />
                        <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">
                          {preset.label}
                        </span>
                        {currentTheme === preset.name && (
                          <motion.div
                            layoutId="activeTheme"
                            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center"
                          >
                            <svg className="w-2.5 h-2.5 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
                    Preview
                  </label>
                  <div className={`rounded-xl border overflow-hidden ${mode === "dark" ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"}`}>
                    {/* Mini navbar */}
                    <div className={`h-8 border-b flex items-center px-3 gap-2 ${mode === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"}`}>
                      <div className="w-4 h-4 rounded" style={{ background: "var(--primary-500)" }} />
                      <div className="flex gap-1.5">
                        <div className={`w-8 h-1.5 rounded ${mode === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
                        <div className={`w-6 h-1.5 rounded ${mode === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
                        <div className={`w-7 h-1.5 rounded ${mode === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
                      </div>
                      <div className="ml-auto w-10 h-3 rounded" style={{ background: "var(--primary-500)" }} />
                    </div>
                    {/* Mini hero */}
                    <div className="p-4 space-y-2">
                      <div className="w-24 h-2.5 rounded" style={{ background: "var(--primary-500)", opacity: 0.15 }} />
                      <div className={`w-32 h-3 rounded ${mode === "dark" ? "bg-gray-200" : "bg-gray-800"}`} />
                      <div className={`w-full h-1.5 rounded ${mode === "dark" ? "bg-gray-800" : "bg-gray-100"}`} />
                      <div className={`w-3/4 h-1.5 rounded ${mode === "dark" ? "bg-gray-800" : "bg-gray-100"}`} />
                      <div className="flex gap-2 mt-2">
                        <div className="w-16 h-5 rounded-md" style={{ background: "var(--primary-500)" }} />
                        <div className={`w-16 h-5 rounded-md border ${mode === "dark" ? "border-gray-700" : "border-gray-200"}`} />
                      </div>
                    </div>
                    {/* Mini cards */}
                    <div className="px-4 pb-4 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className={`h-10 rounded-lg border p-1.5 ${mode === "dark" ? "border-gray-800" : "border-gray-100"}`}>
                          <div className="w-4 h-1 rounded mb-1" style={{ background: "var(--primary-500)", opacity: 0.3 }} />
                          <div className={`w-full h-1 rounded ${mode === "dark" ? "bg-gray-800" : "bg-gray-100"}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reset */}
                <button
                  onClick={() => { setTheme("maroon"); setMode("light"); }}
                  className="w-full py-2.5 px-4 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors border border-gray-200 dark:border-gray-700"
                >
                  Reset to Default
                </button>
              </div>

              {/* Footer */}
              <div className="p-5 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                <p className="text-[11px] text-gray-400 text-center">
                  Theme preference is saved in your browser
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ThemeToggleExposer onToggle={() => setIsOpen((v) => !v)} />
    </>
  );
}

let _toggleFn: (() => void) | null = null;
export function getThemeToggle() {
  return _toggleFn;
}
function ThemeToggleExposer({ onToggle }: { onToggle: () => void }) {
  _toggleFn = onToggle;
  return null;
}
