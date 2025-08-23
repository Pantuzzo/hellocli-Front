"use client"

import { CTA } from "@/components/sections/cta"
import { Demo } from "@/components/sections/demo"
import { FAQ } from "@/components/sections/faq"
import { Features } from "@/components/sections/features"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Pricing } from "@/components/sections/pricing"
import { Problem } from "@/components/sections/problem"
import { SocialProof } from "@/components/sections/social-proof"
import { Solution } from "@/components/sections/solution"
import { ChatWidget } from "hello-cli-chatbot-widget"
import 'hello-cli-chatbot-widget/dist/styles.css';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Demo />
      <Problem />
      <Solution />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <ChatWidget
        position="left"
        title="Assistente Virtual"
        welcomeMessage="Olá! Bem-vindo ao nosso site. Como posso ajudá-lo hoje?"
        primaryColor="#3b82f6"
        onSendMessage={(message: string) => {
          console.log("Mensagem enviada:", message)
        }}
        onToggle={(isOpen: boolean) => {
          console.log("Chat", isOpen ? "aberto" : "fechado")
        }}
      />
    </div>
  )
}
