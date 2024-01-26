'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { CategoryItem } from '../../NavBar/NavBar';

import styles from './navMenuLinks.module.scss';

const NavMenuLinks = ({ links }: { links: CategoryItem[] }) => {
    const pathname = usePathname().split('/')[2];
    return (
        <List>
            {links.map((link) => {
                const catName = link.name.toLowerCase();
                const isActive = pathname === catName;
                return (
                    <ListItem key={catName} disablePadding>
                        <ListItemButton sx={{ textAlign: 'left', textTransform: 'capitalize' }}>
                            <ListItemText
                                primary={
                                    <>
                                        <Link
                                            href={`/categories/${catName}`}
                                            key={catName}
                                            className={`${styles.link} ${
                                                isActive && styles.active
                                            }`}
                                        >
                                            {catName}
                                        </Link>
                                    </>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default NavMenuLinks;
