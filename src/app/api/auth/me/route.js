import { getSession } from "@auth0/nextjs-auth0";

export async function GET(req) {
  const session = await getSession(req);

  if (!session) {
    return new Response(JSON.stringify({ user: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ user: session.user }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
