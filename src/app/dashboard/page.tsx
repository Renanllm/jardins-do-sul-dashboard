// TODO: Replace mock data with real data sources in the future.
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Calendar,
  CheckCircle,
  DollarSign,
  FileText,
  Mail,
  Phone,
  Settings,
  ShoppingCart,
  Sparkles,
  Users,
  Wrench,
  AlertTriangle,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DashboardPage() {
  const [userName, setUserName] = useState<string | null>(null)
  const [nameInput, setNameInput] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [avisos, setAvisos] = useState([
    {
      titulo: "Manutenção do Elevador",
      descricao: "Elevador será desligado das 8h às 12h no dia 18/01",
      tipo: "urgente",
      data: "16/01/2024",
    },
    {
      titulo: "Assembleia Geral",
      descricao: "Reunião marcada para 25/01 às 19h no salão de festas",
      tipo: "importante",
      data: "15/01/2024",
    },
  ])
  const [showAddAviso, setShowAddAviso] = useState(false)
  const [newAviso, setNewAviso] = useState({
    titulo: "",
    descricao: "",
    tipo: "importante",
    data: new Date().toISOString().slice(0, 10),
  })

  // Check localStorage for user name on mount
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("dashboard_user_name") : null
    if (stored) {
      setUserName(stored)
      setShowModal(false)
    } else {
      setShowModal(true)
    }
  }, [])

  // Save name to localStorage and state
  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault()
    if (nameInput.trim()) {
      localStorage.setItem("dashboard_user_name", nameInput.trim())
      setUserName(nameInput.trim())
      setShowModal(false)
    }
  }

  // Dados mockados
  const proximaFaxina = {
    nome: "Maria Silva",
    apartamento: "201",
    avatar: "/placeholder.svg?height=40&width=40",
    dataVencimento: "15/01/2024",
  }

  const historicoFaxina = [
    { nome: "João Santos", apartamento: "101", data: "01/01/2024", status: "pago", comprovante: true },
    { nome: "Ana Costa", apartamento: "302", data: "15/12/2023", status: "pago", comprovante: true },
    { nome: "Carlos Lima", apartamento: "203", data: "01/12/2023", status: "pago", comprovante: false },
    { nome: "Lucia Ferreira", apartamento: "401", data: "15/11/2023", status: "pago", comprovante: true },
    { nome: "Pedro Oliveira", apartamento: "102", data: "01/11/2023", status: "pago", comprovante: true },
    { nome: "Rosa Santos", apartamento: "301", data: "15/10/2023", status: "pago", comprovante: true },
  ]

  const parcelasCobertura = [
    { parcela: 1, valor: "R$ 2.500,00", vencimento: "15/01/2024", pagos: 8, total: 12 },
    { parcela: 2, valor: "R$ 2.500,00", vencimento: "15/02/2024", pagos: 6, total: 12 },
    { parcela: 3, valor: "R$ 2.500,00", vencimento: "15/03/2024", pagos: 4, total: 12 },
    { parcela: 4, valor: "R$ 2.500,00", vencimento: "15/04/2024", pagos: 2, total: 12 },
  ]

  const proximaLimpeza = {
    nome: "Carlos Lima",
    apartamento: "203",
    avatar: "/placeholder.svg?height=40&width=40",
    dataCompra: "20/01/2024",
  }

  const historicoLimpeza = [
    {
      nome: "Ana Costa",
      apartamento: "302",
      data: "05/01/2024",
      itens: "Detergente, Desinfetante, Papel",
      status: "comprado",
    },
    {
      nome: "João Santos",
      apartamento: "101",
      data: "20/12/2023",
      itens: "Sabão em pó, Amaciante",
      status: "comprado",
    },
    {
      nome: "Maria Silva",
      apartamento: "201",
      data: "05/12/2023",
      itens: "Álcool, Panos de limpeza",
      status: "comprado",
    },
  ]

  const manutencoes = [
    { tipo: "Limpeza da Caixa D'água", data: "10/01/2024", valor: "R$ 800,00", responsavel: "Empresa AquaLimpa" },
    { tipo: "Pintura da Fachada", data: "15/12/2023", valor: "R$ 5.200,00", responsavel: "Pinturas Silva" },
    { tipo: "Reparo do Portão", data: "28/11/2023", valor: "R$ 350,00", responsavel: "Serralheria Santos" },
  ]

  const handleAddAviso = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newAviso.titulo.trim() || !newAviso.descricao.trim() || !newAviso.data.trim()) return
    setAvisos([{ ...newAviso }, ...avisos])
    setShowAddAviso(false)
    setNewAviso({ titulo: "", descricao: "", tipo: "importante", data: "" })
  }

  return (
    <>
      <Dialog open={showModal} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Identifique-se</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveName} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="user-name">Qual seu nome?</Label>
              <Input
                id="user-name"
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                placeholder="Digite seu nome"
                required
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full">Entrar</Button>
          </form>
        </DialogContent>
      </Dialog>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Left: Logo and Title */}
            <div className="flex items-center space-x-4">
              <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                <img
                  src="/jardins-do-sul.jpeg"
                  alt="Jardins do Sul"
                  className="h-12 w-12 object-cover rounded-md"
                  style={{ minWidth: 48, minHeight: 48 }}
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Condomínio Residencial</h1>
                <p className="text-sm text-gray-600">Jardins do Sul - Gestão Integrada</p>
              </div>
            </div>
            {/* Right: User Identification - Modern Style */}
            <div className="flex items-center space-x-3 bg-gray-100 px-4 py-2 rounded-xl shadow-sm">
              <Avatar className="h-10 w-10 border-2 border-blue-500 shadow">
                <AvatarImage src={userName ? undefined : "/placeholder.svg?height=40&width=40"} />
                <AvatarFallback className="bg-blue-500 text-white font-bold">
                  {userName ? userName.split(" ").map((n) => n[0]).join("") : "?"}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-semibold text-gray-900 leading-tight">
                  {userName ? userName : "Visitante"}
                </p>
                <p className="text-xs text-gray-500">Morador</p>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Avisos Importantes - Sempre visível */}
          <Card className="mb-6 border-l-4 border-l-red-500">
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                <span>Avisos Importantes</span>
              </CardTitle>
              <Button size="sm" variant="outline" onClick={() => setShowAddAviso(true)}>
                Novo Aviso
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {avisos.map((aviso, index) => {
                const isUrgente = aviso.tipo === "urgente"
                return (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 p-3 rounded-lg border-l-4 ${
                      isUrgente
                        ? 'bg-red-50 border-l-red-500'
                        : 'bg-yellow-50 border-l-yellow-500'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className={`font-medium ${isUrgente ? 'text-red-900' : 'text-yellow-900'}`}>{aviso.titulo}</h4>
                        <Badge variant={isUrgente ? "destructive" : "secondary"}>{aviso.tipo}</Badge>
                      </div>
                      <p className={`text-sm ${isUrgente ? 'text-red-700' : 'text-yellow-700'}`}>{aviso.descricao}</p>
                      <p className={`text-xs mt-1 ${isUrgente ? 'text-red-600' : 'text-yellow-600'}`}>{aviso.data}</p>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Dialog for adding new aviso */}
          <Dialog open={showAddAviso} onOpenChange={setShowAddAviso}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Novo Aviso</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddAviso} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="aviso-titulo">Título</Label>
                  <Input
                    id="aviso-titulo"
                    value={newAviso.titulo}
                    onChange={e => setNewAviso({ ...newAviso, titulo: e.target.value })}
                    placeholder="Título do aviso"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="aviso-descricao">Descrição</Label>
                  <Input
                    id="aviso-descricao"
                    value={newAviso.descricao}
                    onChange={e => setNewAviso({ ...newAviso, descricao: e.target.value })}
                    placeholder="Descrição do aviso"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="aviso-tipo">Tipo</Label>
                  <select
                    id="aviso-tipo"
                    className="border rounded px-2 py-1"
                    value={newAviso.tipo}
                    onChange={e => setNewAviso({ ...newAviso, tipo: e.target.value })}
                  >
                    <option value="urgente">Urgente</option>
                    <option value="importante">Importante</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="aviso-data">Data</Label>
                  <Input
                    id="aviso-data"
                    type="date"
                    value={newAviso.data}
                    onChange={e => setNewAviso({ ...newAviso, data: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Adicionar Aviso</Button>
              </form>
            </DialogContent>
          </Dialog>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Gestão de Faxina */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <span>Gestão de Faxina</span>
                </CardTitle>
                <CardDescription>Próximo responsável e histórico</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Próximo Responsável */}
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
                  <h4 className="font-medium text-blue-900 mb-2">Próximo Responsável</h4>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={proximaFaxina.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {proximaFaxina.nome
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{proximaFaxina.nome}</p>
                      <p className="text-sm text-gray-600">Apt. {proximaFaxina.apartamento}</p>
                      <p className="text-sm text-blue-600">Venc: {proximaFaxina.dataVencimento}</p>
                    </div>
                  </div>
                </div>

                {/* Histórico */}
                <div>
                  <h4 className="font-medium mb-3">Últimas 6 Responsabilidades</h4>
                  <ScrollArea className="h-48">
                    <div className="space-y-2">
                      {historicoFaxina.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-xs">
                                {item.nome
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{item.nome}</p>
                              <p className="text-xs text-gray-600">{item.data}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            {item.comprovante && <FileText className="h-4 w-4 text-blue-600" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </CardContent>
            </Card>

            {/* Status das Parcelas de Cobertura */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span>Parcelas da Cobertura</span>
                </CardTitle>
                <CardDescription>Status de pagamento coletivo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {parcelasCobertura.map((parcela, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">Parcela {parcela.parcela}</p>
                          <p className="text-sm text-gray-600">{parcela.valor}</p>
                        </div>
                        <Badge variant={parcela.pagos === parcela.total ? "default" : "secondary"}>
                          {parcela.pagos}/{parcela.total}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-600">Venc: {parcela.vencimento}</p>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${(parcela.pagos / parcela.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gestão de Produtos de Limpeza */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5 text-purple-600" />
                  <span>Produtos de Limpeza</span>
                </CardTitle>
                <CardDescription>Próximo responsável e compras</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Próximo Responsável */}
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-l-purple-500">
                  <h4 className="font-medium text-purple-900 mb-2">Próximo Responsável</h4>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={proximaLimpeza.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {proximaLimpeza.nome
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{proximaLimpeza.nome}</p>
                      <p className="text-sm text-gray-600">Apt. {proximaLimpeza.apartamento}</p>
                      <p className="text-sm text-purple-600">Data: {proximaLimpeza.dataCompra}</p>
                    </div>
                  </div>
                </div>

                {/* Histórico de Compras */}
                <div>
                  <h4 className="font-medium mb-3">Últimas Compras</h4>
                  <div className="space-y-2">
                    {historicoLimpeza.map((item, index) => (
                      <div key={index} className="p-2 bg-gray-50 rounded">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-sm font-medium">{item.nome}</p>
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-xs text-gray-600 mb-1">{item.data}</p>
                        <p className="text-xs text-gray-700">{item.itens}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Controle de Manutenções */}
            <Card className="lg:col-span-2 xl:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wrench className="h-5 w-5 text-orange-600" />
                  <span>Controle de Manutenções</span>
                </CardTitle>
                <CardDescription>Histórico de manutenções realizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {manutencoes.map((manutencao, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{manutencao.tipo}</h4>
                        <Badge variant="outline">{manutencao.valor}</Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">Data: {manutencao.data}</p>
                      <p className="text-xs text-gray-700">Responsável: {manutencao.responsavel}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Seções Adicionais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Calendário de Eventos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                  <span>Próximos Eventos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 bg-indigo-50 rounded">
                    <div className="text-center">
                      <p className="text-lg font-bold text-indigo-600">25</p>
                      <p className="text-xs text-indigo-600">JAN</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Assembleia Geral</p>
                      <p className="text-xs text-gray-600">19:00 - Salão de Festas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-600">30</p>
                      <p className="text-xs text-gray-600">JAN</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Limpeza da Piscina</p>
                      <p className="text-xs text-gray-600">08:00 - Área de Lazer</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reserva de Área Comum */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span>Área Comum</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" variant="outline">
                    Reservar Salão de Festas
                  </Button>
                  <Button className="w-full" variant="outline">
                    Reservar Churrasqueira
                  </Button>
                  <div className="text-xs text-gray-600 mt-2">
                    <p>Próximas reservas:</p>
                    <p>• Salão: 20/01 - Apt 301</p>
                    <p>• Churrasqueira: 22/01 - Apt 102</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contato Rápido */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-red-600" />
                  <span>Contato Rápido</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Síndico: (11) 99999-9999
                </Button>
                <Button className="w-full" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Administradora
                </Button>
                <Button className="w-full" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Portaria
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Botão Flutuante de Contato */}
        <div className="fixed bottom-6 right-6">
          <Button size="lg" className="rounded-full shadow-lg">
            <Phone className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Contato</span>
          </Button>
        </div>
      </div>
    </>
  )
} 