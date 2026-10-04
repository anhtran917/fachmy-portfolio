import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose/jwt/verify';

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // Admin authentication
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get('admin_token')?.value;
    if (!token) return NextResponse.redirect(new URL('/admin/login', request.url));
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);
    } catch {
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('admin_token');
      return response;
    }
    return NextResponse.next();
  }

  // Coming-soon gate. Static assets, APIs, and crawlers bypass it.
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
  const isBot =
    /bot|crawl|spider|slurp|googlebot|bingbot|yandex|baidu|duckduck|facebookexternalhit|twitterbot|linkedinbot|embedly|quora|pinterest|redditbot|applebot|gptbot|chatgpt-user|google-extended|anthropic|claudebot|perplexitybot|bytespider|ccbot|cohere-ai|ia_archiver|semrush|ahrefsbot|dotbot|rogerbot|seznambot|sogou|exabot|petalbot|mj12bot/i.test(userAgent);

  const skip =
    isBot ||
    pathname === '/coming-soon' ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.');

  if (!skip) {
    const bypass = request.cookies.get('cs_bypass')?.value;
    const comingSoonPassword = process.env.COMING_SOON_PASSWORD;
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (
      (!comingSoonPassword || bypass !== comingSoonPassword) &&
      supabaseUrl &&
      serviceRoleKey
    ) {
      try {
        const response = await fetch(
          `${supabaseUrl}/rest/v1/settings?key=eq.coming_soon&select=value`,
          {
            headers: {
              apikey: serviceRoleKey,
              Authorization: `Bearer ${serviceRoleKey}`,
            },
            cache: 'no-store',
          }
        );
        const [row] = await response.json();
        if (row?.value === true) {
          return NextResponse.redirect(new URL('/coming-soon', request.url));
        }
      } catch {
        // Keep the public site available if Supabase is unreachable.
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$).*)'],
};
