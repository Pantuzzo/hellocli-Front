import { render, screen } from "@testing-library/react"
import DashboardPage from "@/app/dashboard/page"
import { vi } from "vitest"

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe("DashboardPage", () => {
  it("renders dashboard title", () => {
    render(<DashboardPage />)

    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByText("Visão geral do seu atendimento automatizado")).toBeInTheDocument()
  })

  it("renders stats cards", () => {
    render(<DashboardPage />)

    expect(screen.getByText("Total de Conversas")).toBeInTheDocument()
    expect(screen.getByText("Clientes Ativos")).toBeInTheDocument()
    expect(screen.getByText("Taxa de Conversão")).toBeInTheDocument()
    expect(screen.getByText("Tempo Médio")).toBeInTheDocument()
  })

  it("renders quick actions", () => {
    render(<DashboardPage />)

    expect(screen.getByText("Ações Rápidas")).toBeInTheDocument()
    expect(screen.getByText("Configurar Chatbot")).toBeInTheDocument()
    expect(screen.getByText("Ver Conversas")).toBeInTheDocument()
    expect(screen.getByText("Configurações")).toBeInTheDocument()
  })

  it("renders recent activity", () => {
    render(<DashboardPage />)

    expect(screen.getByText("Atividade Recente")).toBeInTheDocument()
    expect(screen.getByText("Nova conversa iniciada")).toBeInTheDocument()
    expect(screen.getByText("Agendamento realizado")).toBeInTheDocument()
  })

  it("displays correct stats values", () => {
    render(<DashboardPage />)

    expect(screen.getByText("1,234")).toBeInTheDocument()
    expect(screen.getByText("856")).toBeInTheDocument()
    expect(screen.getByText("68%")).toBeInTheDocument()
    expect(screen.getByText("2.3min")).toBeInTheDocument()
  })
})
