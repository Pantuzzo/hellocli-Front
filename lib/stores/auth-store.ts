import { create } from "zustand"
import { persist } from "zustand/middleware"

interface User {
  id: string
  email: string
  name: string
  role: "ADMIN" | "SUPERADMIN" | "USER"
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  login: (user: User) => void
  logout: () => void
  checkAuth: () => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,

      login: (user: User) => {
        set({ isAuthenticated: true, user })
      },

      logout: () => {
        set({ isAuthenticated: false, user: null })
      },

      checkAuth: () => {
        const { isAuthenticated } = get()
        return isAuthenticated
      },
    }),
    {
      name: "hellocli-auth",
    },
  ),
)
