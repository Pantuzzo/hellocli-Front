export interface User {
  id: string
  email: string
  name: string
  role: "SUPERADMIN" | "ADMIN" | "USER"
  companyId?: string
  createdAt: string
  updatedAt: string
}

export interface Company {
  id: string
  name: string
  domain: string
  logo?: string
  plan: "FREE" | "PRO" | "PREMIUM"
  createdAt: string
  updatedAt: string
}

export interface Conversation {
  id: string
  companyId: string
  customerName: string
  customerEmail: string
  customerPhone?: string
  status: "ACTIVE" | "CLOSED" | "PENDING"
  createdAt: string
  updatedAt: string
  messages: Message[]
}

export interface Message {
  id: string
  conversationId: string
  content: string
  sender: "USER" | "BOT" | "AGENT"
  createdAt: string
}

export interface ChatbotSettings {
  id: string
  companyId: string
  name: string
  personality: string
  prompt: string
  faqDocument?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface DashboardStats {
  totalConversations: number
  totalMessages: number
  activeConversations: number
  responseTime: number
  conversationsByDay: Array<{
    date: string
    count: number
  }>
}
