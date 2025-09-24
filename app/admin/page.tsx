'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AdminPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
      const res = await fetch('/api/admin/users')
      if (!res.ok) throw new Error('Failed to fetch users')
      const data = await res.json()
      setUsers(data)
      } catch (err) {
      console.error('Error loading users:', err)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.anon_token}>
            <Link href={`/free-services/chat/${user.anon_token}`}>
              Visitor {user.anon_token.slice(0, 8)}... → Last message: {user.latest_message}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
