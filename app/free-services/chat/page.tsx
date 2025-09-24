"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ChatRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    // Generate a new token and redirect
    const newToken = crypto.randomUUID()
    console.log("Generated new token:", newToken)
    router.replace(`/free-services/chat/${newToken}`)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Starting your chat...</p>
      </div>
    </div>
  )
}