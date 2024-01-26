import NavMenu from '@/components/NavMenu';
import NavBar from '@/components/NavBar';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Toolbar } from '@mui/material';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header>
                <NavMenu />
                <NavBar />
            </Header>
            <Toolbar />
            <main>
                <section className="container">{children}</section>
            </main>
            <Footer />
        </>
    );
};

export default layout;
