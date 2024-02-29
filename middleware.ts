import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('user_session')?.value;
    // const callbackUrl = headers().get('next-url');
    // const url = new URL(request.url);

    if (!token) {
        return NextResponse.redirect(
            new URL(`/login?callbackUrl=${request.nextUrl.pathname}`, request.url),
        );
    }
    // return NextResponse.redirect(new URL('/dashboard', request.url));
}

export const config = {
    matcher: ['/order', '/profile'],
};
