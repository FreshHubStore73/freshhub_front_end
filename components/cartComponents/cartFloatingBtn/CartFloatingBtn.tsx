'use client';
import { useShoppingCart } from '../../../store';

import ShoppingCartSharp from '@mui/icons-material/ShoppingCartSharp';
import Fab from '@mui/material/Fab';
import React from 'react';
import { Badge, Box } from '@mui/material';
import CartDrawer from '../cartDrawer/CartDrawer';

const CartFloatingBtn = () => {
    const totalDishes = useShoppingCart((state) => state.totalDishes);
    const [showDrawer, setShowDrawer] = React.useState(false);

    return (
        <>
            <Box>
                <Box sx={{ position: 'fixed', bottom: 100, right: 50 }}>
                    <Badge badgeContent={totalDishes} showZero color="primary">
                        <Fab
                            sx={{ bgcolor: 'grey' }}
                            onClick={() => setShowDrawer(true)}
                            color="primary"
                            aria-label="add"
                        >
                            <ShoppingCartSharp />
                        </Fab>
                    </Badge>
                </Box>
                <CartDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
            </Box>
        </>
    );
};

export default CartFloatingBtn;
