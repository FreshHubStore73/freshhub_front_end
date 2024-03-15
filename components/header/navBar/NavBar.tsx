import { Box } from '@mui/material';

import NavBarLinks from './navBarLinks';
import { getCategories } from '@/utils/getData';

const NavBar = async () => {
    const { categories } = await getCategories();
    return (
        <Box
            sx={{
                flexGrow: 1,
                gap: { tablet: '25px', desktop: '50px' },
                marginLeft: { mobile: '0px', tablet: '40px', desktop: '0px' },
                display: { mobile: 'none', tablet: 'flex' },
                justifyContent: 'center',
            }}
        >
            <NavBarLinks links={categories} />
        </Box>
    );
};

export default NavBar;
