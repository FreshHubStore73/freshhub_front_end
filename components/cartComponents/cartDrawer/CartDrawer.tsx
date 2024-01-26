import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import React, { FC } from 'react';
import CartListShort from '../cartListShort/CartListShort';

const CartDrawer: FC<{
    showDrawer: boolean;
    setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showDrawer, setShowDrawer }) => {
    const toggleDrawer = (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setShowDrawer(false);
    };

    return (
        <Drawer anchor="right" open={showDrawer} onClose={toggleDrawer}>
            <Box
                sx={{ width: '450px' }}
                role="presentation"
                onClick={() => setShowDrawer(false)}
                onKeyDown={() => setShowDrawer(false)}
            >
                <CartListShort />
            </Box>
        </Drawer>
    );
};

export default CartDrawer;
