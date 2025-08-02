"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useThemeStore } from "@/lib/stores/theme-store"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const initializeTheme = useThemeStore((state) => state.initializeTheme)

  useEffect(() => {
    setMounted(true)
    const cleanup = initializeTheme()
    return cleanup
  }, [initializeTheme])

  // Renderiza com tema padrão até montar
  if (!mounted) {
    return <div className="min-h-screen bg-white text-gray-900">{children}</div>
  }

  return <>{children}</>
}
