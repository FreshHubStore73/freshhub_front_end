'use client';
import { FC, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import NavMenuLinks from '../navMenuLinks';
import Logo from '../../logo';

import styles from './navMenu.module.scss';

type Props = { categories: string[] };

const NavMenuDrawer: FC<Props> = ({ categories }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorElNav, setAnchorElNav] = useState<any>(null);
    // const handleOpenNavMenu: React.MouseEventHandler<HTMLButtonElement> | undefined = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                variant="header"
                component="div"
                sx={{
                    '&.MuiTypography-header > div': {
                        height: '111px',
                        display: 'flex',
                        alignItems: 'center',
                    },
                }}
            >
                <Logo />
            </Typography>
            <Divider />
            <NavMenuLinks links={categories} />
        </Box>
    );
    return (
        <>
            <Box onClick={handleDrawerToggle} sx={{ display: { xs: 'flex', lg: 'none' }, mr: 3 }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleOpenNavMenu}
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 270,
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};
export default NavMenuDrawer;
