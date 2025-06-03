import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

interface Reservation {
  area: string
  date: string
  apartment: string
}

interface CommonAreaProps {
  upcomingReservations?: Reservation[]
}

export function CommonArea({ 
  upcomingReservations = [
    { area: "Salão", date: "20/01", apartment: "Apt 301" },
    { area: "Churrasqueira", date: "22/01", apartment: "Apt 102" }
  ]
}: CommonAreaProps) {
  return (
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
            {upcomingReservations.map((reservation, index) => (
              <p key={index}>• {reservation.area}: {reservation.date} - {reservation.apartment}</p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 