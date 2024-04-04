import type { Metadata } from 'next';
import { Oswald, Lato } from 'next/font/google';
import '@/styles/globals.scss';
import Providers from '@/utils/Providers';

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    preload: true,
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={lato.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
