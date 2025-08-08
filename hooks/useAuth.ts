import { useAuthStore } from "@/lib/stores/auth-store"

export function useAuth() {
  const { isAuthenticated, user, token, checkAuth } = useAuthStore()
  
  return {
    isAuthenticated,
    user,
    token,
    checkAuth,
    isAdmin: user?.role === "ADMIN" || user?.role === "SUPERADMIN"
  }
}