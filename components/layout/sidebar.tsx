"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  MessageSquare,
  Bot,
  Users,
  Building2,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  User,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/lib/stores/auth-store"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user } = useAuthStore()

  // Navegação baseada no role do usuário
  const getNavigation = () => {
    const baseNavigation = [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Conversas", href: "/conversations", icon: MessageSquare },
      { name: "Chatbot", href: "/chatbot", icon: Bot },
      { name: "Relatórios", href: "/reports", icon: BarChart3 },
    ]

    // Adicionar navegação específica para SUPERADMIN
    if (user?.role === "SUPERADMIN") {
      baseNavigation.splice(2, 0, { name: "Empresas", href: "/companies", icon: Building2 })
      baseNavigation.splice(3, 0, { name: "Usuários", href: "/users", icon: Users })
    } else if (user?.role === "ADMIN") {
      baseNavigation.splice(2, 0, { name: "Usuários", href: "/users", icon: Users })
    }

    baseNavigation.push({ name: "Configurações", href: "/settings", icon: Settings })

    return baseNavigation
  }

  const navigation = getNavigation()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/login")
  }

  const goToHome = () => {
    router.push("/")
  }

  const goToProfile = () => {
    router.push("/profile")
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <motion.aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-border transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={false}
        animate={{ x: isOpen ? 0 : -256 }}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-border">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="ml-2 text-xl font-bold text-foreground">HelloCli</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </motion.div>
                </Link>
              )
            })}
          </nav>

          {/* User info and actions */}
          <div className="p-4 border-t border-border space-y-2">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">{user?.name?.charAt(0) || "A"}</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-foreground">{user?.name || "Admin"}</p>
                <p className="text-xs text-muted-foreground">{user?.role || "ADMIN"}</p>
              </div>
            </div>

            <Button variant="ghost" size="sm" className="w-full justify-start" onClick={goToProfile}>
              <User className="w-4 h-4 mr-2" />
              Meu Perfil
            </Button>

            <Button variant="ghost" size="sm" className="w-full justify-start" onClick={goToHome}>
              <Home className="w-4 h-4 mr-2" />
              Página Inicial
            </Button>

            <Button variant="ghost" size="sm" className="w-full justify-start" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}
