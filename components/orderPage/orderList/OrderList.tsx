import { Box, Divider, Typography } from '@mui/material';

import CartListItem from '@/components/cartListItem/CartListItem';
import { useCartStore } from '@/stores/Stores-providers';

const Title = () => {
    return (
        <Typography
            component={'h3'}
            sx={{
                fontWeight: 700,
                fontSize: { mobile: '20px', tablet: '32px', desktop: '40px' },
                color: 'text.secondary',
                mb: { mobile: '12px', tablet: '26px', desktop: '26px' },
            }}
        >
            Total
        </Typography>
    );
};

const Dishes = () => {
    const dishes = useCartStore((state) => state.dishes);
    if (!dishes) return;
    return (
        <Box
            component={'ul'}
            sx={{
                display: 'flex',
                gap: { mobile: '12px', tablet: '27px', desktop: '26px' },
                flexDirection: 'column',
                mb: { mobile: '22px', tablet: '24px', desktop: '31px' },
            }}
        >
            {dishes.map((dish) => (
                <CartListItem key={dish.productName} dish={dish} isOrder={true} />
            ))}
        </Box>
    );
};

const Footer = () => {
    const totalAmount = useCartStore((state) => state.totalAmount);
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: { mobile: '8px', tablet: '10px', desktop: '12px' },
                }}
            >
                <Typography sx={{ fontSize: { mobile: '14px', tablet: '20px', desktop: '24px' } }}>
                    Delivery
                </Typography>
                <Typography
                    sx={{
                        fontSize: { mobile: '14px', tablet: '22px', desktop: '26px' },
                        color: 'text.secondary',
                    }}
                >
                    Free
                </Typography>
            </Box>
            <Divider
                sx={{
                    mb: { mobile: '8px', tablet: '14px', desktop: '15px' },
                    borderColor: '#E1D5C9',
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: { mobile: '9px', tablet: '13px', desktop: '16px' },
                }}
            >
                <Typography sx={{ fontSize: { mobile: '14px', tablet: '20px', desktop: '38px' } }}>
                    To pay
                </Typography>
                <Typography
                    sx={{
                        fontSize: { mobile: '16px', tablet: '26px', desktop: '38px' },
                        color: 'text.secondary',
                        fontWeight: 700,
                    }}
                >
                    ${totalAmount}
                </Typography>
            </Box>
            <Divider
                sx={{
                    mb: { mobile: '11px', tablet: '22px', desktop: '24px' },
                    borderColor: '#E1D5C9',
                }}
            />
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
