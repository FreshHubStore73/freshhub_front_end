import React from 'react';

import { Box } from '@mui/material';

import NavBarLinks from './navBarLinks';

import styles from './navBar.module.scss';

// export type CategoryItem = {
//     _id: string;
//     name: string;
// };
export type CategoryItem = {
    id: string;
    name: string;
    product: any[];
};

export async function getCategories() {
    const res = await fetch('http://localhost:3000/api/categories', {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error("Couldn't fetch categories");
    return res.json();
}

const NavBar = async () => {
    const categories: CategoryItem[] = await getCategories();
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
            }}
        >
            <NavBarLinks links={categories} />
        </Box>
    );
};

export default NavBar;
