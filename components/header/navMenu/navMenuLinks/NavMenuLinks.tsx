'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Typography } from '@mui/material';

const NavMenuLinks = ({ links }: { links: string[] }) => {
    const pathname = usePathname().split('/')[2];
    return (
        <List sx={{ paddingBlock: '36px' }}>
            {links.map((link) => {
                const catName = link.toLowerCase();
                const isActive = pathname === catName;
                return (
                    <Link href={`/categories/${catName}`} key={catName}>
                        <ListItem key={catName} disablePadding>
                            <ListItemButton
                                sx={{
                                    paddingInline: '8px',
                                }}
                            >
                                <ListItemText
                                    primary={
                                        <>
                                            <Typography
                                                variant="header"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    fontSize: '22px',
                                                    fontWeight: 700,
                                                    color: `${
                                                        isActive ? 'accent.main' : 'text.secondary'
                                                    }`,
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
