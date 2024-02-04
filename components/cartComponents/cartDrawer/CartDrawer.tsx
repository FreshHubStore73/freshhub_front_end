import { FC, useCallback } from 'react';

import { Box, Stack } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import { useShoppingCart } from '../../../store';

import EmptyBlock from '@/components/emptyBlock/EmptyBlock';
import CartHeader from '../cartHeader/CartHeader';
import CartListItem from '../cartListItem/CartListItem';
import CartFooter from '../cartFooter/CartFooter';

const CartDrawer: FC<{
    showDrawer: boolean;
    closeDrawer: () => void;
}> = ({ showDrawer, closeDrawer }) => {
    const dishes = useShoppingCart((state) => state.dishes);
    const totalAmount = useShoppingCart((state) => state.totalAmount);

    console.log('drawer');
    const content = (
        <>
            <Stack
                flexGrow={'1'}
                sx={{
                    overflowY: 'auto',
                    scrollbarWidth: 'thin',
                    '& .MuiStack-root': {
                        paddingRight: '10px',
                        '&::-webkit-scrollbar': {
                            width: 'thin',
                        },
                    },
                }}
                gap={'32px'}
                marginBlock={'46px'}
            >
                {dishes.map((dish) => (
                    <CartListItem key={dish.dishId} dish={dish} />
                ))}
            </Stack>
            <CartFooter totalAmount={totalAmount} closeDrawer={closeDrawer} />
        </>
    );
    return (
        <Drawer anchor="right" open={showDrawer} onClose={closeDrawer}>
            <Box
                sx={{
                    width: '602px',
                    padding: '44.3px 52px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                role="presentation"
            >
                <CartHeader closeDrawer={closeDrawer} />
                {dishes.length ? content : <EmptyBlock />}
            </Box>
        </Drawer>
    );
};

export default CartDrawer;
