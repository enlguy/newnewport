import { NextRequest, NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const { anonToken } = await req.json()
    console.log('Creating user with token:', anonToken)

    const client = await pool.connect()

    try {
      await client.query(`
        INSERT INTO users (anon_token)
        VALUES ($1)
        ON CONFLICT (anon_token) DO NOTHING
      `, [anonToken])

      return NextResponse.json({ success: true })
    } catch (dbErr) {
      console.error('Database error:', dbErr)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    } finally {
      client.release()
    }

  } catch (parseErr) {
    console.error('Request body parse error:', parseErr)
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
}
