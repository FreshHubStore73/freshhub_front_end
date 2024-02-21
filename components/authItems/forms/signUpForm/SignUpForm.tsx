'use client';
import React, { useEffect, useState } from 'react';
import { Box, Button, FormHelperText, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { register } from '@/utils/actions';
import { useFormState } from 'react-dom';
import SubmitButton from '../../submitButton/SubmitButton';

type Props = {};

export default function SignUpForm({}: Props) {
    const [state, formAction] = useFormState(register, { message: '' });
    const { replace } = useRouter();
    // useEffect(() => {
    if (state.message === 'User has been created') replace('/login');
    // }, [state]);
    return (
        <Box
            component="form"
            // onSubmit={handleSubmit}
            action={formAction}
            sx={{
                display: 'grid',
                gap: '24px',
            }}
        >
            <TextField type="text" name="firstName" placeholder="Your first name" required />
            <TextField type="text" name="lastName" placeholder="Your last name" required />
            <TextField type="text" name="phoneNumber" placeholder="Your phone number" required />
            <TextField type="password" name="password" required />

            {state && <FormHelperText>{state?.message}</FormHelperText>}
            <SubmitButton text="Sign up" />
        </Box>
    );
}
