'use client';
import Box from '@mui/material/Box';
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import styles from './breadcrumbs.module.scss';
import { Typography } from '@mui/material';

export default function BreadCrumbs() {
    const pathnames: string[] = usePathname().split('/').toSpliced(0, 1);

    const params: {
        [key: string]: string | string[];
    } = useParams();
    if (params?.dishId) {
        pathnames.splice(
            pathnames.findIndex((chunk) => chunk === params?.dishId[0]),
            1,
        );
    }
    return (
        <Box pt="64px" role="presentation" className={styles.links}>
            <Breadcrumbs
                separator={<FiberManualRecordIcon sx={{ fontSize: '12px' }} />}
                aria-label="breadcrumb"
            >
                <Link href="/">Home</Link>
                {pathnames.map((chunk, i) => {
                    const last = i === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, i + 1).join('/')}`;
                    const content = decodeURIComponent(chunk).replace(/\_+/g, ' ');
                    return last ? (
                        <Typography key={content} color="text.secondary" sx={{ fontSize: '22px' }}>
                            {content}
                        </Typography>
                    ) : (
                        <Link key={content} href={to}>
                            {content}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </Box>
    );
}
