export interface ThemeColors {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface ThemePreset {
  name: string;
  label: string;
  primary: ThemeColors;
  gradient: { from: string; to: string };
}

export const themePresets: ThemePreset[] = [
  {
    name: "maroon",
    label: "Maroon",
    primary: {
      50: "#fef2f2",
      100: "#fde3e3",
      200: "#fcc9c9",
      300: "#f9a0a0",
      400: "#e84545",
      500: "#8d0802",
      600: "#7a0702",
      700: "#650601",
      800: "#530501",
      900: "#420401",
    },
    gradient: { from: "#8d0802", to: "#ef4444" },
  },
  {
    name: "blue",
    label: "Blue",
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#2563eb",
      600: "#1d4ed8",
      700: "#1e40af",
      800: "#1e3a8a",
      900: "#1e3063",
    },
    gradient: { from: "#2563eb", to: "#60a5fa" },
  },
  {
    name: "emerald",
    label: "Emerald",
    primary: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#059669",
      600: "#047857",
      700: "#065f46",
      800: "#064e3b",
      900: "#053f32",
    },
    gradient: { from: "#059669", to: "#34d399" },
  },
  {
    name: "violet",
    label: "Violet",
    primary: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#7c3aed",
      600: "#6d28d9",
      700: "#5b21b6",
      800: "#4c1d95",
      900: "#3b1578",
    },
    gradient: { from: "#7c3aed", to: "#a78bfa" },
  },
  {
    name: "orange",
    label: "Orange",
    primary: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#ea580c",
      600: "#c2410c",
      700: "#9a3412",
      800: "#7c2d12",
      900: "#6c2710",
    },
    gradient: { from: "#ea580c", to: "#fb923c" },
  },
  {
    name: "teal",
    label: "Teal",
    primary: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#0d9488",
      600: "#0f766e",
      700: "#115e59",
      800: "#134e4a",
      900: "#113f3c",
    },
    gradient: { from: "#0d9488", to: "#2dd4bf" },
  },
  {
    name: "rose",
    label: "Rose",
    primary: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#e11d48",
      600: "#be123c",
      700: "#9f1239",
      800: "#881337",
      900: "#701a30",
    },
    gradient: { from: "#e11d48", to: "#fb7185" },
  },
  {
    name: "slate",
    label: "Slate",
    primary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#475569",
      600: "#334155",
      700: "#1e293b",
      800: "#0f172a",
      900: "#020617",
    },
    gradient: { from: "#475569", to: "#94a3b8" },
  },
];

export function applyTheme(preset: ThemePreset) {
  const root = document.documentElement;
  const p = preset.primary;
  root.style.setProperty("--primary-50", p[50]);
  root.style.setProperty("--primary-100", p[100]);
  root.style.setProperty("--primary-200", p[200]);
  root.style.setProperty("--primary-300", p[300]);
  root.style.setProperty("--primary-400", p[400]);
  root.style.setProperty("--primary-500", p[500]);
  root.style.setProperty("--primary-600", p[600]);
  root.style.setProperty("--primary-700", p[700]);
  root.style.setProperty("--primary-800", p[800]);
  root.style.setProperty("--primary-900", p[900]);
  root.style.setProperty("--gradient-from", preset.gradient.from);
  root.style.setProperty("--gradient-to", preset.gradient.to);
}

export const DEFAULT_THEME = "maroon";
