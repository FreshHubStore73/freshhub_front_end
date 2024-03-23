'use client';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useFormState } from 'react-dom';

import { useRouter } from 'next/navigation';

import { Box, CircularProgress, Typography } from '@mui/material';

import BreadCrumbs from '../breadcrumbs/Breadcrumbs';
import Contact from './contact/Contact';
import Address from './address/Address';
import Time from './time/Time';
import PaymentsPC from './paymentsPC/PaymentsPC';
import ConfirmOrderButton from './confirmOrder/ConfirmOrder';
import CustomizedAccordions from './comments/Comments';
import OrderedDishes from './orderedDishes/OrderedDishes';
import OrderList from './orderList/OrderList';
import Success from './success/Success';

import useTimeout from '@/hooks/useTimeout';
import { orderAction } from '@/utils/actions';
import { useShoppingCart } from '@/store';

type Props = {};

export default function OrderPage({}: Props) {
    const { replace } = useRouter();

    const [state, formAction] = useFormState(orderAction, { message: '' });
    const [openSuccess, setOpenSuccess] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const { clearCart } = useShoppingCart();
    const [isOrdered, setIsOrdered] = useState(false);
    const dishes = useShoppingCart((state) => state.dishes);

    const { startTimer, cancelTimer } = useTimeout(() => {
        replace('/profile?history=true');
        clearCart();
    }, 1500);

    //guarantee that updating cart on reload page (or hard navigation) doesn't cause redirecting to the home page
    if (typeof window !== 'undefined') {
        const cartInLS = window.localStorage.getItem('cart');
        if (cartInLS && !JSON.parse(cartInLS).state.dishes.length && !isOrdered)
            setTimeout(() => replace('/'), 0);
    }

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
        if (state.message === 'Ok') {
            startTimer();
            setOpenSuccess(true);
            setIsOrdered(true);
        }
    }, [state]);

    return (
        <>
            <BreadCrumbs singlePage="Order Page" />
            {!dishes.length ? (
                <Box
                    sx={{
                        display: 'flex',
                        height: '50vh',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
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
                    <Box
                        sx={{ overflow: 'hidden', marginRight: { mobile: '0px', desktop: '10px' } }}
                    >
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
                    <Box
                        sx={{ overflow: 'hidden', marginLeft: { mobile: '0px', desktop: '10px' } }}
                    >
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
                                        fontSize: {
                                            mobile: '12px',
                                            tablet: '16px',
                                            desktop: '20px',
                                        },
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
            )}
            <Success onClose={handleCloseSuccess} open={openSuccess} />
        </>
    );
}
