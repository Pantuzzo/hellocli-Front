import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "HelloCli - Seu Atendente Virtual Inteligente para WhatsApp e Web",
  description:
    "Chatbot inteligente com IA generativa para pequenos negócios. Atendimento automático 24/7, integração WhatsApp, configuração em 5 minutos. Teste grátis!",
  keywords: "chatbot, whatsapp business, atendimento automatico, ia generativa, pequenos negocios, bot inteligente",
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}