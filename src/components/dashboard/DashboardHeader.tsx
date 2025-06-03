import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DashboardHeaderProps {
  userName: string | null
}

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo and Title */}
        <div className="flex items-center space-x-4">
          <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            <img
              src="/jardins-do-sul.jpeg"
              alt="Jardins do Sul"
              className="h-12 w-12 object-cover rounded-md"
              style={{ minWidth: 48, minHeight: 48 }}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Condomínio Residencial</h1>
            <p className="text-sm text-gray-600">Jardins do Sul - Gestão Integrada</p>
          </div>
        </div>
        {/* Right: User Identification - Modern Style */}
        <div className="flex items-center space-x-3 bg-gray-100 px-4 py-2 rounded-xl shadow-sm">
          <Avatar className="h-10 w-10 border-2 border-blue-500 shadow">
            <AvatarImage src={userName ? undefined : "/placeholder.svg?height=40&width=40"} />
            <AvatarFallback className="bg-blue-500 text-white font-bold">
              {userName ? userName.split(" ").map((n) => n[0]).join("") : "?"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base font-semibold text-gray-900 leading-tight">
              {userName ? userName : "Visitante"}
            </p>
            <p className="text-xs text-gray-500">Morador</p>
          </div>
        </div>
      </div>
    </header>
  )
} 