import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import NavMenu from '../NavMenu/NavMenu';

import styles from './headerMain.module.scss';

export default function HeaderMain() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_wrapper}>
                    <NavMenu />
                    <Logo />
                    <NavBar />
                </div>
            </div>
        </header>
    );
}
