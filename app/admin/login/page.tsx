"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
    })

    if (res.ok) {
      router.push("/admin")
    } else {
      alert("Invalid password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full border px-3 py-2 rounded mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
        >
          Login
        </button>
      </div>
    </div>
  )
}
