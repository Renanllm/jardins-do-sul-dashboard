import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface FloatingContactButtonProps {
  onClick?: () => void
}

export function FloatingContactButton({ onClick }: FloatingContactButtonProps) {
  return (
    <div className="fixed bottom-6 right-6">
      <Button size="lg" className="rounded-full shadow-lg" onClick={onClick}>
        <Phone className="h-5 w-5 mr-2" />
        <span className="hidden sm:inline">Contato</span>
      </Button>
    </div>
  )
} 