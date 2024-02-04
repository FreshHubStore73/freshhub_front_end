'use client';

import React from 'react';

import { SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
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
        // <SvgIcon>
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
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M27.3333 18.7913V13.6663C27.3333 11.854 26.6134 10.1159 25.3319 8.83444C24.0504 7.55295 22.3123 6.83301 20.5 6.83301C18.6877 6.83301 16.9496 7.55295 15.6681 8.83444C14.3866 10.1159 13.6666 11.854 13.6666 13.6663V18.7913"
                stroke="#040705"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
        // </SvgIcon>
    );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 5,
        top: 33,
        color: '#fff',
        fontSize: '10px',
        minWidth: '17px',
        height: '17px',
        padding: '0 2px 2px',
        backgroundColor: '#F15C30',
    },
}));

type Props = {
    toggleDrawer: () => void;
};
const CartIcon = ({ toggleDrawer }: Props) => {
    const totalDishes = useShoppingCart((state) => state.totalDishes);
    const totalAmount = useShoppingCart((state) => state.totalAmount);

    return (
        <>
            <HtmlTooltip
                title={
                    <>
                        <Typography color="inherit" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                            Your cart:
                        </Typography>

                        <Typography color="inherit" sx={{ fontSize: '14px' }}>
                            <b>{`${totalDishes}`}</b> {' product(s)  on  '}
                            <b>{`${totalAmount}$`}</b>
                        </Typography>
                    </>
                }
            >
                <IconButton
                    size="large"
                    onClick={toggleDrawer}
                    sx={{
                        '&.MuiIconButton-root:hover path': {
                            stroke: '#F15C30',
                        },
                    }}
                >
                    <StyledBadge badgeContent={totalDishes} showZero>
                        <ShoppingBasket />
                    </StyledBadge>
                </IconButton>
            </HtmlTooltip>
        </>
    );
};

export default CartIcon;
