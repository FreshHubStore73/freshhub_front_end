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
))({
    height: '78px',
    borderRadius: '50px',
    fontSize: '28px',
});

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
