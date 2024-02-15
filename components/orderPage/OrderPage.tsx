'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Contact from './contact/Contact';
import BreadCrumbs from '../breadcrumbs/Breadcrumbs';
import Address from './address/Address';
import OrderList from './orderList/OrderList';
import CustomizedAccordions from './comments/Comments';
import PaymentsPC from './paymentsPC/PaymentsPC';
import Time from './time/Time';

type Props = {};

export default function OrderPage({}: Props) {
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let jsonObject: { [key: string]: any } = {};

        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        let jsonData = JSON.stringify(jsonObject);
        console.log(jsonData);
    };
    return (
        <Box mt={'111px'}>
            <BreadCrumbs />
            <Box
                component={'form'}
                onSubmit={handleSubmit}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    marginTop: '36px',
                    columnGap: '87px',
                }}
            >
                <Box sx={{ overflow: 'hidden', marginRight: '10px' }}>
                    <Typography
                        component={'h1'}
                        sx={{
                            fontWeight: 700,
                            fontSize: '40px',
                            marginBottom: '24px',
                            color: 'text.secondary',
                            textTransform: 'none',
                        }}
                    >
                        {' '}
                        Placing an order
                    </Typography>
                    <Contact />
                    <Address />
                    <Time />
                    <PaymentsPC />
                </Box>
                <Box sx={{ overflow: 'hidden', marginLeft: '10px' }}>
                    <CustomizedAccordions />
                    <Box sx={{ border: '1px solid #FFC182', borderRadius: '40px', p: '36px' }}>
                        <OrderList />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
