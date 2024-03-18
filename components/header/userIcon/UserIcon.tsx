'use client';
import React, { forwardRef } from 'react';
import { useRouter } from 'next/navigation';

import { IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { logout } from '@/components/authItems/auth';
import { useAuth } from '@/hooks/useAuth';

interface UserIconProps {}

// eslint-disable-next-line react/display-name
const UserIcon = forwardRef<HTMLElement, UserIconProps>((props, ref) => {
    {
        const { isAuthorized, signOut } = useAuth();
        const { push } = useRouter();

        const [userIconAnchor, setUserIconAnchor] = React.useState<null | HTMLElement>(null);

        const handleOpenUserMenu: React.MouseEventHandler<HTMLElement> = (event) => {
            if (ref && 'current' in ref && ref.current) {
                setUserIconAnchor(ref.current);
            }
        };

        const handleCloseUserMenu = () => {
            setUserIconAnchor(null);
        };

        const menuContent = isAuthorized ? (
            [
                <MenuItem
                    key="profile"
                    onClick={() => {
                        handleCloseUserMenu();
                        push('/profile');
                    }}
                >
                    Profile
                </MenuItem>,
                <MenuItem
                    key="history"
                    onClick={() => {
                        handleCloseUserMenu();
                        push('/profile?history=true');
                    }}
                >
                    History
                </MenuItem>,
                <MenuItem
                    key="logout"
                    onClick={() => {
                        handleCloseUserMenu();
                        signOut();
                        logout();
                    }}
                >
                    Logout
                </MenuItem>,
            ]
        ) : (
            <MenuItem
                onClick={() => {
                    push('/login');
                    handleCloseUserMenu();
                }}
            >
                Login
            </MenuItem>
        );

        return (
            <>
                <IconButton
                    ref={ref as React.RefObject<HTMLButtonElement>}
                    onClick={handleOpenUserMenu}
                    disableTouchRipple
                    sx={{
                        px: { mobile: '8px', tablet: '10px', desktop: '12px' },
                        '&.MuiIconButton-root:hover': {
                            backgroundColor: '#fff',
                        },
                        '&.MuiIconButton-root:hover path': { stroke: '#F15C30' },
                        '& svg': {
                            height: { mobile: '24px', tablet: '30px', desktop: '41px' },
                            width: { mobile: '24px', tablet: '30px', desktop: '41px' },
                        },
                    }}
                >
                    <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M34.1667 30.7493C34.1667 28.937 33.4467 27.199 32.1652 25.9175C30.8837 24.636 29.1457 23.916 27.3333 23.916H13.6667C11.8544 23.916 10.1163 24.636 8.83478 25.9175C7.55328 27.199 6.83334 28.937 6.83334 30.7493C6.83334 31.6555 7.19331 32.5245 7.83406 33.1653C8.47481 33.806 9.34385 34.166 10.25 34.166H30.75C31.6562 34.166 32.5252 33.806 33.166 33.1653C33.8067 32.5245 34.1667 31.6555 34.1667 30.7493Z"
                            stroke="#040705"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M20.5 17.083C17.6695 17.083 15.375 14.7885 15.375 11.958C15.375 9.12755 17.6695 6.83301 20.5 6.83301C23.3305 6.83301 25.625 9.12755 25.625 11.958C25.625 14.7885 23.3305 17.083 20.5 17.083Z"
                            stroke="#040705"
                            strokeWidth="1.5"
                        />
                    </svg>
                </IconButton>
                <Menu
                    sx={{
                        '& .MuiPaper-root': {
                            width: { mobile: '104px', tablet: '122px', desktop: '182px' },
                            borderRadius: { mobile: '14px', tablet: '18px' },
                            boxShadow: '0px 2px 16px 1px rgba(0, 0, 0, 0.15)',
                        },
                        '& .MuiList-root': {
                            padding: { mobile: '6px 0', tablet: '8px 0', desktop: '15px 0' },
                            display: 'flex',
                            flexDirection: 'column',
                        },
                        '& .MuiMenuItem-root': {
                            padding: {
                                mobile: '4px 14px',
                                tablet: '4px 14px',
                                desktop: '4px 16px',
                            },
                            fontSize: { mobile: '12px', tablet: '14px', desktop: '16px' },
                            fontWeight: '400',
                            minHeight: '0px',
                        },
                        '& .MuiButtonBase-root:hover': {
                            backgroundColor: 'white',
                            color: 'accent.main',
                        },
                    }}
                    id="menu-appbar"
                    anchorEl={userIconAnchor}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    keepMounted
                    open={Boolean(userIconAnchor)}
                    onClose={handleCloseUserMenu}
                >
                    {menuContent}
                </Menu>
            </>
        );
    }
});

export default UserIcon;
