import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Only redirect when accessed directly via *.vercel.app
  // When accessed via rewrite from ai-gastro-hub, the x-forwarded-host
  // will be www.ki-gastronomie.com
  if (host.endsWith('.vercel.app')) {
    const forwardedHost = request.headers.get('x-forwarded-host') || '';
    if (!forwardedHost.includes('ki-gastronomie.com')) {
      const path = request.nextUrl.pathname;
      return NextResponse.redirect(
        `https://www.ki-gastronomie.com/staedte/mannheim${path}`,
        308
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
