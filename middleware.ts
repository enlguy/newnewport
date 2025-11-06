/* import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('anon_token')

  // Only redirect if the cookie is missing
  if (!cookie) {
    const token = uuidv4()
    console.log('Redirecting to:', token)

    const response = NextResponse.redirect(
      new URL(`/free-services/chat/${token}`, request.url)
    )

    response.cookies.set('anon_token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/free-services/chat/:path*'], 
}
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return new Response("Chat is temporarily offline for maintenance.", { status: 503 })
}

export const config = {
  matcher: ['/free-services/chat/:path*'],
}
