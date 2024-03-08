'use client';
import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Typography } from '@mui/material';

import styles from './breadcrumbs.module.scss';

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
        <Box pt="64px" role="presentation" className={styles.links}>
            <Breadcrumbs
                separator={<FiberManualRecordIcon sx={{ fontSize: '12px' }} />}
                aria-label="breadcrumb"
            >
                <Link href="/" className={styles.links_home}>
                    Home
                </Link>
                {singlePage ? (
                    <Typography color="text.secondary" sx={{ fontSize: '22px' }}>
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
                                sx={{ fontSize: '22px' }}
                            >
                                {content}
                            </Typography>
                        ) : (
                            <Link key={content} href={to}>
                                {content}
                            </Link>
                        );
                    })
                )}
            </Breadcrumbs>
        </Box>
    );
}
