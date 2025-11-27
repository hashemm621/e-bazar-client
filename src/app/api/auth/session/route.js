// src/app/api/auth/session/route.js
import { getSession } from '@auth0/nextjs-auth0/server';

export async function GET(req) {
  const session = await getSession(req);
  return new Response(JSON.stringify(session || {}), {
    headers: { 'Content-Type': 'application/json' },
  });
}
