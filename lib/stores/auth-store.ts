import { create } from "zustand"
import { persist } from "zustand/middleware"

interface User {
  id: string
  email: string
  name?: string
  role: "ADMIN" | "SUPERADMIN" | "USER"
  companyId?: string
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  login: (user: User, token: string) => void
  logout: () => void
  checkAuth: () => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      token: null,

      login: (user: User, token: string) => {
        set({ isAuthenticated: true, user, token })
      },

      logout: () => {
        set({ isAuthenticated: false, user: null, token: null })
      },

      checkAuth: () => {
        return get().isAuthenticated && !!get().token
      },
    }),
    {
      name: "hellocli-auth",
      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          // Migração de versão 0 para 1
          return { ...persistedState, token: null }
        }
        return persistedState
      },
    },
  ),
)