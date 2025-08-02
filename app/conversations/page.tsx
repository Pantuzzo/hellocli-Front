"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MessageSquare,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  Clock,
  User,
  Bot,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ConversationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedConversation, setSelectedConversation] = useState<any>(null)

  // Mock data
  const conversations = [
    {
      id: "1",
      customerName: "Maria Silva",
      customerEmail: "maria@email.com",
      customerPhone: "(11) 99999-8888",
      status: "CLOSED",
      createdAt: "2024-01-15T14:30:00Z",
      updatedAt: "2024-01-15T14:45:00Z",
      messagesCount: 8,
      lastMessage: "Perfeito! Agendamento confirmado para amanhã às 14h.",
      tags: ["agendamento", "harmonização"],
      messages: [
        {
          id: "1",
          content: "Olá! 👋 Bem-vindo à Clínica Bella Estética. Como posso ajudar você hoje?",
          sender: "BOT",
          createdAt: "2024-01-15T14:30:00Z",
        },
        {
          id: "2",
          content: "Oi! Gostaria de agendar uma consulta para harmonização facial",
          sender: "USER",
          createdAt: "2024-01-15T14:31:00Z",
        },
        {
          id: "3",
          content:
            "Perfeito! A harmonização facial é uma das nossas especialidades. Para agendar, preciso de algumas informações. Qual seu nome completo?",
          sender: "BOT",
          createdAt: "2024-01-15T14:31:30Z",
        },
        {
          id: "4",
          content: "Maria Silva",
          sender: "USER",
          createdAt: "2024-01-15T14:32:00Z",
        },
        {
          id: "5",
          content: "Prazer, Maria! 😊 Qual seu telefone para contato?",
          sender: "BOT",
          createdAt: "2024-01-15T14:32:15Z",
        },
        {
          id: "6",
          content: "(11) 99999-8888",
          sender: "USER",
          createdAt: "2024-01-15T14:33:00Z",
        },
        {
          id: "7",
          content:
            "Ótimo! Vou te direcionar para nossa agenda online. Você também pode falar diretamente conosco no WhatsApp. Prefere qual opção?",
          sender: "BOT",
          createdAt: "2024-01-15T14:33:30Z",
        },
        {
          id: "8",
          content: "Perfeito! Agendamento confirmado para amanhã às 14h.",
          sender: "AGENT",
          createdAt: "2024-01-15T14:45:00Z",
        },
      ],
    },
    {
      id: "2",
      customerName: "João Santos",
      customerEmail: "joao@email.com",
      customerPhone: "(11) 88888-7777",
      status: "ACTIVE",
      createdAt: "2024-01-15T15:20:00Z",
      updatedAt: "2024-01-15T15:25:00Z",
      messagesCount: 4,
      lastMessage: "Estou digitando...",
      tags: ["dúvida", "preços"],
      messages: [
        {
          id: "1",
          content: "Olá! Como posso ajudar?",
          sender: "BOT",
          createdAt: "2024-01-15T15:20:00Z",
        },
        {
          id: "2",
          content: "Queria saber os preços dos procedimentos",
          sender: "USER",
          createdAt: "2024-01-15T15:21:00Z",
        },
        {
          id: "3",
          content: "Claro! Temos diversos procedimentos. Qual especificamente te interessa?",
          sender: "BOT",
          createdAt: "2024-01-15T15:21:30Z",
        },
        {
          id: "4",
          content: "Botox e preenchimento",
          sender: "USER",
          createdAt: "2024-01-15T15:22:00Z",
        },
      ],
    },
    {
      id: "3",
      customerName: "Ana Costa",
      customerEmail: "ana@email.com",
      customerPhone: "(11) 77777-6666",
      status: "PENDING",
      createdAt: "2024-01-15T16:10:00Z",
      updatedAt: "2024-01-15T16:12:00Z",
      messagesCount: 2,
      lastMessage: "Aguardando resposta do atendente...",
      tags: ["urgente", "reagendamento"],
      messages: [
        {
          id: "1",
          content: "Preciso reagendar minha consulta de amanhã",
          sender: "USER",
          createdAt: "2024-01-15T16:10:00Z",
        },
        {
          id: "2",
          content: "Entendi! Vou transferir você para um atendente que pode ajudar com reagendamentos.",
          sender: "BOT",
          createdAt: "2024-01-15T16:12:00Z",
        },
      ],
    },
  ]

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch =
      conv.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || conv.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
      case "CLOSED":
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
      case "PENDING":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "Ativa"
      case "CLOSED":
        return "Finalizada"
      case "PENDING":
        return "Pendente"
      default:
        return status
    }
  }

  const getSenderIcon = (sender: string) => {
    switch (sender) {
      case "BOT":
        return <Bot className="w-4 h-4" />
      case "USER":
        return <User className="w-4 h-4" />
      case "AGENT":
        return <User className="w-4 h-4" />
      default:
        return <User className="w-4 h-4" />
    }
  }

  const getSenderColor = (sender: string) => {
    switch (sender) {
      case "BOT":
        return "text-blue-600 dark:text-blue-400"
      case "USER":
        return "text-green-600 dark:text-green-400"
      case "AGENT":
        return "text-purple-600 dark:text-purple-400"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <MessageSquare className="w-8 h-8 mr-3 text-primary" />
            Conversas
          </h1>
          <p className="text-muted-foreground">Acompanhe todas as conversas com seus clientes</p>
        </div>

        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Exportar
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{conversations.length}</div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ativas</CardTitle>
            <Clock className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {conversations.filter((c) => c.status === "ACTIVE").length}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pendentes</CardTitle>
            <Calendar className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {conversations.filter((c) => c.status === "PENDING").length}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Finalizadas</CardTitle>
            <MessageSquare className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {conversations.filter((c) => c.status === "CLOSED").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border-border bg-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2 flex-1">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome, email ou mensagem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os status</SelectItem>
                  <SelectItem value="active">Ativas</SelectItem>
                  <SelectItem value="pending">Pendentes</SelectItem>
                  <SelectItem value="closed">Finalizadas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Conversations List */}
      <div className="grid gap-4">
        {filteredConversations.map((conversation, index) => (
          <motion.div
            key={conversation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">{conversation.customerName.charAt(0)}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-foreground">{conversation.customerName}</h3>
                        <Badge className={getStatusColor(conversation.status)}>
                          {getStatusText(conversation.status)}
                        </Badge>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Mail className="w-4 h-4" />
                          <span>{conversation.customerEmail}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="w-4 h-4" />
                          <span>{conversation.customerPhone}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-2">{conversation.lastMessage}</p>

                      <div className="flex items-center space-x-2">
                        {conversation.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-foreground">{conversation.messagesCount}</p>
                      <p className="text-xs text-muted-foreground">Mensagens</p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-foreground">
                        {new Date(conversation.createdAt).toLocaleDateString("pt-BR")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(conversation.createdAt).toLocaleTimeString("pt-BR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedConversation(conversation)}>
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Detalhes
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <User className="w-5 h-5" />
                            <span>Conversa com {conversation.customerName}</span>
                          </DialogTitle>
                          <DialogDescription>
                            {conversation.customerEmail} • {conversation.customerPhone}
                          </DialogDescription>
                        </DialogHeader>

                        <ScrollArea className="h-96 w-full">
                          <div className="space-y-4 p-4">
                            {conversation.messages.map((message) => (
                              <div
                                key={message.id}
                                className={`flex ${message.sender === "USER" ? "justify-end" : "justify-start"}`}
                              >
                                <div className="max-w-xs">
                                  <div
                                    className={`rounded-2xl px-4 py-3 ${
                                      message.sender === "USER"
                                        ? "bg-primary text-primary-foreground ml-4"
                                        : "bg-muted mr-4"
                                    }`}
                                  >
                                    <p className="text-sm">{message.content}</p>
                                  </div>
                                  <div className="flex items-center space-x-2 mt-1 px-2">
                                    <div className={`flex items-center space-x-1 ${getSenderColor(message.sender)}`}>
                                      {getSenderIcon(message.sender)}
                                      <span className="text-xs">
                                        {message.sender === "BOT"
                                          ? "Bot"
                                          : message.sender === "USER"
                                            ? "Cliente"
                                            : "Atendente"}
                                      </span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                      {new Date(message.createdAt).toLocaleTimeString("pt-BR", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>

                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Abrir no WhatsApp
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
