'use client';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Theme, styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import { useCartStore } from '@/stores/Stores-providers';

const HtmlTooltip = styled(
    ({ className, anchEl, ...props }: TooltipProps & { anchEl: HTMLElement | null }) => (
        <Tooltip
            {...props}
            classes={{ popper: className }}
            PopperProps={{
                placement: 'bottom',
                anchorEl: anchEl,
            }}
        />
    ),
)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: '0px 2px 16px 1px rgba(0, 0, 0, 0.15)',

        [theme.breakpoints.up('mobile')]: {
            padding: '8px 14px',
            borderRadius: '14px',
            maxWidth: '140px',
            minWidth: '104px',
        },
        [theme.breakpoints.up('tablet')]: {
            padding: '8px 14px',
            borderRadius: '18px',
            maxWidth: '160px',
            minWidth: '122px',
        },
        [theme.breakpoints.up('desktop')]: {
            padding: '12px 16px',
            borderRadius: '20px',
            maxWidth: '220px',
            minWidth: '167px',
        },
    },
    '&.MuiTooltip-popper[data-popper-placement*="bottom"] .MuiTooltip-tooltip': {
        marginTop: '0px',
    },
}));

const ShoppingBasket = () => {
    return (
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
    );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        [theme.breakpoints.up('mobile')]: {
            right: '2px',
            bottom: '2px',
            fontSize: '7px',
            minWidth: '13px',
            height: '13px',
        },
        [theme.breakpoints.up('tablet')]: {
            right: '5px',
            bottom: '5px',
            fontSize: '8px',
            minWidth: '15px',
            height: '15px',
        },
        [theme.breakpoints.up('desktop')]: {
            right: '7px',
            bottom: '7px',
            fontSize: '10px',
            minWidth: '18px',
            height: '18px',
        },
        color: '#fff',
        padding: '2px',
        backgroundColor: theme.palette.accent.main,
    },
}));

type Props = {
    toggleDrawer: () => void;
    anchEl: HTMLElement | null;
};

export default function CartIcon({ toggleDrawer, anchEl }: Props) {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('tablet'));

    const totalDishes = useCartStore((state) => state.totalDishes);
    const totalAmount = useCartStore((state) => state.totalAmount);

    const simpleIcon = (
        <IconButton
            onClick={toggleDrawer}
            disableTouchRipple
            sx={{
                '& svg': {
                    height: { mobile: '24px', tablet: '30px', desktop: '41px' },
                    width: { mobile: '24px', tablet: '30px', desktop: '41px' },
                },
                '&.MuiIconButton-root:hover': {
                    backgroundColor: '#fff',
                },
                '&.MuiIconButton-root:hover path': { stroke: (theme) => theme.palette.accent.main },
            }}
        >
            <StyledBadge
                badgeContent={totalDishes}
                showZero
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <ShoppingBasket />
            </StyledBadge>
        </IconButton>
    );
    const iconWithTooltip = (
        <HtmlTooltip
            anchEl={anchEl}
            title={
                <>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { mobile: '10px', tablet: '12px', desktop: '18px' },
                            marginBottom: { mobile: '4px', tablet: '5px', desktop: '5px' },
                            color: 'text.secondary',
                        }}
                    >
                        Your cart:
                    </Typography>

                    <Typography
                        color="inherit"
                        sx={{ fontSize: { mobile: '8px', tablet: '10px', desktop: '16px' } }}
                    >
                        {`${totalDishes}`} {' product(s)  on  '}
                        <b>{`${totalAmount}$`}</b>
                    </Typography>
                </>
            }
        >
            <span>{simpleIcon}</span>
        </HtmlTooltip>
    );

    return <>{isMobile ? simpleIcon : iconWithTooltip}</>;
}