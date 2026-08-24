// Per-product accent styling. Lives under components/ so Tailwind's content
// scanner picks up these class strings (lib/ is not in the content globs).

export type ProductColor = "blue" | "emerald" | "violet";

export interface ProductTheme {
  glow: string;
  badge: string;
  icon: string;
  tagline: string;
  buttonVariant: "primary" | "outline";
}

export const productThemes: Record<ProductColor, ProductTheme> = {
  blue: {
    glow: "bg-primary-500",
    badge: "bg-primary-50 text-primary-600 border border-primary-100",
    icon: "text-primary-600",
    tagline: "text-primary-600",
    buttonVariant: "primary",
  },
  emerald: {
    glow: "bg-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    icon: "text-emerald-400",
    tagline: "text-emerald-400",
    buttonVariant: "outline",
  },
  violet: {
    glow: "bg-violet-500",
    badge: "bg-violet-50 text-violet-600 border border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20",
    icon: "text-violet-600 dark:text-violet-400",
    tagline: "text-violet-600 dark:text-violet-400",
    buttonVariant: "outline",
  },
};

export function themeFor(color: string): ProductTheme {
  return productThemes[color as ProductColor] ?? productThemes.blue;
}
