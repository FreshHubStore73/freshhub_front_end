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
            <Box mt={'111px'}>
                <BreadCrumbs singlePage="Order Page" />
                <Box
                    component={'form'}
                    ref={formRef}
                    action={formAction}
                    // onSubmit={handleSubmit}
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
                            {/* временная лабуда для отслеживания ошибок сервера */}
                            {state.message !== 'Ok' ? (
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.error.main,
                                        marginBlock: '24px',
                                        fontSize: '20px',
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
            </Box>
            <Success onClose={handleCloseSuccess} open={openSuccess} />
        </>
    );
}
