import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const publicPaths = ['/login', '/signup'];
  const isPublicPath = publicPaths.includes(path);

  const userToken = request.cookies.get('user')?.value;

  // Logged-in user cannot access login/signup
  if (isPublicPath && userToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Not logged-in user cannot access private pages
  if (!isPublicPath && !userToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/blogs', '/login', '/product', '/setting', '/signup'],
};
