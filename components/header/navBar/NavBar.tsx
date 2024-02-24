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
    const res = await fetch('http://localhost:3000/api/categories');
    if (!res.ok) throw new Error("Couldn't fetch categories");
    const data: CategoryItem[] = await res.json();
    const categories = data.map((item) => item.name.toLowerCase());
    const pages = [...categories, 'search', 'order page'];
    return { categories, pages };
}

const NavBar = async () => {
    const { categories } = await getCategories();
    return (
        <Box
            sx={{
                flexGrow: 1,
                gap: '50px',
                display: { xs: 'none', lg: 'flex' },
                justifyContent: 'center',
            }}
        >
            <NavBarLinks links={categories} />
        </Box>
    );
};

export default NavBar;
