'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

import { Box, FormHelperText, TextField } from '@mui/material';

import SubmitButton from '../../submitButton/SubmitButton';
import { register } from '@/components/authItems/auth';

type Props = {};

export default function SignUpForm({}: Props) {
    const [state, formAction] = useFormState(register, { message: '' });
    const { replace } = useRouter();

    if (state.message === 'User has been created') replace('/login');

    return (
        <Box
            component="form"
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
