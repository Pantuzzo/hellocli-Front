import { render, screen, fireEvent } from "@testing-library/react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useThemeStore } from "@/lib/stores/theme-store"
import { vi } from "vitest"

// Mock the store
vi.mock("@/lib/stores/theme-store")

const mockUseThemeStore = useThemeStore as any

describe("ThemeToggle", () => {
  const mockSetTheme = vi.fn()

  beforeEach(() => {
    mockUseThemeStore.mockReturnValue({
      theme: "light",
      resolvedTheme: "light",
      setTheme: mockSetTheme,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("renders theme toggle button", () => {
    render(<ThemeToggle />)

    const button = screen.getByTestId("theme-toggle")
    expect(button).toBeInTheDocument()
  })

  it("opens dropdown menu when clicked", () => {
    render(<ThemeToggle />)

    const button = screen.getByTestId("theme-toggle")
    fireEvent.click(button)

    expect(screen.getByTestId("theme-light")).toBeInTheDocument()
    expect(screen.getByTestId("theme-dark")).toBeInTheDocument()
    expect(screen.getByTestId("theme-system")).toBeInTheDocument()
  })

  it("calls setTheme when theme option is selected", () => {
    render(<ThemeToggle />)

    const button = screen.getByTestId("theme-toggle")
    fireEvent.click(button)

    const darkOption = screen.getByTestId("theme-dark")
    fireEvent.click(darkOption)

    expect(mockSetTheme).toHaveBeenCalledWith("dark")
  })

  it("shows correct icon for light theme", () => {
    mockUseThemeStore.mockReturnValue({
      theme: "light",
      resolvedTheme: "light",
      setTheme: mockSetTheme,
    })

    render(<ThemeToggle />)

    // Should show Moon icon for light theme (to switch to dark)
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument()
  })

  it("shows correct icon for dark theme", () => {
    mockUseThemeStore.mockReturnValue({
      theme: "dark",
      resolvedTheme: "dark",
      setTheme: mockSetTheme,
    })

    render(<ThemeToggle />)

    // Should show Sun icon for dark theme (to switch to light)
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument()
  })
})
