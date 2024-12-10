import { FC } from 'react';

import { Box, Stack } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import { useShoppingCart } from '../../../store';

import StubBlock from '@/components/stubBlock/StubBlock';
import CartHeader from '../cartHeader/CartHeader';
import CartListItem from '../../cartListItem/CartListItem';
import CartFooter from '../cartFooter/CartFooter';

const CartDrawer: FC<{
    showDrawer: boolean;
    closeDrawer: () => void;
}> = ({ showDrawer, closeDrawer }) => {
    const dishes = useShoppingCart((state) => state.dishes);
    const totalAmount = useShoppingCart((state) => state.totalAmount);

    const content = (
        <>
            <Stack
                component={'ul'}
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    overflowY: 'auto',
                    scrollbarWidth: 'thin',
                    '&.MuiStack-root': {
                        paddingRight: '10px',
                        '&::-webkit-scrollbar': {
                            width: 'thin',
                        },
                    },
                    gap: { mobile: '16px', tablet: '28px', desktop: '32px' },
                    marginBlock: { mobile: '12px', tablet: '30px', desktop: '46px' },
                }}
            >
                {dishes.map((dish) => (
                    <CartListItem key={dish._id} dish={dish} />
                ))}
            </Stack>
            <CartFooter totalAmount={totalAmount} closeDrawer={closeDrawer} />
        </>
    );
    return (
        <Drawer
            anchor="right"
            open={showDrawer}
            onClose={closeDrawer}
            sx={{
                '& .MuiDrawer-paper': {
                    borderRadius: '30px 0 0 30px',
                },
            }}
        >
            <Box
                sx={{
                    width: {
                        mobile: '63vw',
                        tablet: '48vw',
                        desktop: '602px',
                    },
                    minWidth: {
                        mobile: '63vw',
                        tablet: '48vw',
                        desktop: '602px',
                    },
                    maxWidth: {
                        mobile: '300px',
                        tablet: '450px',
                        desktop: '602px',
                    },
                    padding: { mobile: '18px 14px', tablet: '26px 20px', desktop: '44.3px 52px' },
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                role="presentation"
            >
                <CartHeader closeDrawer={closeDrawer} />
                {dishes.length ? content : <StubBlock />}
            </Box>
        </Drawer>
    );
};

export default CartDrawer;
