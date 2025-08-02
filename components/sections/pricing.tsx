"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { ScrollReveal } from "../animations/scroll-reveal"
import { StaggerContainer, StaggerItem } from "../animations/stagger-container"
import { motion } from "framer-motion"

export function Pricing() {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      description: "Para começar",
      features: ["50 conversas/mês", "FAQ básico", "Integração site", "Suporte por email"],
      buttonText: "Começar Grátis",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "R$ 29",
      description: "por mês",
      features: [
        "500 conversas/mês",
        "FAQ personalizado",
        "WhatsApp Business",
        "Dashboard completo",
        "Suporte prioritário",
      ],
      buttonText: "Começar Teste Grátis",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Premium",
      price: "R$ 59",
      description: "por mês",
      features: [
        "Conversas ilimitadas",
        "Múltiplos atendentes",
        "API personalizada",
        "Relatórios avançados",
        "Suporte telefônico",
      ],
      buttonText: "Falar com Vendas",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ]

  return (
    <section id="precos" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preços justos para pequenos negócios
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comece grátis e escale conforme seu negócio cresce
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-full"
              >
                <Card
                  className={`border-2 hover:shadow-lg transition-all duration-300 h-full relative bg-card ${
                    plan.popular ? "border-primary shadow-lg" : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">Mais Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                    <div className={`text-4xl font-bold mt-4 ${plan.popular ? "text-primary" : "text-foreground"}`}>
                      {plan.price}
                    </div>
                    <CardDescription className="text-lg text-muted-foreground">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
                      <Button className="w-full" variant={plan.buttonVariant} asChild>
                        <a href="/login">{plan.buttonText}</a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
