"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()
  const [isVerifying, setIsVerifying] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handleStartChat = async () => {
    const captchaToken = (window as any).grecaptcha?.getResponse()
    if (!captchaToken) {
      alert("Please complete the CAPTCHA")
      return
    }

    setIsVerifying(true)

    const verifyRes = await fetch("/api/verify-captcha", {
      method: "POST",
      body: JSON.stringify({ captchaToken }),
      headers: { "Content-Type": "application/json" },
    })

    const data = await verifyRes.json()
    if (!data.success) {
      alert("CAPTCHA failed")
      setIsVerifying(false)
      return
    }

    const newToken = crypto.randomUUID()
    router.push(`/free-services/chat/${newToken}`)
  }

  return (
    <>

      {/* Rest of your layout */}
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-4 pt-12 pb-4">
        <div className="max-w-2xl w-full shadow-lg rounded-2xl p-6 bg-white/80 backdrop-blur">
          <div className="space-y-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">A Listening Ear</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sometimes, all we need is someone to listen. This isn&apos;t about advice,
              fixing things, or judgment — just a space where you can share
              what&apos;s on your mind and know you&apos;re heard.
            </p>

            <div className="bg-pink-100 rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 italic text-lg">
                &ldquo;You talk, I&apos;ll listen — like a friend over coffee.&rdquo;
              </p>
            </div>

            <p className="text-gray-600">
              If you&apos;d like to reach out, just click below. Whether it&apos;s five
              minutes or an hour, I&apos;ll be here.
            </p>
            {/* CAPTCHA Widget */}
      <div className="flex justify-center mt-6">
        <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}></div>
      </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleStartChat}
                disabled={isVerifying}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl shadow-md"
              >
                {isVerifying ? "Verifying..." : "Talk With Me"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pb-10">
        <Link
          href="/"
          className="text-pink-600 hover:text-pink-800 underline text-sm absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          ← Go Back to Homepage
        </Link>
      </div>
    </>
  )
}
