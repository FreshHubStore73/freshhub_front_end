import { Lato } from 'next/font/google';
import { AuthStoreProvider } from '@/stores/Stores-providers';

import '@/styles/globals.scss';

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
                <AuthStoreProvider>{children}</AuthStoreProvider>
            </body>
        </html>
    );
}
