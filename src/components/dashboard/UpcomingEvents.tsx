import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface Event {
  day: string
  month: string
  title: string
  time: string
  location: string
  bgColor: string
  textColor: string
}

interface UpcomingEventsProps {
  events?: Event[]
}

export function UpcomingEvents({ 
  events = [
    {
      day: "25",
      month: "JAN",
      title: "Assembleia Geral",
      time: "19:00",
      location: "Salão de Festas",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      day: "30",
      month: "JAN",
      title: "Limpeza da Piscina",
      time: "08:00",
      location: "Área de Lazer",
      bgColor: "bg-gray-50",
      textColor: "text-gray-600"
    }
  ]
}: UpcomingEventsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-indigo-600" />
          <span>Próximos Eventos</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {events.map((event, index) => (
            <div key={index} className={`flex items-center space-x-3 p-2 ${event.bgColor} rounded`}>
              <div className="text-center">
                <p className={`text-lg font-bold ${event.textColor}`}>{event.day}</p>
                <p className={`text-xs ${event.textColor}`}>{event.month}</p>
              </div>
              <div>
                <p className="text-sm font-medium">{event.title}</p>
                <p className="text-xs text-gray-600">{event.time} - {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 