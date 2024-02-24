'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Typography } from '@mui/material';

import styles from './navBarLinks.module.scss';

const NavBarLinks = ({ links }: { links: string[] }) => {
    const pathname = usePathname().split('/')[2];
    return (
        <>
            {links.map((link) => {
                const catName = link.toLowerCase();
                const isActive = pathname === catName;
                return (
                    <Link href={`/categories/${catName}`} key={catName} className={styles.link}>
                        <Typography
                            variant="header"
                            className={`${isActive ? 'Mui-active' : ''}`}
                            sx={{
                                textTransform: 'capitalize',
                                transition: 'color 0.2s',
                                '&.MuiTypography-root.Mui-active': {
                                    color: '#F15C30',
                                },
                            }}
                        >
                            {catName}
                        </Typography>
                    </Link>
                );
            })}
        </>
    );
};

export default NavBarLinks;
