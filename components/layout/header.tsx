"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useAuthStore } from "@/lib/stores/auth-store"
import { motion } from "framer-motion"
import { Bell, Bot, Home, LogOut, Search, User } from "lucide-react"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const goToHome = () => {
    router.push("/")
  }

  const goToProfile = () => {
    router.push("/profile")
  }

  return (
    <motion.header
      className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50 px-6 py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="flex gap-2 justify-between">
        <motion.div
          className="flex items-center space-x-3 cursor-pointer "
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => router.push("/dashboard")}
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">HelloCli</span>
        </motion.div>
        
        <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar conversas..."
              className="pl-10 w-80 bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell className="w-5 h-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 hover:bg-accent" data-testid="user-menu">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-foreground">{user?.name?.charAt(0) || "A"}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{user?.name || "Admin"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-background border-border">
              <DropdownMenuLabel className="text-foreground">Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem onClick={goToHome} className="text-foreground hover:bg-accent cursor-pointer">
                <Home className="mr-2 h-4 w-4" />
                <span>Página Inicial</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={goToProfile} className="text-foreground hover:bg-accent cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 cursor-pointer"
                data-testid="logout-button"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  )
}
