"use client"

import { useThemeStore } from "@/lib/stores/theme-store"
import { useAuthStore } from "@/lib/stores/auth-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DebugPage() {
  const { theme, resolvedTheme, setTheme } = useThemeStore()
  const { isAuthenticated, user } = useAuthStore()

  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">🔧 Debug Page</h1>

        <Card>
          <CardHeader>
            <CardTitle>Theme Debug</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p>
                <strong>Current Theme:</strong> {theme}
              </p>
              <p>
                <strong>Resolved Theme:</strong> {resolvedTheme}
              </p>
              <p>
                <strong>HTML Class:</strong>{" "}
                {typeof window !== "undefined" ? document.documentElement.className : "N/A"}
              </p>
            </div>

            <div className="flex gap-2">
              <Button onClick={() => setTheme("light")} variant={theme === "light" ? "default" : "outline"}>
                Light
              </Button>
              <Button onClick={() => setTheme("dark")} variant={theme === "dark" ? "default" : "outline"}>
                Dark
              </Button>
              <Button onClick={() => setTheme("system")} variant={theme === "system" ? "default" : "outline"}>
                System
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Auth Debug</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p>
                <strong>Authenticated:</strong> {isAuthenticated ? "Yes" : "No"}
              </p>
              <p>
                <strong>User:</strong> {user ? JSON.stringify(user, null, 2) : "None"}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CSS Variables Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary text-primary-foreground rounded">Primary Background</div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded">Secondary Background</div>
            <div className="p-4 bg-muted text-muted-foreground rounded">Muted Background</div>
            <div className="p-4 bg-accent text-accent-foreground rounded">Accent Background</div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button asChild>
            <a href="/">← Voltar para Home</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/login">Login</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/dashboard">Dashboard</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
