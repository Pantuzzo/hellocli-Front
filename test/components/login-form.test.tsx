import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LoginPage from "@/app/login/page"
import { useAuthStore } from "@/lib/stores/auth-store"
import { vi } from "vitest"

// Mock the auth store
vi.mock("@/lib/stores/auth-store")

const mockUseAuthStore = useAuthStore as any

describe("LoginPage", () => {
  const mockLogin = vi.fn()

  beforeEach(() => {
    mockUseAuthStore.mockReturnValue({
      isAuthenticated: false,
      login: mockLogin,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("renders login form", () => {
    render(<LoginPage />)

    expect(screen.getByTestId("login-form")).toBeInTheDocument()
    expect(screen.getByTestId("email-input")).toBeInTheDocument()
    expect(screen.getByTestId("password-input")).toBeInTheDocument()
    expect(screen.getByTestId("login-button")).toBeInTheDocument()
  })

  it("toggles password visibility", async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    const passwordInput = screen.getByTestId("password-input")
    const toggleButton = screen.getByTestId("toggle-password")

    expect(passwordInput).toHaveAttribute("type", "password")

    await user.click(toggleButton)
    expect(passwordInput).toHaveAttribute("type", "text")

    await user.click(toggleButton)
    expect(passwordInput).toHaveAttribute("type", "password")
  })

  it("shows error message for invalid credentials", async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    const emailInput = screen.getByTestId("email-input")
    const passwordInput = screen.getByTestId("password-input")
    const loginButton = screen.getByTestId("login-button")

    await user.type(emailInput, "wrong@email.com")
    await user.type(passwordInput, "wrongpassword")
    await user.click(loginButton)

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toBeInTheDocument()
      expect(screen.getByText("Email ou senha incorretos")).toBeInTheDocument()
    })
  })

  it("calls login function with correct credentials", async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    const emailInput = screen.getByTestId("email-input")
    const passwordInput = screen.getByTestId("password-input")
    const loginButton = screen.getByTestId("login-button")

    await user.type(emailInput, "admin@hellocli.com")
    await user.type(passwordInput, "123456")
    await user.click(loginButton)

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        id: "1",
        email: "admin@hellocli.com",
        name: "Admin",
        role: "ADMIN",
      })
    })
  })

  it("shows loading state during login", async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    const emailInput = screen.getByTestId("email-input")
    const passwordInput = screen.getByTestId("password-input")
    const loginButton = screen.getByTestId("login-button")

    await user.type(emailInput, "admin@hellocli.com")
    await user.type(passwordInput, "123456")
    await user.click(loginButton)

    expect(screen.getByText("Entrando...")).toBeInTheDocument()
    expect(loginButton).toBeDisabled()
  })
})
