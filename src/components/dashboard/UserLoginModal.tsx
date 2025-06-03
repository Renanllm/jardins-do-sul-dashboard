import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface UserLoginModalProps {
  isOpen: boolean
  nameInput: string
  setNameInput: (name: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export function UserLoginModal({ 
  isOpen, 
  nameInput, 
  setNameInput, 
  onSubmit 
}: UserLoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Identifique-se</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="user-name">Qual seu nome?</Label>
            <Input
              id="user-name"
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              placeholder="Digite seu nome"
              required
              autoFocus
            />
          </div>
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 