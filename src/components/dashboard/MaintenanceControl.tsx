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
    { tipo: "Limpeza da Caixa D'água", data: "10/01/2024", valor: "R$ 800,00", responsavel: "Empresa AquaLimpa" },
    { tipo: "Pintura da Fachada", data: "15/12/2023", valor: "R$ 5.200,00", responsavel: "Pinturas Silva" },
    { tipo: "Reparo do Portão", data: "28/11/2023", valor: "R$ 350,00", responsavel: "Serralheria Santos" },
  ]
}: MaintenanceControlProps) {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Wrench className="h-5 w-5 text-orange-600" />
          <span>Controle de Manutenções</span>
        </CardTitle>
        <CardDescription>Histórico de manutenções realizadas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {maintenanceRecords.map((maintenance, index) => (
            <div key={index} className="p-3 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">{maintenance.tipo}</p>
                </div>
                <Badge variant="outline">{maintenance.valor}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-600">Data: {maintenance.data}</p>
                <span className="text-xs text-gray-700">Responsável: {maintenance.responsavel}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 