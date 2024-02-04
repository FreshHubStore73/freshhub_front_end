import React, { useCallback } from 'react';
import CartIcon from '../cartIcon';
import CartDrawer from '../cartDrawer';

type Props = {};

export default function Cart({}: Props) {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const handleCloseDrawer = useCallback(() => {
        setShowDrawer(false);
    }, []);
    const toggleDrawer = () => {
        setShowDrawer((prevState) => !prevState);
    };
    return (
        <>
            <CartIcon toggleDrawer={toggleDrawer} />
            <CartDrawer showDrawer={showDrawer} closeDrawer={handleCloseDrawer} />
        </>
    );
}
