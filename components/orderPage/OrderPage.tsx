'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Contact from './contact/Contact';
import BreadCrumbs from '../breadcrumbs/Breadcrumbs';
import Address from './address/Address';
import OrderList from './orderList/OrderList';
import CustomizedAccordions from './comments/Comments';
import PaymentsPC from './paymentsPC/PaymentsPC';

type Props = {};

export default function OrderPage({}: Props) {
    return (
        <Box mt={'111px'}>
            <BreadCrumbs />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    mt: '36px',
                    columnGap: '107px',
                }}
            >
                <Box sx={{ overflow: 'hidden' }}>
                    <Typography
                        component={'h1'}
                        sx={{
                            fontWeight: 700,
                            fontSize: '40px',
                            mb: '24px',
                            color: 'text.secondary',
                            textTransform: 'none',
                        }}
                    >
                        {' '}
                        Placing an order
                    </Typography>
                    <Contact />
                    <Address />
                    <PaymentsPC />
                </Box>
                <Box sx={{ overflow: 'hidden' }}>
                    <CustomizedAccordions />
                    <Box sx={{ border: '1px solid #FFC182', borderRadius: '40px', p: '36px' }}>
                        <OrderList />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
