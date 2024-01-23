import HeaderMain from '../../components/HeaderMain/HeaderMain';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderMain />
            <main>
                <section className="container">{children}</section>
            </main>
            <footer style={{ background: 'grey' }}>
                <div style={{ textAlign: 'center', marginBlock: 10 }} className="container">
                    &copy; {new Date().getFullYear()} FreshHub
                </div>
            </footer>
        </>
    );
};

export default layout;
