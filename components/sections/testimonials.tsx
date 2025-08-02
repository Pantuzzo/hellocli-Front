"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { ScrollReveal } from "../animations/scroll-reveal"
import { StaggerContainer, StaggerItem } from "../animations/stagger-container"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Clínica Bella Estética",
      avatar: "M",
      content:
        "Aumentamos em 40% o número de agendamentos desde que implementamos o HelloCli. Os clientes adoram a rapidez!",
      color: "bg-primary",
    },
    {
      name: "João Santos",
      company: "Barbearia do João",
      avatar: "J",
      content:
        "Configuração super fácil! Em 10 minutos já estava funcionando. Economizamos muito tempo no atendimento.",
      color: "bg-accent",
    },
    {
      name: "Ana Costa",
      company: "Consultório Odontológico",
      avatar: "A",
      content: "O preço é justo e o suporte é excelente. Recomendo para qualquer pequeno negócio que quer crescer.",
      color: "bg-secondary",
    },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos clientes adoram o HelloCli</h2>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
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
