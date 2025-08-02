import { render, screen } from "@testing-library/react"
import { Hero } from "@/components/sections/hero"
import { vi } from "vitest"

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

// Mock scroll reveal
vi.mock("@/components/animations/scroll-reveal", () => ({
  ScrollReveal: ({ children }: any) => <div>{children}</div>,
}))

describe("Hero Component", () => {
  it("renders hero title", () => {
    render(<Hero />)

    expect(screen.getByText(/O chatbot inteligente que conversa com seus clientes por você/)).toBeInTheDocument()
  })

  it("renders hero description", () => {
    render(<Hero />)

    expect(screen.getByText(/Atendimento automático 24\/7 para pequenos negócios/)).toBeInTheDocument()
  })

  it("renders CTA buttons", () => {
    render(<Hero />)

    expect(screen.getByText("Começar Grátis Agora")).toBeInTheDocument()
    expect(screen.getByText("Ver Demo")).toBeInTheDocument()
  })

  it("renders feature badges", () => {
    render(<Hero />)

    expect(screen.getByText("Configuração em 5 minutos")).toBeInTheDocument()
    expect(screen.getByText("Sem cartão de crédito")).toBeInTheDocument()
    expect(screen.getByText("Suporte em português")).toBeInTheDocument()
  })

  it("renders new feature badge", () => {
    render(<Hero />)

    expect(screen.getByText("🚀 Novo: Integração com WhatsApp Business")).toBeInTheDocument()
  })
})
