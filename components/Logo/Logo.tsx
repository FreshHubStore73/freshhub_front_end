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
                {/* <Image src="/Logo.jpg" width={60} height={60} alt="Logo" /> */}
                <Typography
                    variant="h6"
                    noWrap
                    component="span"
                    sx={{
                        mr: 2,
                        // display: { xs: 'none', lg: 'flex' },
                        fontWeight: 700,
                        fontSize: '32px',
                    }}
                >
                    {/* 𝕱𝖗𝖊𝖘𝖍𝕳𝖚𝖇 */}
                    Logo
                </Typography>
            </Link>
        </Box>
    );
}
