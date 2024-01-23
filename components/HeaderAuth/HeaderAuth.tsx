import Logo from '../Logo/Logo';

import styles from './headerAuth.module.scss';

export default function HeaderAuth() {
    return (
        <header className={styles.header}>
            <div className="container">
                <Logo />
            </div>
        </header>
    );
}
