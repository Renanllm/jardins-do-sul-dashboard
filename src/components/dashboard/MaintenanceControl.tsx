import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench } from "lucide-react"

interface MaintenanceRecord {
  tipo: string
  data: string
  valor: string
  responsavel: string
}

interface MaintenanceControlProps {
  maintenanceRecords?: MaintenanceRecord[]
}

export function MaintenanceControl({ 
  maintenanceRecords = [
    { tipo: "Limpeza da Caixa D'água", data: "xx/xx/2023", valor: "R$-", responsavel: "Empresa X" },
    { tipo: "Pintura do Prédio", data: "xx/xx/2023", valor: "R$-", responsavel: "Empresa Y" },
  ]
}: MaintenanceControlProps) {
  return (
    <Card className="xl:col-span-3">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Wrench className="h-5 w-5 text-orange-600" />
          <span>Controle de Manutenções</span>
        </CardTitle>
        <CardDescription>Histórico de manutenções realizadas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 xl:space-y-0 xl:grid xl:grid-cols-3 xl:gap-4">
          {maintenanceRecords.map((maintenance, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-sm">{maintenance.tipo}</h4>
                <Badge variant="outline">{maintenance.valor}</Badge>
              </div>
              <p className="text-xs text-gray-600 mb-1">Data: {maintenance.data}</p>
              <p className="text-xs text-gray-700">Responsável: {maintenance.responsavel}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 