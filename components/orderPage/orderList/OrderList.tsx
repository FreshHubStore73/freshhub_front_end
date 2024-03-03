import { Box, Divider, Typography } from '@mui/material';

import CartListItem from '@/components/cartListItem/CartListItem';
import { useShoppingCart } from '@/store';
import ConfirmOrderButton from '../confirmOrder/ConfirmOrder';

const Title = () => {
    return (
        <Typography
            component={'h3'}
            sx={{ fontWeight: 700, fontSize: '40px', color: 'text.secondary', mb: '26px' }}
        >
            Total
        </Typography>
    );
};

const Dishes = () => {
    const dishes = useShoppingCart((state) => state.dishes);
    return (
        <Box
            component={'ul'}
            sx={{ display: 'flex', gap: '26px', flexDirection: 'column', mb: '31px' }}
        >
            {dishes.map((dish) => (
                <CartListItem key={dish.id} dish={dish} isOrder={true} />
            ))}
        </Box>
    );
};

const Footer = () => {
    const totalAmount = useShoppingCart((state) => state.totalAmount);
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '12px' }}>
                <Typography sx={{ fontSize: '24px' }}>Delivery</Typography>
                <Typography sx={{ fontSize: '26px', color: 'text.secondary' }}>Free</Typography>
            </Box>
            <Divider sx={{ mb: '15px', borderColor: '#E1D5C9' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '16px' }}>
                <Typography sx={{ fontSize: '38px' }}>To pay</Typography>
                <Typography sx={{ fontSize: '38px', color: 'text.secondary', fontWeight: 700 }}>
                    ${totalAmount}
                </Typography>
            </Box>
            <Divider sx={{ mb: '15px', borderColor: '#E1D5C9' }} />
            <ConfirmOrderButton />
        </>
    );
};

export default function OrderList() {
    return (
        <Box sx={{ border: '1px solid #FFC182', borderRadius: '40px', p: '36px' }}>
            <Title />
            <Dishes />
            <Footer />
        </Box>
    );
}
