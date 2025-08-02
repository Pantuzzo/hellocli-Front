"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, TrendingUp, Users, Shield, Headphones } from "lucide-react"
import { ScrollReveal } from "../animations/scroll-reveal"
import { StaggerContainer, StaggerItem } from "../animations/stagger-container"
import { motion } from "framer-motion"

export function SocialProof() {
  const testimonials = [
    {
      name: "Dr. Maria Fernanda",
      company: "Clínica Bella Estética",
      role: "Proprietária",
      avatar: "MF",
      content:
        "Aumentamos 40% os agendamentos em 2 meses. O HelloCli captura leads que antes perdíamos fora do horário comercial. Melhor investimento que fiz!",
      rating: 5,
      color: "bg-pink-500",
      metric: "+40% agendamentos",
    },
    {
      name: "João Carlos",
      company: "Barbearia Moderna",
      role: "Proprietário",
      avatar: "JC",
      content:
        "Configurei em 10 minutos! Agora meus clientes agendam pelo WhatsApp automaticamente. Economizo 3 horas por dia que gastava respondendo mensagens.",
      rating: 5,
      color: "bg-blue-500",
      metric: "3h/dia economizadas",
    },
    {
      name: "Ana Paula",
      company: "Consultório Odontológico",
      role: "Dentista",
      avatar: "AP",
      content:
        "O suporte é excepcional! Sempre que preciso, eles me ajudam em português. Muito melhor que as ferramentas gringas que testei antes.",
      rating: 5,
      color: "bg-green-500",
      metric: "Suporte 5 estrelas",
    },
    {
      name: "Ricardo Silva",
      company: "Advocacia Silva & Associados",
      role: "Advogado",
      avatar: "RS",
      content:
        "Impressionante como o bot entende o contexto e responde de forma natural. Meus clientes nem percebem que é automático no primeiro contato.",
      rating: 5,
      color: "bg-purple-500",
      metric: "100% automático",
    },
  ]

  const companies = [
    { name: "Clínica Bella", logo: "CB" },
    { name: "Barbearia Moderna", logo: "BM" },
    { name: "Odonto Care", logo: "OC" },
    { name: "Advocacia Silva", logo: "AS" },
    { name: "Estética Avançada", logo: "EA" },
    { name: "Fisio Plus", logo: "FP" },
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Pequenos negócios", color: "text-blue-500" },
    { icon: TrendingUp, value: "68%", label: "Taxa de conversão", color: "text-green-500" },
    { icon: Shield, value: "99.9%", label: "Uptime garantido", color: "text-purple-500" },
    { icon: Headphones, value: "< 2h", label: "Tempo de resposta", color: "text-orange-500" },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400">
              ⭐ Mais de 500 pequenos negócios confiam na HelloCli
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Resultados reais de quem usa</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja como outros pequenos negócios estão crescendo com a HelloCli
            </p>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <ScrollReveal delay={0.3}>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card/80 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold`}
                        >
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                      >
                        {testimonial.metric}
                      </Badge>
                    </div>

                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="w-6 h-6 text-muted-foreground/30 absolute -top-2 -left-1" />
                      <p className="text-muted-foreground italic pl-4">"{testimonial.content}"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Companies */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">Empresas que confiam na HelloCli:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-muted/30 rounded-lg px-4 py-2"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-xs font-semibold text-primary">
                    {company.logo}
                  </div>
                  <span className="text-sm font-medium text-foreground">{company.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
