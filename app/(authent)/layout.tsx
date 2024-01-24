import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderAuth />
            <main>
                <section className="container">{children}</section>
            </main>
        </>
    );
};

export default layout;
