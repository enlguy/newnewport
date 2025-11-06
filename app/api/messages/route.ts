import { NextRequest, NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function POST(req: NextRequest) {
  console.log('Route hit: /api/messages')

  const { anonToken, content, fromAdmin = false, captchaToken } = await req.json()
  console.log('Incoming message:', { anonToken, content, fromAdmin })

  // ✅ Verify CAPTCHA
  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
  })

  const data = await verifyRes.json()

  if (!data.success) {
    console.warn("CAPTCHA verification failed:", data)
    return NextResponse.json({ error: "CAPTCHA verification failed" }, { status: 403 })
  }

  const client = await pool.connect()

  try {
    // Find user by anonToken
    const userRes = await client.query('SELECT id FROM users WHERE anon_token = $1', [anonToken])
    if (userRes.rowCount === 0) {
      console.warn('User not found for anonToken:', anonToken)
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const userId = userRes.rows[0].id

    // Insert message
    await client.query(
      'INSERT INTO messages (user_id, content, from_admin) VALUES ($1, $2, $3)',
      [userId, content, fromAdmin]
    )
    console.log('Message saved successfully for user:', userId)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error saving message:', err)
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 })
  } finally {
    client.release()
  }
}
