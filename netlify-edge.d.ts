declare module "https://edge.netlify.com/" {
  export interface Context {
    next: () => Promise<Response>;
    ip: string;
    geo: {
      city?: string;
      country?: {
        code?: string;
        name?: string;
      };
    };
  }
  
  const handler: (request: Request, context: Context) => Response | Promise<Response>;
  export default handler;
}