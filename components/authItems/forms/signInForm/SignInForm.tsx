'use client';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter, useSearchParams } from 'next/navigation';

import { Box, FormHelperText, TextField } from '@mui/material';

import SubmitButton from '../../submitButton/SubmitButton';
import { IFormState, login } from '@/components/authItems/auth';
import { useAuth } from '@/hooks/useAuth';

type Props = {};
const initialState: IFormState = { message: '', user: null };

export default function SignInForm({}: Props) {
    const [state, formAction] = useFormState(login, initialState);
    const { signIn } = useAuth();
    const { replace } = useRouter();
    const callbackUrl = useSearchParams().get('callbackUrl') || '/';

    useEffect(() => {
        if (state?.user) {
            signIn(state.user);
            replace(callbackUrl);
        }
    }, [state]);

    return (
        <Box
            component="form"
            action={formAction}
            sx={{
                display: 'grid',
                gap: '24px',
            }}
        >
            <TextField type="text" name="phoneNumber" placeholder="Phone number" />
            <TextField type="password" name="password" placeholder="Password" />
            {typeof state?.message === 'string' && (
                <FormHelperText>{state?.message}</FormHelperText>
            )}
            <SubmitButton isFormInvalid={false} text="Sign In" />
        </Box>
    );
}
