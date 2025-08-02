import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#4F46E5",
        background: "#FFFFFF",
        foreground: "#111827",
        primary: "#4F46E5",
        "primary-foreground": "#ffffff",
        secondary: "#6B7280",
        "secondary-foreground": "#ffffff",
        accent: "#34D399",
        "accent-foreground": "#ffffff",
        muted: "#F3F4F6",
        "muted-foreground": "#6B7280",
        popover: "#FFFFFF",
        "popover-foreground": "#111827",
        card: "#FFFFFF",
        "card-foreground": "#111827",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
}

export default config
