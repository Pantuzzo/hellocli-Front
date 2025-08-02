import { render, screen } from "@testing-library/react"
import { Pricing } from "@/components/sections/pricing"
import { vi } from "vitest"

// Mock dependencies
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

vi.mock("@/components/animations/scroll-reveal", () => ({
  ScrollReveal: ({ children }: any) => <div>{children}</div>,
}))

vi.mock("@/components/animations/stagger-container", () => ({
  StaggerContainer: ({ children }: any) => <div>{children}</div>,
  StaggerItem: ({ children }: any) => <div>{children}</div>,
}))

describe("Pricing Component", () => {
  it("renders pricing title", () => {
    render(<Pricing />)

    expect(screen.getByText("Preços justos para pequenos negócios")).toBeInTheDocument()
  })

  it("renders all pricing plans", () => {
    render(<Pricing />)

    expect(screen.getByText("Gratuito")).toBeInTheDocument()
    expect(screen.getByText("Pro")).toBeInTheDocument()
    expect(screen.getByText("Premium")).toBeInTheDocument()
  })

  it("renders pricing values", () => {
    render(<Pricing />)

    expect(screen.getByText("R$ 0")).toBeInTheDocument()
    expect(screen.getByText("R$ 29")).toBeInTheDocument()
    expect(screen.getByText("R$ 59")).toBeInTheDocument()
  })

  it("shows popular badge on Pro plan", () => {
    render(<Pricing />)

    expect(screen.getByText("Mais Popular")).toBeInTheDocument()
  })

  it("renders plan features", () => {
    render(<Pricing />)

    expect(screen.getByText("50 conversas/mês")).toBeInTheDocument()
    expect(screen.getByText("500 conversas/mês")).toBeInTheDocument()
    expect(screen.getByText("Conversas ilimitadas")).toBeInTheDocument()
  })

  it("renders CTA buttons", () => {
    render(<Pricing />)

    expect(screen.getByText("Começar Grátis")).toBeInTheDocument()
    expect(screen.getByText("Começar Teste Grátis")).toBeInTheDocument()
    expect(screen.getByText("Falar com Vendas")).toBeInTheDocument()
  })
})
