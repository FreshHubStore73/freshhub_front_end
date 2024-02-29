import React, { useCallback } from 'react';
import CartIcon from '../cartIcon';
import CartDrawer from '../cartDrawer';

type Props = {
    anchEl: HTMLElement | null;
};

export default function Cart({ anchEl }: Props) {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const handleCloseDrawer = useCallback(() => {
        setShowDrawer(false);
    }, []);
    const toggleDrawer = () => {
        setShowDrawer((prevState) => !prevState);
    };

    return (
        <>
            <CartIcon anchEl={anchEl} toggleDrawer={toggleDrawer} />
            <CartDrawer showDrawer={showDrawer} closeDrawer={handleCloseDrawer} />
        </>
    );
}
