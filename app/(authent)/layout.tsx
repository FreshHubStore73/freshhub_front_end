const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header style={{ background: 'grey' }}>
                <div className="container">NO HEADER</div>
            </header>
            <main>
                <section className="container">{children}</section>
            </main>
        </>
    );
};

export default layout;
