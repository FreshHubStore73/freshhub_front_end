'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Typography } from '@mui/material';

const NavBarLinks = ({ links }: { links: string[] }) => {
    const pathname = usePathname().split('/')[2];
    return (
        <>
            {links.map((link) => {
                const catName = link.toLowerCase();
                const isActive = pathname === catName;
                return (
                    <Link href={`/categories/${catName}`} key={catName}>
                        <Typography
                            // variant="header"
                            className={`${isActive ? 'Mui-active' : ''}`}
                            sx={{
                                fontSize: { mobile: '', tablet: '16px', desktop: '20px' },
                                textTransform: 'capitalize',
                                transition: 'color 0.2s',
                                '&.MuiTypography-root.Mui-active': {
                                    color: '#F15C30',
                                },
                                '&:hover': {
                                    color: `${isActive ? '' : 'red'}`,
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
