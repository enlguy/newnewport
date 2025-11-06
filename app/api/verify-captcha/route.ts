import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { captchaToken } = await req.json()

  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
  })

  const data = await verifyRes.json()

  if (!data.success) {
    return NextResponse.json({ success: false }, { status: 403 })
  }

  return NextResponse.json({ success: true })
}
