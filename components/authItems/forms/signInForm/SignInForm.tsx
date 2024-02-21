'use client';
import React, { useEffect } from 'react';
import { Box, Button, FormHelperText, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useFormState } from 'react-dom';
import SubmitButton from '../../submitButton/SubmitButton';

import { login } from '@/utils/actions';

type Props = {};
const initialState: {
    message?: string;
    // success?: boolean;
} = {};
export default function SignInForm({}: Props) {
    const [state, formAction] = useFormState(login, initialState);
    // const { replace } = useRouter();

    // if (state.message === 'Ok. Now you will be redirected to Home page') replace('/');
    // useEffect(() => {
    //     if (state?.success) {
    //         replace('/');
    //     }
    // }, [state]);
    return (
        <Box
            component="form"
            action={formAction}
            sx={{
                display: 'grid',
                gap: '24px',
            }}
        >
            <TextField type="text" name="phoneNumber" placeholder="Phone number" required />
            <TextField type="password" name="password" placeholder="Password" required />
            {state?.message && <FormHelperText>{state?.message}</FormHelperText>}
            <SubmitButton text="Sign In" />
        </Box>
    );
}
