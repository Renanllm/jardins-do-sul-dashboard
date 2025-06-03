import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Settings } from "lucide-react"

interface ContactInfo {
  type: string
  label: string
  action?: () => void
}

interface QuickContactProps {
  contacts?: ContactInfo[]
}

export function QuickContact({ 
  contacts = [
    { type: "phone", label: "Síndico: (11) 99999-9999" },
    { type: "mail", label: "Administradora" },
    { type: "settings", label: "Portaria" }
  ]
}: QuickContactProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "phone":
        return <Phone className="h-4 w-4 mr-2" />
      case "mail":
        return <Mail className="h-4 w-4 mr-2" />
      case "settings":
        return <Settings className="h-4 w-4 mr-2" />
      default:
        return <Phone className="h-4 w-4 mr-2" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-red-600" />
          <span>Contato Rápido</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {contacts.map((contact, index) => (
          <Button 
            key={index} 
            className="w-full" 
            variant="outline"
            onClick={contact.action}
          >
            {getIcon(contact.type)}
            {contact.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
} 