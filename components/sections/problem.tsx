"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, BarChart3 } from "lucide-react"
import { ScrollReveal } from "../animations/scroll-reveal"
import { StaggerContainer, StaggerItem } from "../animations/stagger-container"

export function Problem() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Você está perdendo clientes todos os dias
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pequenos negócios enfrentam desafios únicos no atendimento ao cliente
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          <StaggerItem>
            <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Clock className="w-12 h-12 text-red-500 mb-4" />
                <CardTitle className="text-red-700 dark:text-red-400">Resposta Lenta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 dark:text-red-300">
                  Clientes esperam resposta imediata. Demora = cliente perdido para a concorrência.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-orange-700 dark:text-orange-400">Falta de Equipe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600 dark:text-orange-300">
                  Não há recursos para contratar atendentes ou ficar online 24/7.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-yellow-600 mb-4" />
                <CardTitle className="text-yellow-700 dark:text-yellow-400">Ferramentas Caras</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-600 dark:text-yellow-300">
                  Soluções como Intercom custam R$300+/mês - inviável para pequenos negócios.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
