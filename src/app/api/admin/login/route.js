import { NextResponse } from 'next/server';
import { SignJWT } from 'jose/jwt/sign';

export async function POST(request) {
  if (!process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
    return NextResponse.json({ error: 'Admin authentication is not configured' }, { status: 503 });
  }

  const { password } = await request.json();

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT({ admin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret);

  const res = NextResponse.json({ success: true });
  res.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  return res;
}
