import React from 'react';

import Link from 'next/link';

import { IconButton, SvgIcon } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import styles from './userIcon.module.scss';

const HtmlTooltip = styled(({ className, ...props }: any) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

const Avatar = () => {
    return (
        <SvgIcon>
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
        </SvgIcon>
    );
};

const UserIcon = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<any>(null);

    const user: string = 'Peter Pen';
    const profileItems = [
        ['Profile', `/profile/${user.replace(/\s/g, '-')}`],
        ['History', `/profile/${user.replace(/\s/g, '-')}#history`],
        ['Logout', '/'],
    ];
    const isAsigned = true;

    const handleOpenUserMenu: React.MouseEventHandler<HTMLButtonElement> | undefined = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <HtmlTooltip
                title={
                    <>
                        <Typography color="inherit" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                            Hello, {isAsigned ? user : 'dear client!'}!
                        </Typography>
                        <Typography color="inherit" sx={{ fontSize: '14px' }}>
                            {isAsigned
                                ? 'We missed you so much!'
                                : 'To place an order please log in!'}
                        </Typography>
                    </>
                }
            >
                <IconButton onClick={handleOpenUserMenu} sx={{ px: '12px' }}>
                    <Avatar />
                </IconButton>
            </HtmlTooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {profileItems.map((item) => (
                    <Link key={item[0]} href={item[1]} className={styles.link}>
                        <MenuItem
                            onClick={handleCloseUserMenu}
                            sx={{ width: '150px', textAlign: 'center' }}
                        >
                            <Typography variant="text" sx={{ py: '5px' }}>
                                {item[0]}
                            </Typography>
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </>
    );
};

export default UserIcon;
