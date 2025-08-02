import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Theme = "light" | "dark" | "system"

interface ThemeState {
  theme: Theme
  resolvedTheme: "light" | "dark"
  setTheme: (theme: Theme) => void
  initializeTheme: () => () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light", // Mudança: começar com light ao invés de system
      resolvedTheme: "light",

      setTheme: (theme: Theme) => {
        set({ theme })

        // Apply theme to document
        if (typeof window !== "undefined") {
          const root = document.documentElement
          root.classList.remove("light", "dark")

          let resolvedTheme: "light" | "dark"

          if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            resolvedTheme = systemTheme
          } else {
            resolvedTheme = theme
          }

          root.classList.add(resolvedTheme)
          set({ resolvedTheme })

          // Update meta theme-color
          const metaThemeColor = document.querySelector('meta[name="theme-color"]')
          if (metaThemeColor) {
            metaThemeColor.setAttribute("content", resolvedTheme === "dark" ? "#0f172a" : "#ffffff")
          }
        }
      },

      initializeTheme: () => {
        if (typeof window === "undefined") return () => {}

        const { theme, setTheme } = get()

        // Listen for system theme changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handleChange = () => {
          if (get().theme === "system") {
            setTheme("system")
          }
        }

        mediaQuery.addEventListener("change", handleChange)

        // Initialize theme
        setTheme(theme)

        return () => mediaQuery.removeEventListener("change", handleChange)
      },
    }),
    {
      name: "hellocli-theme",
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
)
