"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle } from "lucide-react"

interface Notice {
  titulo: string
  descricao: string
  tipo: "urgente" | "importante"
  data: string
}

interface ImportantNoticesProps {
  initialNotices?: Notice[]
}

export function ImportantNotices({ initialNotices = [] }: ImportantNoticesProps) {
  const [notices, setNotices] = useState<Notice[]>(initialNotices.length > 0 ? initialNotices : [
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
  const [showAddNotice, setShowAddNotice] = useState(false)
  const [newNotice, setNewNotice] = useState<Notice>({
    titulo: "",
    descricao: "",
    tipo: "importante",
    data: new Date().toISOString().slice(0, 10),
  })

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newNotice.titulo.trim() || !newNotice.descricao.trim() || !newNotice.data.trim()) return
    setNotices([{ ...newNotice }, ...notices])
    setShowAddNotice(false)
    setNewNotice({ titulo: "", descricao: "", tipo: "importante", data: "" })
  }

  return (
    <>
      <Card className="mb-6 border-l-4 border-l-red-500">
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-red-700">
            <AlertTriangle className="h-5 w-5" />
            <span>Avisos Importantes</span>
          </CardTitle>
          <Button size="sm" variant="outline" onClick={() => setShowAddNotice(true)}>
            Novo Aviso
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {notices.map((notice, index) => {
            const isUrgent = notice.tipo === "urgente"
            return (
              <div
                key={index}
                className={`flex items-start space-x-3 p-3 rounded-lg border-l-4 ${
                  isUrgent
                    ? 'bg-red-50 border-l-red-500'
                    : 'bg-yellow-50 border-l-yellow-500'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className={`font-medium ${isUrgent ? 'text-red-900' : 'text-yellow-900'}`}>{notice.titulo}</h4>
                    <Badge variant={isUrgent ? "destructive" : "secondary"}>{notice.tipo}</Badge>
                  </div>
                  <p className={`text-sm ${isUrgent ? 'text-red-700' : 'text-yellow-700'}`}>{notice.descricao}</p>
                  <p className={`text-xs mt-1 ${isUrgent ? 'text-red-600' : 'text-yellow-600'}`}>{notice.data}</p>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Dialog for adding new notice */}
      <Dialog open={showAddNotice} onOpenChange={setShowAddNotice}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Novo Aviso</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddNotice} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="notice-title">Título</Label>
              <Input
                id="notice-title"
                value={newNotice.titulo}
                onChange={e => setNewNotice({ ...newNotice, titulo: e.target.value })}
                placeholder="Título do aviso"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notice-description">Descrição</Label>
              <Input
                id="notice-description"
                value={newNotice.descricao}
                onChange={e => setNewNotice({ ...newNotice, descricao: e.target.value })}
                placeholder="Descrição do aviso"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notice-type">Tipo</Label>
              <select
                id="notice-type"
                className="border rounded px-2 py-1"
                value={newNotice.tipo}
                onChange={e => setNewNotice({ ...newNotice, tipo: e.target.value as "urgente" | "importante" })}
              >
                <option value="urgente">Urgente</option>
                <option value="importante">Importante</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notice-date">Data</Label>
              <Input
                id="notice-date"
                type="date"
                value={newNotice.data}
                onChange={e => setNewNotice({ ...newNotice, data: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full">Adicionar Aviso</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
} 