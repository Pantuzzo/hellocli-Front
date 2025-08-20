import { setAuthCookie } from "@/lib/auth"
import { useMutation } from "@tanstack/react-query"
import { api } from "../../../lib/api"
import { apiRoutes } from "../../../lib/apiRoutes"
import { useAuthStore } from "../../../lib/stores/auth-store"

const routes = apiRoutes("")

interface LoginPayload {
  email: string
  password: string
}

interface LoginResponse {
  user: {
    id: string
    name?: string
    email: string
    role: "admin" | "superadmin" | "user"
    companyId?: string
  }
  access_token: string
}

export function useLogin() {
  const { login } = useAuthStore()

  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: (data) => api.post(routes.auth.login, data),
    onSuccess: (data) => {
      login(data.user, data.access_token)
      setAuthCookie(data.access_token)
    },
    onError: (error) => {
      console.error(error.message || "Erro ao fazer login")
    }
  })
}
