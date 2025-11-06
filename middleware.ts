import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || ""

  // 🛑 Block Meta crawlers
  if (ua.includes("facebookexternalhit") || ua.includes("Facebot")) {
    return new NextResponse("Blocked", { status: 403 })
  }

  // ✅ Check for anon_token cookie
  const cookie = request.cookies.get('anon_token')

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

  // ✅ Let request through if cookie exists
  return NextResponse.next()
}

export const config = {
  matcher: ['/free-services/chat/:path*'],
}
