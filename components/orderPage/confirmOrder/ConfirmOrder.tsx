import React, { useCallback } from 'react';

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Success from './../success/Success';
import { useRouter } from 'next/navigation';
import useTimeout from '@/hooks/useTimeout';
import { useShoppingCart } from '@/store';

type Props = {};

const ConfirmBtn = styled((props: ButtonProps) => (
    <Button fullWidth type="submit" variant="contained" {...props} />
))({
    height: '78px',
    borderRadius: '50px',
    fontSize: '28px',
});

export default function ConfirmOrder({}: Props) {
    const { prefetch, replace, push } = useRouter();
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const { clearCart } = useShoppingCart();
    const { startTimer, cancelTimer } = useTimeout(() => {
        replace('/profile?history=true');
        clearCart();
    }, 11500);

    const handleSubmit = () => {
        startTimer();
        setOpenSuccess(true);
    };

    const handleCloseSuccess = useCallback(() => {
        replace('/profile?history=true');
        clearCart();
        cancelTimer();
    }, []);

    return (
        <>
            <ConfirmBtn onClick={handleSubmit}>Confirm order</ConfirmBtn>
            <Success onClose={handleCloseSuccess} open={openSuccess} />
        </>
    );
}
