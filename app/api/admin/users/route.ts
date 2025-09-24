import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function GET() {
  const client = await pool.connect()

  try {
    const res = await client.query(`
      SELECT u.anon_token, m.content AS latest_message
      FROM users u
      LEFT JOIN LATERAL (
        SELECT content
        FROM messages
        WHERE user_id = u.id
        ORDER BY created_at DESC
        LIMIT 1
      ) m ON true
      ORDER BY m.created_at DESC NULLS LAST
    `)

    return NextResponse.json(res.rows)
  } catch (err) {
    console.error('Error fetching admin users:', err)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  } finally {
    client.release()
  }
}
