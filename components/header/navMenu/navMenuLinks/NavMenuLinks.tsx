'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Typography } from '@mui/material';

import { CategoryItem } from '../../navBar/NavBar';

import styles from './navMenuLinks.module.scss';

const NavMenuLinks = ({ links }: { links: CategoryItem[] }) => {
    const pathname = usePathname().split('/')[2];
    return (
        <List>
            {links.map((link) => {
                const catName = link.name.toLowerCase();
                const isActive = pathname === catName;
                return (
                    <Link href={`/${catName}`} key={catName} className={styles.link}>
                        <ListItem
                            key={catName}
                            disablePadding
                            // className={isActive ? 'Mui-active' : undefined}
                        >
                            <ListItemButton
                                sx={{
                                    textAlign: 'left',
                                    textTransform: 'capitalize',
                                    '&.MuiListItemButton-root': {
                                        backgroundColor: `${isActive ? '#FFC182' : undefined}`,
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={
                                        <>
                                            <Typography
                                                variant="header"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                }}
                                            >
                                                {catName}
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                );
            })}
        </List>
    );
};

export default NavMenuLinks;
