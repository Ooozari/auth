import { NextResponse } from 'next/server';

export function middleware(request) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login' || path === '/signup';


    const userToken = request.cookies.get('user')?.value;

    // If user is login he can acces private pages
    if (isPublicPath && userToken) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If user is not logged he cannot access private pages
    if (!isPublicPath && !userToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/blogs',
        '/login',
        '/product',
        '/setting',
        '/signup',
    ],
};

