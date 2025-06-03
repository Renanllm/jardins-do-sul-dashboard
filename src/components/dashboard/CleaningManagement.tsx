import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sparkles, CheckCircle } from "lucide-react"

interface CleaningPerson {
  nome: string
  apartamento: string
  avatar: string
}

interface CleaningHistory {
  nome: string
  data: string
  status: string
  comprovante: boolean
}

interface CleaningManagementProps {
  cleaningRotation?: CleaningPerson[]
  cleaningHistory?: CleaningHistory[]
}

export function CleaningManagement({ 
  cleaningRotation = [
    { nome: "Célia", apartamento: "101", avatar: "/placeholder.svg?height=40&width=40" },
    { nome: "Kalina", apartamento: "201", avatar: "/placeholder.svg?height=40&width=40" },
    { nome: "Rateio", apartamento: "001", avatar: "/placeholder.svg?height=40&width=40" },
    { nome: "Ézio", apartamento: "202", avatar: "/placeholder.svg?height=40&width=40" },
    { nome: "Renan", apartamento: "102", avatar: "/placeholder.svg?height=40&width=40" },
  ],
  cleaningHistory = [
    { nome: "Rateio", data: "31/05/2025", status: "pago", comprovante: true },
    { nome: "Kalina", data: "24/05/2025", status: "pago", comprovante: true },
    { nome: "Renan", data: "17/05/2025", status: "pago", comprovante: true },
    { nome: "Célia", data: "10/05/2025", status: "pago", comprovante: true },
    { nome: "Ézio", data: "03/05/2025", status: "pago", comprovante: true },
  ]
}: CleaningManagementProps) {
  
  // Helper to get next Saturday after a given date
  function getNextSaturday(date: Date): Date {
    const day = date.getDay();
    const diff = (6 - day + 7) % 7 || 7; // 6 = Saturday
    const nextSaturday = new Date(date);
    nextSaturday.setDate(date.getDate() + diff);
    return nextSaturday;
  }

  // Find last payment info
  const lastPayment = cleaningHistory[0];
  const lastPaymentDateParts = lastPayment.data.split("/"); // dd/mm/yyyy
  const lastPaymentDate = new Date(
    2025,
    Number(lastPaymentDateParts[1]) - 1,
    Number(lastPaymentDateParts[0])
  );
  
  // Find who is next in the rotation
  const lastIndex = cleaningRotation.findIndex(p => p.nome === lastPayment.nome);
  const nextIndex = (lastIndex + 1) % cleaningRotation.length;
  const nextCleaning = {
    ...cleaningRotation[nextIndex],
    dataVencimento: getNextSaturday(lastPaymentDate).toLocaleDateString("pt-BR"),
  };

  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <span>Gestão de Faxina</span>
        </CardTitle>
        <CardDescription>Próximo responsável e histórico</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Next Responsible */}
        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
          <h4 className="font-medium text-blue-900 mb-2">Próximo Responsável</h4>
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={nextCleaning.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {nextCleaning.nome
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{nextCleaning.nome}</p>
              <p className="text-sm text-gray-600">Apt. {nextCleaning.apartamento}</p>
              <p className="text-sm text-blue-600">Próxima faxina: {nextCleaning.dataVencimento}</p>
            </div>
          </div>
        </div>

        {/* History */}
        <div>
          <h4 className="font-medium mb-3">Últimos Pagamentos</h4>
          <ScrollArea className="h-48">
            <div className="space-y-2">
              {cleaningHistory.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
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
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">Pago</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
} 