"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Play, Zap, MessageSquare, Shield } from "lucide-react"
import { ScrollReveal } from "../animations/scroll-reveal"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />

      <div className="container mx-auto text-center max-w-6xl relative">
        <ScrollReveal delay={0.1}>
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
            🚀 Novo: IA Generativa + WhatsApp Business
          </Badge>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Seu{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Atendente Virtual
            </span>{" "}
            que nunca dorme
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-foreground">Por que HelloCli?</strong> Enquanto Manychat, Tawk.to e Intercom custam
            R$300+/mês, oferecemos IA generativa, setup em 5 minutos e suporte brasileiro por uma fração do preço.
          </p>
        </ScrollReveal>

        {/* Diferenciais únicos */}
        <ScrollReveal delay={0.4}>
          <div className="grid md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            {[
              { icon: Zap, text: "IA Generativa", desc: "Respostas humanizadas" },
              { icon: MessageSquare, text: "WhatsApp Nativo", desc: "Integração real" },
              { icon: CheckCircle, text: "5 Minutos", desc: "Setup completo" },
              { icon: Shield, text: "Suporte BR", desc: "Horário comercial" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:bg-card/80 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground text-sm">{item.text}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
                <a href="/login">
                  <Zap className="mr-2 w-5 h-5" />
                  Começar Grátis Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm"
                onClick={() => {
                  document.getElementById("demo")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }}
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Como Funciona
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground flex-wrap gap-4">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Sem cartão de crédito
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Configuração em 5 minutos
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Suporte em português
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Dados 100% seguros
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
