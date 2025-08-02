import { describe, it, expect } from "vitest"

// Utility functions to test
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date)
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

describe("Format Utilities", () => {
  describe("formatCurrency", () => {
    it("formats currency correctly", () => {
      expect(formatCurrency(29)).toBe("R$ 29,00")
      expect(formatCurrency(59.99)).toBe("R$ 59,99")
      expect(formatCurrency(0)).toBe("R$ 0,00")
    })
  })

  describe("formatDate", () => {
    it("formats date correctly", () => {
      const date = new Date("2024-01-15")
      expect(formatDate(date)).toBe("15/01/2024")
    })
  })

  describe("formatPhone", () => {
    it("formats phone number correctly", () => {
      expect(formatPhone("11999887766")).toBe("(11) 99988-7766")
      expect(formatPhone("(11) 99988-7766")).toBe("(11) 99988-7766")
      expect(formatPhone("invalid")).toBe("invalid")
    })
  })
})
