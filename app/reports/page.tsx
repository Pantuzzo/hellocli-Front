"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Download, TrendingUp, MessageSquare, Clock, Target } from "lucide-react"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("30d")
  const [reportType, setReportType] = useState("conversations")

  // Mock data para os gráficos
  const conversationsData = [
    { name: "01/01", conversas: 45, leads: 32, conversoes: 12 },
    { name: "02/01", conversas: 52, leads: 38, conversoes: 15 },
    { name: "03/01", conversas: 48, leads: 35, conversoes: 14 },
    { name: "04/01", conversas: 61, leads: 42, conversoes: 18 },
    { name: "05/01", conversas: 55, leads: 39, conversoes: 16 },
    { name: "06/01", conversas: 67, leads: 48, conversoes: 21 },
    { name: "07/01", conversas: 59, leads: 41, conversoes: 19 },
  ]

  const channelsData = [
    { name: "Website", value: 45, color: "#3b82f6" },
    { name: "WhatsApp", value: 35, color: "#10b981" },
    { name: "Facebook", value: 15, color: "#8b5cf6" },
    { name: "Instagram", value: 5, color: "#f59e0b" },
  ]

  const performanceData = [
    { metric: "Taxa de Resposta", value: "98.5%", change: "+2.1%", trend: "up" },
    { metric: "Tempo Médio de Resposta", value: "1.2s", change: "-0.3s", trend: "up" },
    { metric: "Satisfação do Cliente", value: "4.8/5", change: "+0.2", trend: "up" },
    { metric: "Taxa de Conversão", value: "32.4%", change: "+5.2%", trend: "up" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <BarChart3 className="w-8 h-8 mr-3 text-primary" />
            Relatórios
          </h1>
          <p className="text-muted-foreground">Análise detalhada do desempenho do seu chatbot</p>
        </div>

        <div className="flex items-center space-x-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
              <SelectItem value="90d">Últimos 90 dias</SelectItem>
              <SelectItem value="1y">Último ano</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {performanceData.map((kpi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.metric}</CardTitle>
                <TrendingUp className={`h-4 w-4 ${kpi.trend === "up" ? "text-green-500" : "text-red-500"}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={kpi.trend === "up" ? "text-green-600" : "text-red-600"}>{kpi.change}</span> vs
                  período anterior
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Conversas ao Longo do Tempo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Conversas ao Longo do Tempo
              </CardTitle>
              <CardDescription>Evolução das conversas, leads e conversões</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={conversationsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="conversas" stroke="#3b82f6" strokeWidth={2} name="Conversas" />
                  <Line type="monotone" dataKey="leads" stroke="#10b981" strokeWidth={2} name="Leads" />
                  <Line type="monotone" dataKey="conversoes" stroke="#8b5cf6" strokeWidth={2} name="Conversões" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Canais de Origem */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Canais de Origem
              </CardTitle>
              <CardDescription>De onde vêm seus clientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={channelsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {channelsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {channelsData.map((channel, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: channel.color }} />
                    <span className="text-sm text-foreground">{channel.name}</span>
                    <span className="text-sm text-muted-foreground">{channel.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Detailed Analytics */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Análise Detalhada por Horário
            </CardTitle>
            <CardDescription>Performance do chatbot ao longo do dia</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={[
                  { hora: "00h", conversas: 5 },
                  { hora: "02h", conversas: 3 },
                  { hora: "04h", conversas: 2 },
                  { hora: "06h", conversas: 8 },
                  { hora: "08h", conversas: 25 },
                  { hora: "10h", conversas: 45 },
                  { hora: "12h", conversas: 38 },
                  { hora: "14h", conversas: 52 },
                  { hora: "16h", conversas: 48 },
                  { hora: "18h", conversas: 35 },
                  { hora: "20h", conversas: 28 },
                  { hora: "22h", conversas: 15 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hora" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="conversas" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Insights */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>💡 Insights e Recomendações</CardTitle>
            <CardDescription>Análises automáticas baseadas nos seus dados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-400">Excelente Performance</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Sua taxa de conversão aumentou 5.2% este mês. O horário de pico é entre 14h-16h.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-400">Oportunidade de Crescimento</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    45% das conversas vêm do website. Considere otimizar a integração com redes sociais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-400">Atenção aos Horários</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Baixo volume de conversas entre 22h-06h. Configure mensagens automáticas para esse período.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
