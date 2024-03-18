'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Box, Typography } from '@mui/material';

import Contact from './contact/Contact';
import BreadCrumbs from '../breadcrumbs/Breadcrumbs';
import Address from './address/Address';
import OrderList from './orderList/OrderList';
import CustomizedAccordions from './comments/Comments';
import PaymentsPC from './paymentsPC/PaymentsPC';
import Time from './time/Time';
import { useShoppingCart } from '@/store';
import { orderAction } from '@/utils/actions';
import { useFormState } from 'react-dom';
import ConfirmOrderButton from './confirmOrder/ConfirmOrder';
import Success from './success/Success';
import { useRouter } from 'next/navigation';
import useTimeout from '@/hooks/useTimeout';
import OrderedDishes from './orderedDishes/OrderedDishes';

type Props = {};

export default function OrderPage({}: Props) {
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const { replace } = useRouter();

    const dishes = useShoppingCart((state) => state.dishes);
    const [state, formAction] = useFormState(orderAction, {
        message: '',
    });
    const { clearCart } = useShoppingCart();
    const { startTimer, cancelTimer } = useTimeout(() => {
        replace('/profile?history=true');
        clearCart();
    }, 1500);

    const handleCloseSuccess = useCallback(() => {
        replace('/profile?history=true');
        clearCart();
        cancelTimer();
    }, []);

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current?.requestSubmit();
        }
    };

    useEffect(() => {
        console.log(state.message);
        if (state.message === 'Ok') {
            startTimer();
            setOpenSuccess(true);
        }
    }, [state]);

    return (
        <>
            <BreadCrumbs singlePage="Order Page" />
            <Box
                component={'form'}
                ref={formRef}
                action={formAction}
                // onSubmit={handleSubmit}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { mobile: '1fr', desktop: '1fr 1fr' },
                    marginTop: { mobile: '14px', tablet: '24px', desktop: '36px' },
                    columnGap: { mobile: '0px', desktop: '87px' },
                    rowGap: { mobile: '20px', tablet: '36px', desktop: '0px' },
                }}
            >
                <Box sx={{ overflow: 'hidden', marginRight: { mobile: '0px', desktop: '10px' } }}>
                    <Typography
                        component={'h1'}
                        sx={{
                            fontWeight: 700,
                            fontSize: { mobile: '22px', tablet: '30px', desktop: '40px' },
                            marginBottom: { mobile: '10px', tablet: '18px', desktop: '24px' },
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
                <Box sx={{ overflow: 'hidden', marginLeft: { mobile: '0px', desktop: '10px' } }}>
                    <CustomizedAccordions />
                    <Box
                        sx={{
                            border: '1px solid #FFC182',
                            borderRadius: '40px',
                            p: { mobile: '12px 18px', tablet: '26px 41px', desktop: '36px' },
                        }}
                    >
                        <OrderList />
                        {/* временная лабуда для отслеживания ошибок сервера */}
                        {state.message !== 'Ok' ? (
                            <Typography
                                sx={{
                                    color: 'error.main',
                                    marginBlock: {
                                        mobile: '16px',
                                        tablet: '20px',
                                        desktop: '24px',
                                    },
                                    fontSize: { mobile: '12px', tablet: '16px', desktop: '20px' },
                                }}
                            >
                                {state.message}
                            </Typography>
                        ) : null}
                        <ConfirmOrderButton handleSubmit={handleSubmit} />
                        <OrderedDishes dishes={dishes} />
                    </Box>
                </Box>
            </Box>
            <Success onClose={handleCloseSuccess} open={openSuccess} />
        </>
    );
}
