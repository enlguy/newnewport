import { NextRequest, NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function GET(req: NextRequest) {
  const client = await pool.connect()

  try {
    const res = await client.query(`
      SELECT id, anon_token FROM users ORDER BY created_at DESC
    `)
    return NextResponse.json(res.rows)
  } catch (err) {
    console.error('Error fetching users:', err)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  } finally {
    client.release()
  }
}
