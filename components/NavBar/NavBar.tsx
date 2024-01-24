import Link from 'next/link';
import styles from './navBar.module.scss';

type Props = {};

export const pages = ['pizza', 'burgers', 'salads', 'desserts'];

export default function NavBar({}: Props) {
    return (
        <div className={`${styles.navbar_wrapper} desktop`}>
            {pages.map((page) => (
                <Link href={`/${page}`} key={page} className={styles.navbar_link}>
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
            ))}
        </div>
    );
}
