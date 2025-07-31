import '@/ai/genkit';
import createNextRouteHandler from '@genkit-ai/next';

export const dynamic = 'force-dynamic';

const handler = createNextRouteHandler();
export { handler as GET, handler as POST };
