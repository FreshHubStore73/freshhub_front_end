'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress, Typography } from '@mui/material';

import Contacts from './contacts/Contacts';
import Address from './address/Address';
import Time from './time/Time';
import PaymentsPC from './paymentsPC/PaymentsPC';
import ConfirmOrderButton from './confirmOrder/ConfirmOrder';
import CustomizedAccordions from './comments/Comments';
import OrderedDishes from './orderedDishes/OrderedDishes';
import OrderList from './orderList/OrderList';
import Success from './success/Success';
import { orderAction } from '@/actions/order';
import { useCartStore } from '@/stores/Stores-providers';
import StubBlock from '../stubBlock/StubBlock';

export default function OrderPage() {
    const { replace } = useRouter();

    const [state, formAction] = useFormState(orderAction, { message: '' });
    const [openSuccess, setOpenSuccess] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    const clearCart = useCartStore(state => state.clearCart);

    const dishes = useCartStore((state) => state.dishes);

    const handleCloseSuccess = useCallback(() => {
        replace('/profile?history=true');
        clearCart();
        //окно не закрываем, т.к. оно само размонтируется после перехода на страницу профиля 
    }, [clearCart, replace]);

    useEffect(() => {
        if (state.message === 'Ok') {
            setOpenSuccess(true);
        }
    }, [state]);

    useEffect(() => {
        if (dishes && !dishes.length && !openSuccess) {
            replace('/');
        }
    }, [replace, dishes, openSuccess]);

    return (
        <>
            {dishes === null || !dishes.length ? (
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
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { mobile: '1fr', desktop: '1fr 1fr' },
                        marginTop: { mobile: '14px', tablet: '24px', desktop: '36px' },
                        columnGap: { mobile: '0px', desktop: '107px' },
                        rowGap: { mobile: '20px', tablet: '36px', desktop: '0px' },
                    }}
                >
                    <Box
                        sx={{
                            // overflow: 'hidden',
                            // marginRight: { mobile: '0px', desktop: '10px' }
                        }}
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
                        <Contacts />
                        <Address />
                        <Time />
                        <PaymentsPC />
                    </Box>
                    <Box
                        sx={{
                            // overflow: 'hidden',
                            // marginLeft: { mobile: '0px', desktop: '10px' }
                        }}
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
                            <ConfirmOrderButton />
                            <OrderedDishes dishes={dishes} />
                        </Box>
                    </Box>
                </Box>
            )}
            <Success onClose={handleCloseSuccess} open={openSuccess}>
                <StubBlock text="Your order has been successfully placed" />
            </Success>
        </>
    );
}
