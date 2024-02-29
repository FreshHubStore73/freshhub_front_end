'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import SearchInput from './search';
import Logo from './logo';
import UserIcon from './userIcon';
import Cart from '../cartComponents/cart/Cart';

import styles from './header.module.scss';

const Header = ({ children }: { children: React.ReactNode[] }) => {
    const BurgerMenu = children[0];
    const Navbar = children[1];
    const userIconAnchorRef = useRef<HTMLElement | null>(null);
    const [anchEl, setAnchEl] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if (userIconAnchorRef.current) {
            setAnchEl(userIconAnchorRef.current);
        }
    }, [userIconAnchorRef.current]);
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    borderBottomColor: 'beige.main',
                }}
            >
                <div className="container">
                    <Toolbar disableGutters>
                        <>
                            {BurgerMenu}
                            <Logo />
                            {Navbar}
                            <Suspense>
                                <SearchInput />
                            </Suspense>
                            <Box sx={{ flexGrow: 0, display: 'flex' }}>
                                <UserIcon ref={userIconAnchorRef} />
                                {userIconAnchorRef.current && <Cart anchEl={anchEl} />}
                            </Box>
                        </>
                    </Toolbar>
                </div>
            </AppBar>
        </>
    );
};

export default Header;
