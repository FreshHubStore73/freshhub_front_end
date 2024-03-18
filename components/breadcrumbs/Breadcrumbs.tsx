'use client';
import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Typography } from '@mui/material';

export default function BreadCrumbs({
    singlePage,
    useSearchParams,
}: {
    singlePage?: string;
    useSearchParams?: boolean;
}) {
    const pathnames: string[] = usePathname()
        .split('/')
        .filter((i) => i && i !== 'categories');

    const params: {
        category: string;
        dishId: string | string[];
    } = useParams();

    //removing extra path (dishId) from breadcrumbs
    if (params?.dishId) {
        pathnames.splice(
            pathnames.findIndex((chunk) => chunk === params?.dishId[0]),
            1,
        );
    }
    //logic only for profile page
    if (pathnames.includes('profile') && useSearchParams) {
        pathnames.push('purchase history');
    }
    return (
        <Box
            role="presentation"
            sx={{
                pt: { mobile: '16px', tablet: '30px', desktop: '64px' },
            }}
        >
            <Breadcrumbs
                separator={
                    <FiberManualRecordIcon
                        sx={{
                            fontSize: { mobile: '6px', tablet: '8px', desktop: '12px' },
                            '&': {
                                color: '#828282',
                            },
                        }}
                    />
                }
                aria-label="breadcrumb"
            >
                <Link href="/">
                    <Typography
                        sx={{
                            fontSize: { mobile: '12px', tablet: '16px', desktop: '22px' },
                            color: '#828282',
                            '&:hover': {
                                color: 'accent.main',
                            },
                        }}
                    >
                        Home
                    </Typography>
                </Link>
                {singlePage ? (
                    <Typography
                        color="text.secondary"
                        sx={{
                            fontSize: { mobile: '12px', tablet: '16px', desktop: '22px' },
                            '&::first-letter': {
                                textTransform: 'capitalize',
                            },
                        }}
                    >
                        {singlePage}
                    </Typography>
                ) : (
                    pathnames.map((chunk, i) => {
                        const last = i === pathnames.length - 1;
                        const to = `/${
                            pathnames.includes('profile') ? '' : 'categories/'
                        }${pathnames.slice(0, i + 1).join('/')}`;
                        const content =
                            chunk === 'order'
                                ? 'Order page'
                                : decodeURIComponent(chunk).replace(/\_+/g, ' ');
                        return last ? (
                            <Typography
                                key={content}
                                color="text.secondary"
                                sx={{
                                    fontSize: { mobile: '12px', tablet: '16px', desktop: '22px' },
                                    '&::first-letter': {
                                        textTransform: 'capitalize',
                                    },
                                }}
                            >
                                {content}
                            </Typography>
                        ) : (
                            <Link key={content} href={to}>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            mobile: '12px',
                                            tablet: '16px',
                                            desktop: '22px',
                                        },
                                        color: '#828282',
                                        '&:hover': {
                                            color: 'accent.main',
                                        },
                                        '&::first-letter': {
                                            textTransform: 'capitalize',
                                        },
                                    }}
                                >
                                    {content}
                                </Typography>
                            </Link>
                        );
                    })
                )}
            </Breadcrumbs>
        </Box>
    );
}
