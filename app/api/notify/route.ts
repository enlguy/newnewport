import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import NewVisitorMessage from '@/emails/NewVisitorMessage'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { anonToken } = await req.json()

  const emailComponent = NewVisitorMessage({ anonToken }) 

  await resend.emails.send({
    from: 'Chat App <onboarding@resend.dev>',
    to: process.env.ADMIN_EMAIL!,
    subject: `New message from visitor ${anonToken}`,
    react: emailComponent,
  })

  return NextResponse.json({ success: true })
}
