import { NextRequest, NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function POST(req: NextRequest) {
  console.log('Route hit: /api/messages/get')

  const client = await pool.connect()

  try {
    const { anonToken } = await req.json()
    console.log('Fetching messages for token:', anonToken)

    const userRes = await client.query('SELECT id FROM users WHERE anon_token = $1', [anonToken])
    if (userRes.rowCount === 0) {
      console.warn('User not found for token:', anonToken)
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const userId = userRes.rows[0].id
    console.log('Found user ID:', userId)

    const messagesRes = await client.query(
      'SELECT id, content, from_admin FROM messages WHERE user_id = $1 ORDER BY created_at ASC',
      [userId]
    )

    const transformedMessages = messagesRes.rows.map(row => ({
  id: row.id,
  content: row.content,
  fromAdmin: row.from_admin  // Convert snake_case to camelCase
}))

console.log('Fetched messages:', transformedMessages)
return NextResponse.json(transformedMessages)

    console.log('Fetched messages:', messagesRes.rows)
    return NextResponse.json(messagesRes.rows)
  } catch (err) {
    console.error('Error in /api/messages/get:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  } finally {
    client.release()
  }
}
