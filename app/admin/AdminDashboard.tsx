"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  anon_token: string
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users/get")
        if (!res.ok) {
          console.error("Failed to fetch users")
          return
        }

        const data = await res.json()
        setUsers(data)
      } catch (err) {
        console.error("Error fetching users:", err)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {users.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id}>
              <button
                onClick={() => router.push(`/free-services/chat/${user.anon_token}?admin=true`)}
                className="text-pink-600 hover:underline"
              >
                {user.anon_token}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
