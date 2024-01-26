'use client';
import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import SearchInput from '../search';
import Logo from '../Logo';
import UserIcon from '../userIcon';
import CartIcon from '../cartComponents/cartIcon';

import styles from './header.module.scss';

const Header = ({ children }: { children: React.ReactNode[] }) => {
    const BurgerMenu = children[0];
    const Navbar = children[1];
    return (
        <>
            <AppBar position="fixed" sx={{ bgcolor: 'lightgrey' }}>
                <div className="container">
                    <Toolbar disableGutters>
                        {BurgerMenu}
                        <Logo />
                        {Navbar}
                        <SearchInput />
                        <Box sx={{ flexGrow: 0, display: 'flex' }}>
                            <UserIcon />
                            <CartIcon />
                        </Box>
                    </Toolbar>
                </div>
            </AppBar>
        </>
    );
};

export default Header;
