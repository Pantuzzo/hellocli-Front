"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Calendar, BarChart3, Shield, Zap, Headphones } from "lucide-react"
import { ScrollReveal } from "../animations/scroll-reveal"
import { StaggerContainer, StaggerItem } from "../animations/stagger-container"
import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Integração WhatsApp",
      description: "Conecte diretamente com WhatsApp Business para continuar conversas",
      color: "text-primary",
    },
    {
      icon: Calendar,
      title: "Agendamento Online",
      description: "Direciona clientes para sua agenda online automaticamente",
      color: "text-accent",
    },
    {
      icon: BarChart3,
      title: "Dashboard Simples",
      description: "Acompanhe métricas e configure seu atendimento facilmente",
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Dados Seguros",
      description: "Todos os dados dos clientes protegidos com criptografia",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Configuração Rápida",
      description: "Configure em menos de 5 minutos, sem conhecimento técnico",
      color: "text-accent",
    },
    {
      icon: Headphones,
      title: "Suporte Brasileiro",
      description: "Atendimento em português com equipe especializada",
      color: "text-secondary",
    },
  ]

  return (
    <section id="funcionalidades" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Funcionalidades que fazem a diferença
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para automatizar seu atendimento
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full bg-card border-border">
                  <CardHeader>
                    <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
