import { Box, Divider, Typography } from '@mui/material';

import CartListItem from '@/components/cartListItem/CartListItem';
import { useShoppingCart } from '@/store';

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
                <CartListItem key={dish.dishId} dish={dish} isOrder={true} />
            ))}
        </Box>
    );
};

const Footer = () => {
    const totalAmount = useShoppingCart((state) => state.totalAmount);
    return (
        <>
            <Divider sx={{ mb: '15px', borderColor: '#E1D5C9' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '16px' }}>
                <Typography sx={{ fontSize: '38px' }}>To pay</Typography>
                <Typography sx={{ fontSize: '38px', color: 'text.secondary', fontWeight: 700 }}>
                    ${totalAmount}
                </Typography>
            </Box>
            <Divider sx={{ mb: '15px', borderColor: '#E1D5C9' }} />
        </>
    );
};

export default function OrderList() {
    return (
        <>
            <Title />
            <Dishes />
            <Footer />
        </>
    );
}
