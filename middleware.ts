import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(req) {
        const { pathname } = req.nextUrl;

        const isAuthenticated = !!req.nextauth.token;

        if (isAuthenticated && (pathname === '/login' || pathname === '/signup')) {
            const url = req.nextUrl.clone();
            url.pathname = '/';
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    },
    {
        pages: {
            signIn: '/login',
        },
    },
);

export const config = {
    matcher: ['/order', '/profile'],
};
