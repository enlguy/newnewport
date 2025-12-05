import type { Context } from "https://edge.netlify.com/";

export default async (request: Request, context: Context) => {
    const userAgent = request.headers.get('user-agent') || '';

    // 1. Identify the aggressive bots that ignore other blocks
    const aggressiveBots = [
        'meta-webindexer/1.1',
        'meta-externalagent',
        'facebookexternalhit',
    ];

    const isAggressiveBot = aggressiveBots.some(botString =>
        userAgent.toLowerCase().includes(botString.toLowerCase())
    );

    // 2. Serve the trap only to the target bots
    if (isAggressiveBot) {
        // Generate a new, unique path fragment using a large random number
        const trapId = Math.floor(Math.random() * 9999999999999);
        const nextTrapPath = `/trap-maze/${trapId}`;

        // Create the small HTML payload
        const html = `<!DOCTYPE html>
<html>
<head>
    <title>Lost in the Data</title>
    <meta name="robots" content="noindex, nofollow">
</head>
<body>
    <p>Searching for data...</p>
    <a href="${nextTrapPath}">Next Page</a>
</body>
</html>`;

        console.log(`TRAPPED CRAWLER: ${userAgent} redirected to ${nextTrapPath}`);

        // Return a 200 OK response with the minimal HTML trap
        return new Response(html, {
            status: 200,
            headers: {
                "content-type": "text/html; charset=utf-8",
                "X-Robots-Tag": "noindex, nofollow", // Explicit instruction not to index
                "cache-control": "no-store, no-cache, must-revalidate", // Prevent caching
            },
        });
    }

    // 3. Allow all other requests (humans/legitimate bots) to proceed normally
    return context.next();
};