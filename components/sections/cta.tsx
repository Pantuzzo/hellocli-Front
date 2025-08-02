"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "../animations/scroll-reveal"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para automatizar seu atendimento?</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de pequenos negócios que já estão convertendo mais clientes com o HelloCli
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <a href="/login">
                  Começar Grátis Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <a href="/login">Falar com Especialista</a>
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-white/70 mt-6 text-sm">
            Sem cartão de crédito • Configuração em 5 minutos • Suporte em português
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
