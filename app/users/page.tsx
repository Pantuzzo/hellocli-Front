"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Users, Search, Plus, MoreHorizontal, Eye, Edit, Trash2, Shield, Mail, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuthStore } from "@/lib/stores/auth-store"

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const { user: currentUser } = useAuthStore()

  // Mock data - em produção viria da API
  const users = [
    {
      id: "1",
      name: "Dr. Maria Fernanda",
      email: "maria@clinicabella.com.br",
      role: "ADMIN",
      company: "Clínica Bella Estética",
      status: "active",
      lastLogin: "2024-01-15T10:30:00Z",
      createdAt: "2024-01-01T00:00:00Z",
      avatar: "MF",
    },
    {
      id: "2",
      name: "João Carlos",
      email: "joao@barbearia.com",
      role: "ADMIN",
      company: "Barbearia Moderna",
      status: "active",
      lastLogin: "2024-01-14T16:45:00Z",
      createdAt: "2024-01-05T00:00:00Z",
      avatar: "JC",
    },
    {
      id: "3",
      name: "Ana Paula",
      email: "ana@clinicabella.com.br",
      role: "USER",
      company: "Clínica Bella Estética",
      status: "active",
      lastLogin: "2024-01-15T09:15:00Z",
      createdAt: "2024-01-10T00:00:00Z",
      avatar: "AP",
    },
    {
      id: "4",
      name: "Ricardo Silva",
      email: "ricardo@silva-adv.com.br",
      role: "ADMIN",
      company: "Advocacia Silva & Associados",
      status: "inactive",
      lastLogin: "2024-01-10T14:20:00Z",
      createdAt: "2023-12-15T00:00:00Z",
      avatar: "RS",
    },
  ]

  // Filtrar usuários baseado no role atual
  const getFilteredUsers = () => {
    let filteredUsers = users

    // Se não for SUPERADMIN, mostrar apenas usuários da mesma empresa
    if (currentUser?.role !== "SUPERADMIN") {
      filteredUsers = users.filter((user) => user.company === currentUser?.companyId)
    }

    // Aplicar filtro de busca
    return filteredUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.company.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  const filteredUsers = getFilteredUsers()

  const getRoleColor = (role: string) => {
    switch (role) {
      case "SUPERADMIN":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400"
      case "ADMIN":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
      case "USER":
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusColor = (status: string) => {
    return status === "active"
      ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
      : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
  }

  const getRoleText = (role: string) => {
    switch (role) {
      case "SUPERADMIN":
        return "Super Admin"
      case "ADMIN":
        return "Administrador"
      case "USER":
        return "Usuário"
      default:
        return role
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <Users className="w-8 h-8 mr-3 text-primary" />
            {currentUser?.role === "SUPERADMIN" ? "Todos os Usuários" : "Usuários da Empresa"}
          </h1>
          <p className="text-muted-foreground">
            {currentUser?.role === "SUPERADMIN"
              ? "Gerencie todos os usuários da plataforma"
              : "Gerencie os usuários da sua empresa"}
          </p>
        </div>

        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Novo Usuário
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Novo Usuário</DialogTitle>
              <DialogDescription>
                Adicione um novo usuário à {currentUser?.role === "SUPERADMIN" ? "plataforma" : "sua empresa"}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="user-name">Nome Completo</Label>
                <Input id="user-name" placeholder="Ex: João Silva" />
              </div>
              <div>
                <Label htmlFor="user-email">Email</Label>
                <Input id="user-email" type="email" placeholder="Ex: joao@empresa.com" />
              </div>
              <div>
                <Label htmlFor="user-role">Função</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a função" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentUser?.role === "SUPERADMIN" && <SelectItem value="ADMIN">Administrador</SelectItem>}
                    <SelectItem value="USER">Usuário</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {currentUser?.role === "SUPERADMIN" && (
                <div>
                  <Label htmlFor="user-company">Empresa</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a empresa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinica-bella">Clínica Bella Estética</SelectItem>
                      <SelectItem value="barbearia-moderna">Barbearia Moderna</SelectItem>
                      <SelectItem value="silva-advocacia">Advocacia Silva & Associados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>Criar Usuário</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Usuários</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{filteredUsers.length}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2</span> este mês
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Usuários Ativos</CardTitle>
              <Shield className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {filteredUsers.filter((u) => u.status === "active").length}
              </div>
              <p className="text-xs text-muted-foreground">
                {Math.round((filteredUsers.filter((u) => u.status === "active").length / filteredUsers.length) * 100)}%
                do total
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Administradores</CardTitle>
              <Shield className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {filteredUsers.filter((u) => u.role === "ADMIN").length}
              </div>
              <p className="text-xs text-muted-foreground">Com acesso total</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Último Login</CardTitle>
              <Calendar className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">Hoje</div>
              <p className="text-xs text-muted-foreground">
                {
                  filteredUsers.filter((u) => {
                    const lastLogin = new Date(u.lastLogin)
                    const today = new Date()
                    return lastLogin.toDateString() === today.toDateString()
                  }).length
                }{" "}
                usuários
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Search */}
      <Card className="border-border bg-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar usuários..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
      </Card>

      {/* Users List */}
      <div className="grid gap-6">
        {filteredUsers.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">{user.avatar}</span>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-foreground">{user.name}</h3>
                        {user.role === "SUPERADMIN" && <Shield className="w-4 h-4 text-purple-500" />}
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span>{user.email}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{user.company}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge className={getRoleColor(user.role)}>{getRoleText(user.role)}</Badge>
                        <Badge className={getStatusColor(user.status)}>
                          {user.status === "active" ? "Ativo" : "Inativo"}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-sm text-foreground">{new Date(user.lastLogin).toLocaleDateString("pt-BR")}</p>
                      <p className="text-xs text-muted-foreground">Último login</p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-foreground">{new Date(user.createdAt).toLocaleDateString("pt-BR")}</p>
                      <p className="text-xs text-muted-foreground">Criado em</p>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Perfil
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Desativar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
