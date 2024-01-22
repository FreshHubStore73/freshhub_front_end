const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="global-wrapper">
            <header style={{ background: 'grey' }}>
                <div className="container">HEADER</div>
            </header>
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
