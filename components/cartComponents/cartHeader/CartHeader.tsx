import React from 'react';
import { Stack, SvgIcon, Typography } from '@mui/material';

type Props = {
    closeDrawer: () => void;
};

export default function CartHeader({ closeDrawer }: Props) {
    return (
        <>
            <Stack
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                flexGrow={'0'}
            >
                <Typography
                    component={'h3'}
                    sx={{
                        fontWeight: 700,
                        fontSize: { mobile: '26px', tablet: '36px', desktop: '42px' },
                        color: 'text.secondary',
                    }}
                >
                    Cart
                </Typography>
                <SvgIcon
                    onClick={closeDrawer}
                    sx={{
                        cursor: 'pointer',
                        height: { mobile: '12px', tablet: '18px', desktop: '22px' },
                        '&.MuiSvgIcon-root:hover path': {
                            stroke: (theme) => theme.palette.accent.main,
                        },
                    }}
                >
                    <svg
                        width="21"
                        height="23"
                        viewBox="0 0 21 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_475_3735)">
                            <path
                                d="M20.25 0.913574L0.75 21.4818M0.75 0.913574L20.25 21.4818"
                                stroke="#040705"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_475_3735">
                                <rect
                                    width="21"
                                    height="22.1504"
                                    fill="white"
                                    transform="translate(0 0.122559)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </SvgIcon>
            </Stack>
        </>
    );
}
