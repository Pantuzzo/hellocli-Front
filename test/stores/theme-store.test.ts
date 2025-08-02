import { useThemeStore } from "@/lib/stores/theme-store"
import { vi } from "vitest"

// Mock DOM methods
const mockClassList = {
  add: vi.fn(),
  remove: vi.fn(),
}

const mockQuerySelector = vi.fn()

Object.defineProperty(document, "documentElement", {
  value: {
    classList: mockClassList,
  },
  writable: true,
})

Object.defineProperty(document, "querySelector", {
  value: mockQuerySelector,
  writable: true,
})

describe("ThemeStore", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Reset store state
    useThemeStore.setState({
      theme: "system",
      resolvedTheme: "light",
    })
  })

  it("initializes with default values", () => {
    const { theme, resolvedTheme } = useThemeStore.getState()

    expect(theme).toBe("system")
    expect(resolvedTheme).toBe("light")
  })

  it("sets light theme correctly", () => {
    const { setTheme } = useThemeStore.getState()

    setTheme("light")

    const { theme, resolvedTheme } = useThemeStore.getState()
    expect(theme).toBe("light")
    expect(resolvedTheme).toBe("light")

    expect(mockClassList.remove).toHaveBeenCalledWith("light", "dark")
    expect(mockClassList.add).toHaveBeenCalledWith("light")
  })

  it("sets dark theme correctly", () => {
    const { setTheme } = useThemeStore.getState()

    setTheme("dark")

    const { theme, resolvedTheme } = useThemeStore.getState()
    expect(theme).toBe("dark")
    expect(resolvedTheme).toBe("dark")

    expect(mockClassList.remove).toHaveBeenCalledWith("light", "dark")
    expect(mockClassList.add).toHaveBeenCalledWith("dark")
  })

  it("handles system theme correctly", () => {
    // Mock system preference for dark mode
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: query === "(prefers-color-scheme: dark)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    const { setTheme } = useThemeStore.getState()

    setTheme("system")

    const { theme, resolvedTheme } = useThemeStore.getState()
    expect(theme).toBe("system")
    expect(resolvedTheme).toBe("dark") // Based on mocked system preference

    expect(mockClassList.add).toHaveBeenCalledWith("dark")
  })
})
