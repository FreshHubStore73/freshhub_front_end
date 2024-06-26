import { Metadata } from 'next';

import { Toolbar } from '@mui/material';

import NavMenu from '@/components/header/navMenu';
import NavBar from '@/components/header/navBar';
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata: Metadata = {
    title: 'FresHHub',
    description: 'Hot, delicious, fresh dishes with free delivery to everyone',
};

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header>
                <NavMenu />
                <NavBar />
            </Header>
            <Toolbar
                sx={{
                    '&': {
                        minHeight: { mobile: '59px', tablet: '83px', desktop: '111px' },
                    },
                }}
            />
            <main>
                <div className="container">{children}</div>
            </main>

            <Footer />
        </>
    );
};

export default layout;
