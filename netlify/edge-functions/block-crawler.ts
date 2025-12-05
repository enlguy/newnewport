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
  // Get the User-Agent header, setting it to an empty string if missing
  const userAgent = request.headers.get('user-agent') || '';
  
  // List of known aggressive bot strings (use all lowercase for case-insensitive checking)
  const aggressiveBots = [
    'meta-externalagent',
    'meta-webindexer/1.1',
    'facebookexternalhit',
    'gptbot',
    'claude-bot',
    'perplexitybot',
    'bytespider',
    // Add any specific user-agent strings you found in your logs here
  ]; 

  // **CRITICAL FIX:** Use .some() to check if ANY item in the array is included in the userAgent string.
  const isBlockedBot = aggressiveBots.some(botString => 
    userAgent.toLowerCase().includes(botString.toLowerCase())
  );

  if (isBlockedBot) {
    // Immediate 403 Forbidden response at the network edge
    return new Response(null, { 
      status: 403, 
      statusText: "Access Denied by Security Filter"
    });
  }

  // If the agent is clean, allow the request to proceed to your site/function
  // Use context.next() if you are chaining functions or just return to pass through
  return context.next();
};