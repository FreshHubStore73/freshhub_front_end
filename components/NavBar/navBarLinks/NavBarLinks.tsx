'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navBarLinks.module.scss';
import { CategoryItem } from '../NavBar';

const NavBarLinks = ({ links }: { links: CategoryItem[] }) => {
    const pathname = usePathname().split('/')[2];
    return (
        <>
            {links.map((link) => {
                const catName = link.name.toLowerCase();
                const isActive = pathname === catName;
                return (
                    <Link
                        href={`/categories/${catName}`}
                        key={catName}
                        className={`${styles.link} ${isActive && styles.active}`}
                    >
                        {catName}
                    </Link>
                );
            })}
        </>
    );
};

export default NavBarLinks;
