import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShoppingCart, CheckCircle } from "lucide-react"

interface CleaningProductsPerson {
  nome: string
  apartamento: string
  avatar: string
  dataCompra?: string
}

interface CleaningProductsHistory {
  nome: string
  apartamento: string
  data?: string
  itens: string
  status: string
  valor?: string
}

interface CleaningProductsProps {
  nextResponsible?: CleaningProductsPerson
  purchaseHistory?: CleaningProductsHistory[]
}

const PRODUCTS_TO_BUY = [
  "2L água sanitária",
  "2L desinfetante",
  "1.6kg sabão em pó",
  "1 vidro de limpa vidro",
]

export function CleaningProducts({ 
  nextResponsible = {
    nome: "Célia",
    apartamento: "101",
    avatar: "/placeholder.svg?height=40&width=40",
    dataCompra: "",
  },
  purchaseHistory = [
    {
      nome: "Ézio",
      apartamento: "202",
      data: "07/03/2025",
      itens: "",
      status: "comprado",
      valor: "R$ 38,43",
    },
    {
      nome: "Renan",
      apartamento: "102",
      data: "09/05/2025",
      itens: "",
      status: "comprado",
      valor: "R$ 35,67",
    },
  ]
}: CleaningProductsProps) {
  // Filter only completed purchases for history
  const completedPurchases = purchaseHistory.filter(item => item.status === "comprado")

  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <ShoppingCart className="h-5 w-5 text-purple-600" />
          <span>Produtos de Limpeza</span>
        </CardTitle>
        <CardDescription>Próximo responsável e compras</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Products to Buy */}
        <div className="p-3 bg-purple-100 rounded-lg border-l-4 border-l-purple-400">
          <h4 className="font-medium text-purple-900 mb-2">Produtos </h4>
          <div className="grid grid-cols-2 gap-1 text-xs text-gray-800">
            {PRODUCTS_TO_BUY.map((prod, idx) => (
              <div key={idx} className="flex items-center">
                <span className="w-1 h-1 bg-purple-600 rounded-full mr-2"></span>
                {prod}
              </div>
            ))}
          </div>
        </div>

        {/* Next Responsible */}
        <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-l-purple-500">
          <h4 className="font-medium text-purple-900 mb-2">Próximo Responsável</h4>
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={nextResponsible.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {nextResponsible.nome
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{nextResponsible.nome}</p>
              <p className="text-sm text-gray-600">Apt. {nextResponsible.apartamento}</p>
              <p className="text-sm text-purple-600">Data: {nextResponsible.dataCompra || ""}</p>
            </div>
          </div>
        </div>

        {/* Purchase History */}
        <div>
          <h4 className="font-medium mb-3">Últimas Compras</h4>
          <div className="space-y-2">
            {completedPurchases.map((item, index) => (
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
                    {item.valor && (
                      <p className="text-xs text-purple-600 font-medium">{item.valor}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">Pago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 