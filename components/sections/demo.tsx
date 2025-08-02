"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, User, MessageSquare, Calendar, ArrowRight, Play, Pause, RotateCcw } from "lucide-react"
import { ScrollReveal } from "../animations/scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export function Demo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [displayedMessage, setDisplayedMessage] = useState("")
  const [showTypingIndicator, setShowTypingIndicator] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const chatSteps = [
    {
      type: "bot",
      message: "Olá! 👋 Bem-vindo à Clínica Bella Estética. Como posso ajudar você hoje?",
      time: "14:32",
      delay: 1000,
    },
    {
      type: "user",
      message: "Oi! Gostaria de agendar uma consulta para harmonização facial",
      time: "14:33",
      delay: 2500,
    },
    {
      type: "bot",
      message:
        "Perfeito! A harmonização facial é uma das nossas especialidades. Para agendar, preciso de algumas informações. Qual seu nome completo?",
      time: "14:33",
      delay: 3000,
    },
    {
      type: "user",
      message: "Maria Silva",
      time: "14:34",
      delay: 1500,
    },
    {
      type: "bot",
      message: "Prazer, Maria! 😊 Qual seu telefone para contato?",
      time: "14:34",
      delay: 2000,
    },
    {
      type: "user",
      message: "(11) 99999-8888",
      time: "14:35",
      delay: 1800,
    },
    {
      type: "bot",
      message:
        "Ótimo! Vou te direcionar para nossa agenda online. Você também pode falar diretamente conosco no WhatsApp. Prefere qual opção?",
      time: "14:35",
      delay: 3500,
      actions: ["📅 Agenda Online", "📱 WhatsApp", "📞 Ligar Agora"],
    },
  ]

  // Função para scroll automático
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  // Função para simular digitação - NOVA LÓGICA
  const typeMessage = (message: string, callback: () => void) => {
    console.log("🎬 Iniciando typeMessage")

    setIsTyping(true)
    setDisplayedMessage("")
    setShowTypingIndicator(true) // Mostrar bolinhas

    console.log("✅ Bolinhas mostradas")

    // Scroll quando começar a digitar
    setTimeout(scrollToBottom, 100)

    // ETAPA 1: Mostrar bolinhas por 3 segundos
    setTimeout(() => {
      console.log("⏰ 3 segundos passaram, removendo bolinhas e iniciando digitação")

      // Remove as bolinhas AGORA
      setShowTypingIndicator(false)

      // ETAPA 2: Começar a digitar IMEDIATAMENTE após remover bolinhas
      let i = 0
      const typingInterval = setInterval(() => {
        if (i < message.length) {
          setDisplayedMessage(message.slice(0, i + 1))
          i++
          scrollToBottom()
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
          console.log("✅ Digitação finalizada")
          setTimeout(() => {
            scrollToBottom()
            callback()
          }, 300)
        }
      }, 40)
    }, 3000) // 3 segundos de bolinhas
  }

  // Auto-play da conversa
  useEffect(() => {
    if (!isPlaying) return

    const timer = setTimeout(() => {
      if (currentStep < chatSteps.length - 1) {
        const nextStep = chatSteps[currentStep + 1]

        if (nextStep.type === "bot") {
          // Para mensagens do bot, simular digitação
          typeMessage(nextStep.message, () => {
            setCurrentStep((prev) => prev + 1)
          })
        } else {
          // Para mensagens do usuário, aparecer diretamente
          setCurrentStep((prev) => prev + 1)
          // Scroll para mensagens do usuário
          setTimeout(scrollToBottom, 100)
        }
      } else {
        setIsPlaying(false)
      }
    }, chatSteps[currentStep]?.delay || 2000)

    return () => clearTimeout(timer)
  }, [currentStep, isPlaying])

  // Scroll quando mudar o step
  useEffect(() => {
    setTimeout(scrollToBottom, 100)
  }, [currentStep])

  const startDemo = () => {
    setCurrentStep(0)
    setIsPlaying(true)
    setDisplayedMessage("")
    setShowTypingIndicator(false)
    setTimeout(scrollToBottom, 100)
  }

  const pauseDemo = () => {
    setIsPlaying(false)
    setIsTyping(false)
    setShowTypingIndicator(false)
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setIsPlaying(false)
    setIsTyping(false)
    setDisplayedMessage("")
    setShowTypingIndicator(false)
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = 0
      }
    }, 100)
  }

  // Componente de indicador de digitação (bolinhas embaixo)
  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
      className="flex justify-start mb-4"
    >
      <div className="bg-card border border-border rounded-2xl px-4 py-3 mr-4 max-w-xs">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <motion.div
              className="w-2 h-2 bg-muted-foreground/60 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-2 h-2 bg-muted-foreground/60 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.2,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-2 h-2 bg-muted-foreground/60 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.4,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="demo" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">🎬 Chat Ao Vivo</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Veja a HelloCli em ação</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simulação realística de uma conversa de agendamento. Assista como capturamos leads automaticamente.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chat Simulation */}
          <ScrollReveal direction="left">
            <Card className="bg-card border-border shadow-2xl overflow-hidden">
              <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">HelloCli Assistant</h3>
                    <p className="text-xs opacity-90">
                      {showTypingIndicator || isTyping ? "digitando..." : isPlaying ? "online" : "aguardando"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.div
                    className={`w-2 h-2 rounded-full ${isPlaying ? "bg-green-400" : "bg-yellow-400"}`}
                    animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <Badge
                    variant="secondary"
                    className={isPlaying ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}
                  >
                    {isPlaying ? "Ao vivo" : "Pausado"}
                  </Badge>
                </div>
              </div>

              <CardContent
                ref={chatContainerRef}
                className="p-0 h-96 overflow-y-auto bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 scroll-smooth"
                style={{ scrollBehavior: "smooth" }}
              >
                <div className="p-4 space-y-4 min-h-full">
                  <AnimatePresence>
                    {chatSteps.slice(0, currentStep + 1).map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        className={`flex ${step.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className="max-w-xs">
                          <motion.div
                            className={`rounded-2xl px-4 py-3 ${
                              step.type === "user"
                                ? "bg-primary text-primary-foreground ml-4 rounded-br-md"
                                : "bg-card border border-border mr-4 rounded-bl-md shadow-sm"
                            }`}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <p className="text-sm leading-relaxed">
                              {step.type === "bot" && index === currentStep && isTyping
                                ? displayedMessage
                                : step.message}
                              {step.type === "bot" && index === currentStep && isTyping && (
                                <motion.span
                                  className="inline-block w-0.5 h-4 bg-current ml-1"
                                  animate={{ opacity: [1, 0] }}
                                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                                />
                              )}
                            </p>
                            {step.actions && index === currentStep && !isTyping && !showTypingIndicator && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-3 space-y-2"
                              >
                                {step.actions.map((action, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                  >
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="w-full text-xs bg-background/50 hover:bg-background/80 transition-all"
                                    >
                                      {action}
                                    </Button>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </motion.div>
                          <p className="text-xs text-muted-foreground mt-1 px-2">{step.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Indicador de digitação com bolinhas embaixo */}
                  <AnimatePresence>{showTypingIndicator && <TypingIndicator />}</AnimatePresence>

                  {/* Espaço extra para garantir scroll */}
                  <div className="h-4" />
                </div>
              </CardContent>

              <div className="p-4 border-t border-border bg-muted/50">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {!isPlaying ? (
                      <Button size="sm" onClick={startDemo} className="bg-green-600 hover:bg-green-700">
                        <Play className="w-4 h-4 mr-2" />
                        {currentStep === 0 ? "Iniciar Demo" : "Continuar"}
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" onClick={pauseDemo}>
                        <Pause className="w-4 h-4 mr-2" />
                        Pausar
                      </Button>
                    )}
                    <Button size="sm" variant="ghost" onClick={resetDemo}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reiniciar
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {currentStep + 1} / {chatSteps.length}
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Dashboard Preview */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">Dashboard HelloCli</h3>
                    <Badge variant="secondary">Tempo Real</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div
                      className="bg-muted/50 rounded-lg p-4"
                      animate={isPlaying ? { scale: [1, 1.02, 1] } : {}}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <MessageSquare className="w-8 h-8 text-blue-500 mb-2" />
                      <p className="text-2xl font-bold text-foreground">{127 + Math.floor(currentStep * 0.5)}</p>
                      <p className="text-sm text-muted-foreground">Conversas hoje</p>
                    </motion.div>
                    <motion.div
                      className="bg-muted/50 rounded-lg p-4"
                      animate={currentStep >= 6 ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 1 }}
                    >
                      <Calendar className="w-8 h-8 text-green-500 mb-2" />
                      <p className="text-2xl font-bold text-foreground">{23 + (currentStep >= 6 ? 1 : 0)}</p>
                      <p className="text-sm text-muted-foreground">Agendamentos</p>
                    </motion.div>
                  </div>

                  <div className="space-y-3">
                    <AnimatePresence>
                      {currentStep >= 3 && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Maria Silva</span>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              currentStep >= 6
                                ? "bg-green-100 text-green-700 border-green-200"
                                : "bg-yellow-100 text-yellow-700 border-yellow-200"
                            }`}
                          >
                            {currentStep >= 6 ? "Agendado" : "Em atendimento"}
                          </Badge>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">João Santos</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Respondendo
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <motion.div
                className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-6 border border-primary/20"
                animate={currentStep >= 6 ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 2, repeat: 3 }}
              >
                <h4 className="font-semibold text-foreground mb-2">🎯 Resultado em Tempo Real</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {currentStep >= 6
                    ? "✅ Agendamento realizado! Lead capturado e convertido automaticamente."
                    : "⏳ Capturando informações do cliente..."}
                </p>
                <div className="flex items-center text-sm text-primary">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  <span>
                    Tempo de conversão: {currentStep >= 6 ? "3min 12s" : `${Math.floor(currentStep * 0.5)}min...`}
                  </span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/login">
                Criar Meu Chatbot Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Configure em 5 minutos • Sem cartão de crédito • Suporte incluído
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
