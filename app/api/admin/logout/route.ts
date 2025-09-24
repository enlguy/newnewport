import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  const cookieStore = await cookies()
  
  // Delete the admin cookie
  cookieStore.delete("isAdmin")
  
  return NextResponse.json({ success: true })
}