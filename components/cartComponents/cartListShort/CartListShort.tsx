import React from 'react';
import { useShoppingCart } from '../../../store';
import { Box, Divider, Stack, Typography } from '@mui/material';

const CartListShort = ({}) => {
    const dishes = useShoppingCart((state) => state.dishes);
    const totalAmount = useShoppingCart((state) => state.totalAmount);
    return (
        <Box paddingInline={'20px'}>
            <Typography
                variant="h3"
                component={'h3'}
                sx={{ textAlign: 'center', paddingBlock: '20px' }}
            >
                Your cart
            </Typography>
            <Stack spacing={2} useFlexGap>
                <Divider />
                {dishes.map(({ dishId, dTitle, dPrice, dQuantity }, i) => (
                    <Stack key={dishId} direction="row" justifyContent="space-between">
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingInline: '10px',
                            }}
                        >
                            <span>{i + 1}. </span>
                            <span>{dTitle} - </span>
                            <span>{dQuantity} * </span>
                            <span>{dPrice}</span>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <span>=</span>
                            <span>{dPrice * dQuantity}₴</span>
                        </Stack>
                    </Stack>
                ))}
                <Divider />
                <Stack textAlign={'right'}>
                    <Typography fontWeight="bold">Total:</Typography>
                </Stack>
                <Stack textAlign={'right'}>
                    <Typography>{totalAmount} ₴</Typography>
                </Stack>
            </Stack>
        </Box>
    );
};

export default CartListShort;
