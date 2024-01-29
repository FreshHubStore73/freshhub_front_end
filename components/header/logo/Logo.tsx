'use client';
import Link from 'next/link';
import Image from 'next/image';

import styles from './logo.module.scss';
import { Box, Typography } from '@mui/material';

export default function Logo() {
    return (
        <Box
            sx={{
                flexGrow: { xs: 1, md: 0 },
                justifyContent: 'center',
            }}
        >
            <Link href="/" className={styles.logo}>
                <Typography
                    variant="header"
                    noWrap
                    component="span"
                    sx={{
                        mr: 2,
                    }}
                >
                    Logo
                </Typography>
            </Link>
        </Box>
    );
}
