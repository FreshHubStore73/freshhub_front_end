import React from 'react';

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

type Props = {};

const ConfirmBtn = styled((props: ButtonProps) => (
    <Button fullWidth type="submit" variant="contained" {...props} />
))({
    height: '78px',
    borderRadius: '50px',
    fontSize: '28px',
});

export default function ConfirmOrder({}: Props) {
    const handleSubmit = () => {};
    return <ConfirmBtn onClick={handleSubmit}>Confirm order</ConfirmBtn>;
}
