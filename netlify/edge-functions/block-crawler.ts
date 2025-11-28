// You can optionally import types for better safety, though not strictly required
import type { Context } from "https://edge.netlify.com/";

export default async (request: Request, context: Context) => {
  const userAgent = request.headers.get('user-agent') || '';
  
  // *** CRITICAL: Replace 'BAD_META_USER_AGENT' with the exact string you found in your Vercel logs ***
  const badCrawler = 'BAD_META_USER_AGENT'; 

  // Check if the User-Agent header contains the identified malicious string
  if (userAgent.includes(badCrawler)) {
    // Immediate 403 Forbidden response at the network edge
    return new Response('Access denied for security reasons.', { status: 403 });
  }

  // If the agent is clean, allow the request to proceed to your Next.js function
  return context.next();
};