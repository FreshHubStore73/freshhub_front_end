import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('user_session')?.value;

    if (!token && !['/login', '/signup'].some((path) => path === new URL(request.url).pathname)) {
        return NextResponse.redirect(
            new URL(`/login?callbackUrl=${request.nextUrl.pathname}`, request.url),
        );
    }
    if (token && ['/login', '/signup'].some((path) => path === new URL(request.url).pathname)) {
        return NextResponse.redirect(new URL('/profile', request.url));
    }
}

export const config = {
    matcher: ['/order', '/profile', '/login', '/signup'],
};
