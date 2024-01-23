import Header from '@/components/Header/Header';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="global-wrapper">
            <Header />
            <main>
                <section className="container">{children}</section>
            </main>
            <footer style={{ background: 'grey' }}>
                <div className="container">&copy; {new Date().getFullYear()} FreshHub</div>
            </footer>
        </div>
    );
};

export default layout;
