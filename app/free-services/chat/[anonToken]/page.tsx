"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

type ChatMessage = {
  id: number
  content: string
  fromAdmin: boolean
}

export default function ChatPage() {
  const { anonToken } = useParams()
  const router = useRouter()

  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [input, setInput] = useState("")

  useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search)
  setIsAdmin(urlParams.get('admin') === 'true')
  }, [])

  // Redirect if no token
  useEffect(() => {
    if (!anonToken) {
      const newToken = crypto.randomUUID()
      console.log("Redirecting to new token:", newToken)
      router.replace(`/${newToken}`)
    }
  }, [anonToken])

  // Create user + load messages
 useEffect(() => { 
  const initChat = async () => {
    if (!anonToken) return

    console.log("Creating user with token:", anonToken)

    const createRes = await fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify({ anonToken }),
      headers: { "Content-Type": "application/json" },
    })

    if (!createRes.ok) {
      console.error("Failed to create user")
      return
    }

    console.log("User created, now fetching messages")

    const fetchRes = await fetch("/api/messages/get", {
      method: "POST",
      body: JSON.stringify({ anonToken }),
      headers: { "Content-Type": "application/json" },
    })

    if (fetchRes.ok) {
      const data = await fetchRes.json()
      console.log("Loaded messages:", data)

      if (data.length === 0) {
        setMessages([
          {
            id: 1,
            content: "Hello, feel free to share whatever is on your mind.",
            fromAdmin: true,
          },
        ])
      } else {
        setMessages(data)
      }
    } else {
      console.error("Failed to load messages")
    }
  }

  initChat()
}, [anonToken]) 

 const handleSend = async () => {
  if (!input.trim()) return

  const newMessage: ChatMessage = {
    id: Date.now(),
    content: input,
    fromAdmin: isAdmin  // This was the key change - use isAdmin instead of hardcoded false
  }

  setMessages((prev) => [...prev, newMessage])
  setInput("")

  try {
    console.log("Sending message:", input, "fromAdmin:", isAdmin)

    await fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify({
        anonToken,
        content: input,
        fromAdmin: isAdmin  // Also send this to your API
      }),
      headers: { "Content-Type": "application/json" },
    })

    console.log("Message sent")
  } catch (err) {
    console.error("Failed to send message:", err)
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full shadow-lg rounded-2xl bg-white/90 backdrop-blur flex flex-col h-[80vh]">
        <div className="p-4 border-b border-pink-100 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">A Listening Ear</h1>
          <p className="text-gray-500 text-sm">Your private space to talk</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.fromAdmin ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-sm text-sm leading-relaxed 
                  ${msg.fromAdmin ? "bg-pink-100 text-gray-700" : "bg-pink-500 text-white"}`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-pink-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 rounded-xl border border-pink-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            onClick={handleSend}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl shadow"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
