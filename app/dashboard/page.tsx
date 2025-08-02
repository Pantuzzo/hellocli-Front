"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Bot, Settings, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total de Conversas",
      value: "1,234",
      change: "+12%",
      icon: MessageSquare,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Clientes Ativos",
      value: "856",
      change: "+8%",
      icon: Users,
      color: "text-green-600 dark:text-green-400",
    },
    {
      title: "Taxa de Conversão",
      value: "68%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Tempo Médio",
      value: "2.3min",
      change: "-15%",
      icon: Clock,
      color: "text-orange-600 dark:text-orange-400",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral do seu atendimento automatizado</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span
                    className={
                      stat.change.startsWith("+")
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }
                  >
                    {stat.change}
                  </span>{" "}
                  em relação ao mês passado
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Ações Rápidas</CardTitle>
            <CardDescription className="text-muted-foreground">
              Acesse rapidamente as principais funcionalidades
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/chatbot">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-background hover:bg-accent hover:text-accent-foreground border-border"
                >
                  <Bot className="w-4 h-4 mr-2" />
                  Configurar Chatbot
                </Button>
              </motion.div>
            </Link>
            <Link href="/conversations">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-background hover:bg-accent hover:text-accent-foreground border-border"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ver Conversas
                </Button>
              </motion.div>
            </Link>
            <Link href="/settings">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-background hover:bg-accent hover:text-accent-foreground border-border"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Configurações
                </Button>
              </motion.div>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Atividade Recente</CardTitle>
            <CardDescription className="text-muted-foreground">Últimas conversas e interações</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "João Silva", action: "Nova conversa iniciada", time: "2min atrás" },
                { name: "Maria Santos", action: "Agendamento realizado", time: "5min atrás" },
                { name: "Pedro Costa", action: "Dúvida respondida", time: "8min atrás" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{item.action}</p>
                    <p className="text-xs text-muted-foreground">Cliente: {item.name}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
