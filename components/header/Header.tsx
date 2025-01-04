'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import SearchInput from './search';
import Logo from './logo';
import UserBtn from './userBtn';
import Cart from '../cartComponents/cart/Cart';

type Props = {
    children: React.ReactNode[];
}

export default function Header({ children }: Props) {
    const BurgerMenu = children[0];
    const Navbar = children[1];
    const userIconAnchorRef = useRef<HTMLElement | null>(null);
    const [anchEl, setAnchEl] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if (userIconAnchorRef.current) {
            setAnchEl(userIconAnchorRef.current);
        }
    }, []);

    console.log('header');
    return (
        <AppBar
            position="fixed"
            sx={{
                borderBottomColor: 'beige.main',
            }}
        >
            <div className="container">
                <Toolbar
                    disableGutters
                    sx={{
                        '&': {
                            minHeight: { mobile: '59px', tablet: '83px', desktop: '111px' },
                        },
                    }}
                >
                    <>
                        {BurgerMenu}
                        <Logo />
                        {Navbar}
                        <Suspense>
                            <SearchInput />
                        </Suspense>
                        <Box sx={{ flexGrow: 0, display: 'flex' }}>
                            <UserBtn ref={userIconAnchorRef} />
                            <Cart anchEl={anchEl} />
                            {/* {userIconAnchorRef.current && <Cart anchEl={anchEl} />} */}
                        </Box>
                    </>
                </Toolbar>
            </div>
        </AppBar>
    );
}