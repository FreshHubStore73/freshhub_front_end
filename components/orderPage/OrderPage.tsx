import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Contact from './contact/Contact';
import BreadCrumbs from '../breadcrumbs/Breadcrumbs';

type Props = {};

export default function OrderPage({}: Props) {
    return (
        <Box mt={'111px'}>
            <BreadCrumbs />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    mt: '36px',
                }}
            >
                <Box sx={{ width: '50%', gap: '107px' }}>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: '40px',
                            mb: '24px',
                            color: 'text.secondary',
                        }}
                    >
                        {' '}
                        Placing an order
                    </Typography>
                    <Contact />
                </Box>
                <Box sx={{ width: '50%' }}></Box>
            </Box>
        </Box>
    );
}
