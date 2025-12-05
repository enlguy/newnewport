import type { Context } from "https://edge.netlify.com/";

function isProblematicIP(ip: string): boolean {
  const ipPrefixes = [
        '57.141.0.', 
        '57.141.2.', 
        '57.141.6.', 
    ];

    return ipPrefixes.some(prefix => ip.startsWith(prefix));
}

export default async (request: Request, context: Context) => {
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  const clientIP = request.headers.get('x-nf-client-connection-ip') || '';

  const requestedURL = new URL(request.url).pathname;
  console.log(`BLOCKED CRAWLER (Multi-Layer): PATH=${requestedURL}, IP=${clientIP}, UA=${userAgent}, REFERER=${referer}`);
  
  // List of known aggressive bot strings (use all lowercase for case-insensitive checking)
  const aggressiveBots = [
    'meta-externalagent',
    'meta-webindexer/1.1',
    'facebookexternalhit',
    'gptbot',
    'claude-bot',
    'perplexitybot',
    'bytespider',
  ]; 

  const isBadReferer = referer.toLowerCase().includes('facebook.com') || 
                       referer.toLowerCase().includes('instagram.com') ||
                       referer.toLowerCase().includes('fb.me');

  const isBlockedBot = aggressiveBots.some(botString => 
    userAgent.toLowerCase().includes(botString.toLowerCase())
  ) || isProblematicIP(clientIP) || isBadReferer;

  if (isBlockedBot) {
    console.log(`--- BLOCKED SUCCESS: ${requestedURL} ---`);
    return new Response(null, { 
      status: 403, 
      statusText: "Access Denied by Security Filter"
    });
  }

  return context.next();
};