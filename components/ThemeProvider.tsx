"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { themePresets, applyTheme, DEFAULT_THEME, type ThemePreset } from "@/lib/theme";

type Mode = "light" | "dark";

interface ThemeContextType {
  currentTheme: string;
  mode: Mode;
  setTheme: (name: string) => void;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  presets: ThemePreset[];
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: DEFAULT_THEME,
  mode: "light",
  setTheme: () => {},
  setMode: () => {},
  toggleMode: () => {},
  presets: themePresets,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);
  const [mode, setModeState] = useState<Mode>("light");

  useEffect(() => {
    // Restore theme color
    const savedTheme = localStorage.getItem("kreotek-theme");
    if (savedTheme) {
      const preset = themePresets.find((p) => p.name === savedTheme);
      if (preset) {
        setCurrentTheme(savedTheme);
        applyTheme(preset);
      }
    }
    // Restore mode
    const savedMode = localStorage.getItem("kreotek-mode") as Mode | null;
    if (savedMode === "dark") {
      setModeState("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const setTheme = (name: string) => {
    const preset = themePresets.find((p) => p.name === name);
    if (preset) {
      setCurrentTheme(name);
      applyTheme(preset);
      localStorage.setItem("kreotek-theme", name);
    }
  };

  const setMode = (m: Mode) => {
    setModeState(m);
    if (m === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("kreotek-mode", m);
  };

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, mode, setTheme, setMode, toggleMode, presets: themePresets }}>
      {children}
    </ThemeContext.Provider>
  );
}
