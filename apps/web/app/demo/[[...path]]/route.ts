import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  const { hostname, protocol } = request.nextUrl;
  const local = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
  const base = process.env.NEXT_PUBLIC_DEMO_URL ||
    (local ? protocol + '//' + hostname + ':3001' : 'https://demo.' + hostname.replace(/^www\./, ''));
  const destination = new URL(base);
  destination.pathname = request.nextUrl.pathname.replace(/^\/demo/, '') || '/';
  destination.search = request.nextUrl.search;
  return NextResponse.redirect(destination);
}
