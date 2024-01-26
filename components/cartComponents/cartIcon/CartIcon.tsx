'use client';
import React from 'react';
import { Avatar, SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ShoppingBasketSharp from '@mui/icons-material/ShoppingBasketSharp';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import { useShoppingCart } from '../../../store';
import CartDrawer from '../cartDrawer/CartDrawer';

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

const ShoppingBasket = () => {
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
                    d="M34.1667 15.375H6.83332L8.25978 31.0592C8.33692 31.9081 8.72859 32.6975 9.35789 33.2724C9.9872 33.8474 10.8087 34.1663 11.6611 34.1667H29.3389C30.1913 34.1663 31.0128 33.8474 31.6421 33.2724C32.2714 32.6975 32.6631 31.9081 32.7402 31.0592L34.1667 15.375Z"
                    stroke="#040705"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                />
                <path
                    d="M27.3333 18.7913V13.6663C27.3333 11.854 26.6134 10.1159 25.3319 8.83444C24.0504 7.55295 22.3123 6.83301 20.5 6.83301C18.6877 6.83301 16.9496 7.55295 15.6681 8.83444C14.3866 10.1159 13.6666 11.854 13.6666 13.6663V18.7913"
                    stroke="#040705"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </svg>
        </SvgIcon>
    );
};

const CartIcon = () => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const totalDishes = useShoppingCart((state) => state.totalDishes);
    const totalAmount = useShoppingCart((state) => state.totalAmount);

    return (
        <>
            <HtmlTooltip
                title={
                    <>
                        <Typography color="inherit" sx={{ fontWeight: 'bold' }}>
                            Your cart:
                        </Typography>
                        <b>{`${totalDishes}`}</b> {' product(s)  on  '}
                        <b>{`${totalAmount}$`}</b>
                    </>
                }
            >
                <IconButton size="large" onClick={() => setShowDrawer(true)}>
                    <Badge badgeContent={totalDishes} showZero color="info">
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </HtmlTooltip>
            <CartDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        </>
    );
};

export default CartIcon;
