import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShoppingCart, CheckCircle } from "lucide-react"

interface CleaningProductsPerson {
  nome: string
  apartamento: string
  avatar: string
  dataCompra: string
}

interface CleaningProductsHistory {
  nome: string
  apartamento: string
  data: string
  itens: string
  status: string
}

interface CleaningProductsProps {
  nextResponsible?: CleaningProductsPerson
  purchaseHistory?: CleaningProductsHistory[]
}

export function CleaningProducts({ 
  nextResponsible = {
    nome: "Carlos Lima",
    apartamento: "203",
    avatar: "/placeholder.svg?height=40&width=40",
    dataCompra: "20/01/2025",
  },
  purchaseHistory = [
    {
      nome: "Ana Costa",
      apartamento: "302",
      data: "05/01/2025",
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
}: CleaningProductsProps) {
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
              <p className="text-sm text-purple-600">Data: {nextResponsible.dataCompra}</p>
            </div>
          </div>
        </div>

        {/* Purchase History */}
        <div>
          <h4 className="font-medium mb-3">Últimas Compras</h4>
          <div className="space-y-2">
            {purchaseHistory.map((item, index) => (
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
  )
} 