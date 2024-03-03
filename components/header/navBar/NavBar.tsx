import React from 'react';

import { Box } from '@mui/material';

import NavBarLinks from './navBarLinks';
import { getCategories } from '@/utils/getData';

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
