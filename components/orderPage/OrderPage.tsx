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
import { useShoppingCart } from '@/store';

type Props = {};
interface IOrder {
    recipient: string;
    phoneNumber: string;
    streetHouse: string;
    flat: string;
    floor: string;
    numberPersons: number;
    call: boolean;
    payment: string;
    comment: string;
    orderedDishes: {
        id: number;
        quantity: number;
        price: number;
    }[];
}

export default function OrderPage({}: Props) {
    const dishes = useShoppingCart((state) => state.dishes);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let jsonObject: { [key: string]: any } = {};

        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });

        // let order: IOrder = {
        // recipient: formData.get();
        // phoneNumber: string;
        // streetHouse: string;
        // flat: string;
        // floor: string;
        // numberPersons: number;
        // call: boolean;
        // payment: string;
        // comment: string;
        // orderedDishes: {
        //     id: number;
        //     quantity: number;
        //     price: number;
        // }[];
        // };

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
                    <OrderList />
                </Box>
            </Box>
        </Box>
    );
}
