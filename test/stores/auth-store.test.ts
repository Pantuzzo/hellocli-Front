import { useAuthStore } from "@/lib/stores/auth-store"

describe("AuthStore", () => {
  beforeEach(() => {
    // Reset store state
    useAuthStore.setState({
      isAuthenticated: false,
      user: null,
    })
  })

  it("initializes with default values", () => {
    const { isAuthenticated, user } = useAuthStore.getState()

    expect(isAuthenticated).toBe(false)
    expect(user).toBe(null)
  })

  it("logs in user correctly", () => {
    const { login } = useAuthStore.getState()
    const mockUser = {
      id: "1",
      email: "test@example.com",
      name: "Test User",
      role: "ADMIN" as const,
    }

    login(mockUser)

    const { isAuthenticated, user } = useAuthStore.getState()
    expect(isAuthenticated).toBe(true)
    expect(user).toEqual(mockUser)
  })

  it("logs out user correctly", () => {
    const { login, logout } = useAuthStore.getState()
    const mockUser = {
      id: "1",
      email: "test@example.com",
      name: "Test User",
      role: "ADMIN" as const,
    }

    // First login
    login(mockUser)
    expect(useAuthStore.getState().isAuthenticated).toBe(true)

    // Then logout
    logout()

    const { isAuthenticated, user } = useAuthStore.getState()
    expect(isAuthenticated).toBe(false)
    expect(user).toBe(null)
  })

  it("checks auth status correctly", () => {
    const { checkAuth, login } = useAuthStore.getState()

    // Initially not authenticated
    expect(checkAuth()).toBe(false)

    // After login
    login({
      id: "1",
      email: "test@example.com",
      name: "Test User",
      role: "ADMIN",
    })

    expect(checkAuth()).toBe(true)
  })
})
