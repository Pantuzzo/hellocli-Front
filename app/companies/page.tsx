"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Building2,
  Users,
  MessageSquare,
  TrendingUp,
  Search,
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Crown,
} from "lucide-react"
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

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  // Mock data - em produção viria da API
  const companies = [
    {
      id: "1",
      name: "Clínica Bella Estética",
      domain: "clinicabella.com.br",
      plan: "PRO",
      users: 3,
      conversations: 1247,
      monthlyGrowth: 23,
      status: "active",
      createdAt: "2024-01-15",
      logo: "CB",
    },
    {
      id: "2",
      name: "Barbearia Moderna",
      domain: "barbearia-moderna.com",
      plan: "FREE",
      users: 1,
      conversations: 89,
      monthlyGrowth: 12,
      status: "active",
      createdAt: "2024-02-03",
      logo: "BM",
    },
    {
      id: "3",
      name: "Advocacia Silva & Associados",
      domain: "silva-advocacia.com.br",
      plan: "PREMIUM",
      users: 8,
      conversations: 2156,
      monthlyGrowth: 45,
      status: "active",
      createdAt: "2023-11-22",
      logo: "AS",
    },
    {
      id: "4",
      name: "Consultório Dr. Santos",
      domain: "drsantos.med.br",
      plan: "PRO",
      users: 2,
      conversations: 567,
      monthlyGrowth: -5,
      status: "inactive",
      createdAt: "2024-01-08",
      logo: "DS",
    },
  ]

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.domain.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "FREE":
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
      case "PRO":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
      case "PREMIUM":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusColor = (status: string) => {
    return status === "active"
      ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
      : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <Building2 className="w-8 h-8 mr-3 text-primary" />
            Empresas
          </h1>
          <p className="text-muted-foreground">Gerencie todas as empresas da plataforma</p>
        </div>

        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Nova Empresa
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Nova Empresa</DialogTitle>
              <DialogDescription>Adicione uma nova empresa à plataforma HelloCli</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="company-name">Nome da Empresa</Label>
                <Input id="company-name" placeholder="Ex: Clínica Bella Estética" />
              </div>
              <div>
                <Label htmlFor="company-domain">Domínio</Label>
                <Input id="company-domain" placeholder="Ex: clinicabella.com.br" />
              </div>
              <div>
                <Label htmlFor="company-plan">Plano</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o plano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="FREE">Gratuito</SelectItem>
                    <SelectItem value="PRO">Pro</SelectItem>
                    <SelectItem value="PREMIUM">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>Criar Empresa</Button>
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
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Empresas</CardTitle>
              <Building2 className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{companies.length}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2</span> este mês
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Empresas Ativas</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {companies.filter((c) => c.status === "active").length}
              </div>
              <p className="text-xs text-muted-foreground">
                {Math.round((companies.filter((c) => c.status === "active").length / companies.length) * 100)}% do total
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Usuários</CardTitle>
              <Users className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {companies.reduce((acc, company) => acc + company.users, 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                Média de {Math.round(companies.reduce((acc, company) => acc + company.users, 0) / companies.length)} por
                empresa
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Conversas</CardTitle>
              <MessageSquare className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {companies.reduce((acc, company) => acc + company.conversations, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Este mês</p>
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
              placeholder="Buscar empresas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
      </Card>

      {/* Companies List */}
      <div className="grid gap-6">
        {filteredCompanies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">{company.logo}</span>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-foreground">{company.name}</h3>
                        {company.plan === "PREMIUM" && <Crown className="w-4 h-4 text-yellow-500" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{company.domain}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge className={getPlanColor(company.plan)}>{company.plan}</Badge>
                        <Badge className={getStatusColor(company.status)}>
                          {company.status === "active" ? "Ativa" : "Inativa"}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{company.users}</p>
                      <p className="text-xs text-muted-foreground">Usuários</p>
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{company.conversations.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Conversas</p>
                    </div>

                    <div className="text-center">
                      <p
                        className={`text-2xl font-bold ${company.monthlyGrowth >= 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {company.monthlyGrowth >= 0 ? "+" : ""}
                        {company.monthlyGrowth}%
                      </p>
                      <p className="text-xs text-muted-foreground">Crescimento</p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-foreground">
                        {new Date(company.createdAt).toLocaleDateString("pt-BR")}
                      </p>
                      <p className="text-xs text-muted-foreground">Criada em</p>
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
                          Ver Detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
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
