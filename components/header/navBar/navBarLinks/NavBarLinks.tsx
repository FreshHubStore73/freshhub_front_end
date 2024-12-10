'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@mui/material';

type Props = {
    data: CategoryItem[];
}

const NavBarLinks = ({ data }: Props) => {
    const pathname = usePathname().split('/')[2];
    const links = data.map((item) => item.path);
    return (
        <>
            {links.map((link) => {
                const catName = link;
                const isActive = pathname === catName;
                return (
                    <Link href={`/categories/${catName}`} key={catName} tabIndex={-1}>
                        <Button
                            disableTouchRipple
                            variant="text"
                            className={`${isActive ? 'Mui-active' : ''}`}
                            // TouchRippleProps={{

                            // }}
                            sx={{
                                fontSize: { mobile: '', tablet: '16px', desktop: '20px' },
                                textTransform: 'capitalize',
                                transition: 'color 0.2s',
                                color: 'text.primary',
                                backgroundColor: '#fff',
                                '&.Mui-active': {
                                    color: 'accent.main',
                                },
                                '&.Mui-focusVisible ': {
                                    color: `${isActive ? '' : 'red'}`,
                                },
                                '&:hover': {
                                    color: `${isActive ? '' : 'red'}`,
                                    backgroundColor: '#fff',
                                },
                            }}
                        >
                            {catName}
                        </Button>
                    </Link>
                );
            })}
        </>
    );
};

export default NavBarLinks;
