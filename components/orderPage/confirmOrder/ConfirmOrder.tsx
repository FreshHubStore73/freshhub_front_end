import React, { useCallback } from 'react';

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import useTimeout from '@/hooks/useTimeout';
import { useShoppingCart } from '@/store';
import { useFormStatus } from 'react-dom';

type Props = { handleSubmit?: React.MouseEventHandler<HTMLButtonElement> };

const ConfirmBtn = styled((props: ButtonProps) => (
    <Button fullWidth type="submit" variant="contained" {...props} />
))(({ theme }) => ({
    [theme.breakpoints.up('mobile')]: {
        height: '44px',
        fontSize: '16px',
        borderRadius: '26px',
    },
    [theme.breakpoints.up('tablet')]: {
        height: '69px',
        fontSize: '24px',
        borderRadius: '50px',
    },
    [theme.breakpoints.up('desktop')]: {
        height: '78px',
        fontSize: '28px',
        borderRadius: '50px',
    },
    '&:hover': {
        backgroundColor: theme.palette.accent.main,
    },
}));

export default function ConfirmOrder({ handleSubmit }: Props) {
    const { pending } = useFormStatus();

    return (
        <>
            <ConfirmBtn disabled={pending} onClick={handleSubmit}>
                Confirm order
            </ConfirmBtn>
        </>
    );
}
