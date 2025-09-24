import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import AdminDashboard from "./AdminDashboard"
import LogoutButton from "@/app/components/LogoutButton"

export default async function AdminPage() {
  const cookieStore = await cookies() // ✅ Made async and awaited
  const isAdmin = cookieStore.get("isAdmin")?.value === "true"

  if (!isAdmin) {
    redirect("/admin/login")
  }

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <LogoutButton />
      </div>
      <AdminDashboard />
    </div>
  )
}