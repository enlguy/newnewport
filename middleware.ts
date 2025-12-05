import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

const AGGRESSIVE_BOTS = [
  "facebookexternalhit",
  "Facebot",
  "meta-externalagent",
  "meta-webindexer/1.1", 
  "HeadlessChrome",      
  "node",          
];

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || ""
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded?.split(",")[0]?.trim() || "unknown"

  console.log(`[LOG] IP: ${ip} | UA: ${ua}`)

  const isBlockedBot = AGGRESSIVE_BOTS.some(botString =>
    ua.includes(botString)
  );

  if (isBlockedBot) {
    console.log(`MIDDLEWARE BLOCK: Blocking aggressive UA: ${ua}`);
    
    // Returning a 403 Forbidden stops the request immediately.
    const response = new NextResponse("Blocked", { status: 403 });
    response.headers.set("Cache-Control", "public, max-age=900");
    return response;
  }

  if (ua.includes("facebookexternalhit") || ua.includes("Facebot") ||
  ua.includes("meta-externalagent")) {
    const response = new NextResponse("Blocked", { status: 403 })
    response.headers.set("Cache-Control", "public, max-age=900")
    return response
  }

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
