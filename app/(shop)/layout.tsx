import NavMenu from '@/components/header/navMenu';
import NavBar from '@/components/header/navBar';
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
                <div className="container">{children}</div>
            </main>

            <Footer />
        </>
    );
};

export default layout;
