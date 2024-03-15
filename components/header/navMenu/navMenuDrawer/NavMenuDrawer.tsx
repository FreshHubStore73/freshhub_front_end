'use client';
import { FC, useState } from 'react';

// import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';

import NavMenuLinks from '../navMenuLinks';
import { SvgIcon, SvgIconProps } from '@mui/material';

type Props = { categories: string[] };
const MenuIcon = (props: SvgIconProps) => (
    <SvgIcon>
        <svg
            width="22"
            height="14"
            viewBox="0 0 22 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 1H21" stroke="#040705" strokeLinecap="round" />
            <path d="M1 7H21" stroke="#040705" strokeLinecap="round" />
            <path d="M1 13H21" stroke="#040705" strokeLinecap="round" />
        </svg>
    </SvgIcon>
);
const NavMenuDrawer: FC<Props> = ({ categories }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}>
            <NavMenuLinks links={categories} />
        </Box>
    );
    return (
        <>
            <Box
                onClick={handleDrawerToggle}
                sx={{ display: { mobile: 'flex', tablet: 'none' }, mr: 3 }}
            >
                <IconButton
                    size="large"
                    aria-label="dishes menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={
                    {
                        // keepMounted: true, // Better open performance on mobile.
                    }
                }
                sx={{
                    display: { mobile: 'block', tablet: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '45%',
                        maxWidth: '260px',
                        top: '60px',
                    },
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};
export default NavMenuDrawer;
