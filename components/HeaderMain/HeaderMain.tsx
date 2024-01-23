import Logo from '../Logo/Logo';

import styles from './headerMain.module.scss';

export default function HeaderMain() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_wrapper}>
                    <Logo />
                </div>
            </div>
        </header>
    );
}
