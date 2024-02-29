'use client';

import React from 'react';

import { SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import { useShoppingCart } from '../../../store';
import CartDrawer from '../cartDrawer/CartDrawer';

const HtmlTooltip = styled(
    ({ className, anchEl, ...props }: TooltipProps & { anchEl: HTMLElement | null }) => (
        <Tooltip
            {...props}
            classes={{ popper: className }}
            PopperProps={{
                popperOptions: { placement: 'bottom' },
                placement: 'top',
                // anchorOrigin: {
                //     vertical: 'bottom',
                //     horizontal: 'center',
                // },
                // transformOrigin: {
                //     vertical: 'top',
                //     horizontal: 'center',
                // },

                anchorEl: anchEl,
            }}
        />
    ),
)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.87)',
        padding: '8px 14px',
        borderRadius: '18px',
        maxWidth: '220px',
        minWidth: '182px',
        boxShadow: '0px 2px 16px 1px rgba(0, 0, 0, 0.15)',
    },
    '&.MuiTooltip-popper[data-popper-placement*="bottom"] .MuiTooltip-tooltip': {
        marginTop: '0px',
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
        backgroundColor: theme.palette.accent.main,
    },
}));

type Props = {
    toggleDrawer: () => void;
    anchEl: HTMLElement | null;
};
const CartIcon = ({ toggleDrawer, anchEl }: Props) => {
    const totalDishes = useShoppingCart((state) => state.totalDishes);
    const totalAmount = useShoppingCart((state) => state.totalAmount);

    return (
        <>
            <HtmlTooltip
                anchEl={anchEl}
                title={
                    <>
                        <Typography
                            // color="inherit"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '18px',
                                marginBottom: '5px',
                                color: (theme) => theme.palette.text.secondary,
                            }}
                        >
                            Your cart:
                        </Typography>

                        <Typography color="inherit" sx={{ fontSize: '16px' }}>
                            {`${totalDishes}`} {' product(s)  on  '}
                            <b>{`${totalAmount}$`}</b>
                        </Typography>
                    </>
                }
            >
                <span>
                    <IconButton
                        size="large"
                        onClick={toggleDrawer}
                        disableTouchRipple
                        sx={{
                            '&.MuiIconButton-root:hover': {
                                backgroundColor: '#fff',
                            },
                            '&.MuiIconButton-root:hover path': { stroke: '#F15C30' },
                        }}
                    >
                        <StyledBadge badgeContent={totalDishes} showZero>
                            <ShoppingBasket />
                        </StyledBadge>
                    </IconButton>
                </span>
            </HtmlTooltip>
        </>
    );
};

export default CartIcon;
