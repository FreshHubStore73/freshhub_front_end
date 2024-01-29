import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import { Toolbar } from '@mui/material';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderAuth />
            <Toolbar />
            <main>
                <section className="container">{children}</section>
            </main>
        </>
    );
};

export default layout;
