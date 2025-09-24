"use client"

import { useRouter } from "next/navigation"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", {
        method: "POST"
      })

      if (res.ok) {
        router.push("/admin/login")
      } else {
        console.error("Logout failed")
      }
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition-colors"
    >
      Logout
    </button>
  )
}