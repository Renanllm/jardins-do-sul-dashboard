// TODO: Replace mock data with real data sources in the future.
"use client"

import { useState, useEffect } from "react"
import {
  DashboardHeader,
  ImportantNotices,
  CleaningManagement,
  CleaningProducts,
  CoverageInstallments,
  MaintenanceControl,
  UpcomingEvents,
  CommonArea,
  QuickContact,
  UserLoginModal,
  FloatingContactButton
} from "@/components/dashboard"

export default function DashboardPage() {
  const [userName, setUserName] = useState<string | null>(null)
  const [nameInput, setNameInput] = useState("")
  const [showLoginModal, setShowLoginModal] = useState(false)

  // Check localStorage for user name on mount
  useEffect(() => {
    const storedName = typeof window !== "undefined" ? localStorage.getItem("dashboard_user_name") : null
    if (storedName) {
      setUserName(storedName)
      setShowLoginModal(false)
    } else {
      setShowLoginModal(true)
    }
  }, [])

  // Save name to localStorage and state
  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault()
    if (nameInput.trim()) {
      localStorage.setItem("dashboard_user_name", nameInput.trim())
      setUserName(nameInput.trim())
      setShowLoginModal(false)
    }
  }

  return (
    <>
      <UserLoginModal
        isOpen={showLoginModal}
        nameInput={nameInput}
        setNameInput={setNameInput}
        onSubmit={handleSaveName}
      />
      
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader userName={userName} />

        <div className="max-w-7xl mx-auto px-4 py-6">
          <ImportantNotices />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <CleaningManagement />
            <CleaningProducts />
            <CoverageInstallments />
            <MaintenanceControl />
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <UpcomingEvents />
            <CommonArea />
            <QuickContact />
          </div>
        </div>

        <FloatingContactButton />
      </div>
    </>
  )
} 