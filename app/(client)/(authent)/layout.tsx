import HeaderAuth from '@/components/header/headerAuth/HeaderAuth';
import { Toolbar } from '@mui/material';

type Props = { children: React.ReactNode };

export default function layout({ children }: Props) {
    return (
        <>
            <HeaderAuth />
            <Toolbar
                sx={{
                    '&': {
                        minHeight: { mobile: '59px', tablet: '83px', desktop: '111px' },
                    },
                }}
            />
            <main>
                <section className="container">{children}</section>
            </main>
        </>
    );
}