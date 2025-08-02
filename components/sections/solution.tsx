"use client"

import { MessageCircle, Zap, ArrowRight, Bot } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "../animations/scroll-reveal"
import { motion } from "framer-motion"

export function Solution() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">A solução perfeita para seu negócio</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              HelloCli automatiza seu atendimento inicial de forma inteligente e humanizada
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Atendimento Automático</h3>
                  <p className="text-muted-foreground">
                    Responde instantaneamente via site ou WhatsApp, capturando nome, telefone e interesse do cliente.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Respostas Inteligentes</h3>
                  <p className="text-muted-foreground">
                    FAQ personalizado com respostas rápidas baseadas no seu negócio e perguntas mais comuns.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Direcionamento Inteligente</h3>
                  <p className="text-muted-foreground">
                    Encaminha automaticamente para WhatsApp, agenda online ou canal mais adequado.
                  </p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.div
              className="bg-card rounded-2xl shadow-2xl p-8 border border-border"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-muted rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">HelloCli</span>
                  <Badge variant="secondary" className="text-xs">
                    Online
                  </Badge>
                </div>
                <motion.div
                  className="bg-card rounded-lg p-3 mb-2 border border-border"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-foreground">
                    Olá! 👋 Bem-vindo à Clínica Bella. Como posso ajudar você hoje?
                  </p>
                </motion.div>
                <motion.div
                  className="bg-primary text-primary-foreground rounded-lg p-3 ml-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-sm">Gostaria de agendar uma consulta</p>
                </motion.div>
                <motion.div
                  className="bg-card rounded-lg p-3 mt-2 border border-border"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <p className="text-sm text-foreground">
                    Perfeito! Para agendar sua consulta, preciso de algumas informações. Qual seu nome completo?
                  </p>
                </motion.div>
              </div>
              <div className="text-center text-sm text-muted-foreground">Exemplo de conversa automatizada</div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
