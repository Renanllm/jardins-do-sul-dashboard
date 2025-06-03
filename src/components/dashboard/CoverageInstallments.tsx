import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign } from "lucide-react"

interface CoverageInstallment {
  parcela: number
  valor: string
  vencimento: string
  pagos: number
  total: number
}

interface CoverageInstallmentsProps {
  installments?: CoverageInstallment[]
}

export function CoverageInstallments({ 
  installments = [
    { parcela: 1, valor: "R$ 2.500,00", vencimento: "15/01/2025", pagos: 8, total: 12 },
    { parcela: 2, valor: "R$ 2.500,00", vencimento: "15/02/2025", pagos: 6, total: 12 },
    { parcela: 3, valor: "R$ 2.500,00", vencimento: "15/03/2025", pagos: 4, total: 12 },
    { parcela: 4, valor: "R$ 2.500,00", vencimento: "15/04/2025", pagos: 2, total: 12 },
  ]
}: CoverageInstallmentsProps) {
  return (
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
          {installments.map((installment, index) => (
            <div key={index} className="p-3 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">Parcela {installment.parcela}</p>
                  <p className="text-sm text-gray-600">{installment.valor}</p>
                </div>
                <Badge variant={installment.pagos === installment.total ? "default" : "secondary"}>
                  {installment.pagos}/{installment.total}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-600">Venc: {installment.vencimento}</p>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${(installment.pagos / installment.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 