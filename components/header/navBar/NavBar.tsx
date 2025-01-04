import { Box } from '@mui/material';

import NavBarLinks from './navBarLinks';
import { getCategories } from '@/actions/dishes';

export default async function NavBar() {
    const categoriesData = await getCategories();
    if (!categoriesData) return null;
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
            <NavBarLinks data={categoriesData} />
        </Box>
    );
}
