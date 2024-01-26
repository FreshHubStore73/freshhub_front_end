import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer style={{ background: 'grey' }}>
            <div style={{ textAlign: 'center', marginBlock: 10 }} className="container">
                &copy; {new Date().getFullYear()} FreshHub
            </div>
        </footer>
    );
};

export default Footer;
