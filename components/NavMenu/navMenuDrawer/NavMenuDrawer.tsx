'use client';
import React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Divider, List } from '@mui/material';

import styles from './navMenu.module.scss';
import { Drawer } from '@mui/material';
import type { CategoryItem } from '../../NavBar/NavBar';
import NavMenuLinks from '../navMenuLinks';

type Props = { categories: CategoryItem[] };

export default function NavMenuDrawer({ categories }: Props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState<any>(null);
    const handleOpenNavMenu: React.MouseEventHandler<HTMLButtonElement> | undefined = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ my: 2 }}>
                {/* 𝕱𝖗𝖊𝖘𝖍𝕳𝖚𝖇 */}
                Logo
            </Typography>
            <Divider />
            <NavMenuLinks links={categories} />
        </Box>
    );
    return (
        <>
            <Box onClick={handleDrawerToggle} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
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
                    display: { xs: 'block', md: 'none' },
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
}
