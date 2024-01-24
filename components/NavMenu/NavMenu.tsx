'use client';
import Link from 'next/link';
import { pages } from '../NavBar/NavBar';
import { useState } from 'react';

import styles from './navMenu.module.scss';

type Props = {};

export default function NavMenu({}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onBurgerClick = () => {
        setIsMenuOpen(true);
    };

    const handleClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={`${styles.navmenu_wrapper} mobile`}>
            <div className={styles.navmenu_burger} onClick={onBurgerClick}>
                <span className={styles.navmenu_burger_line}> </span>
                <span className={styles.navmenu_burger_line}> </span>
                <span className={styles.navmenu_burger_line}> </span>
            </div>
            <div className={styles.navmenu_list} style={{ left: isMenuOpen ? '0' : '-270px' }}>
                <div className={styles.navmenu_list_wrapper}>
                    <h3 className={styles.navmenu_list_title}>Awesome navmenu</h3>
                    <button onClick={handleClose} className={styles.navmenu_list_close}>
                        &times;
                    </button>
                    {pages.map((page) => (
                        <Link
                            href={`/${page}`}
                            key={page}
                            className={styles.navmenu_list_item}
                            onClick={handleClose}
                        >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
