import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const publicPaths = ['/login', '/signup'];
  const isPublic = publicPaths.includes(path);

  const token = request.cookies.get('user')?.value;

  // If logged-in user tries to access login/signup → redirect to home
  if (isPublic && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If not logged in and trying to access protected page → redirect to login
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/blogs', '/product', '/setting', '/login', '/signup'],
};
