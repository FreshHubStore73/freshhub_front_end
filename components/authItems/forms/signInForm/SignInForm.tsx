'use client';
import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { useRouter, useSearchParams } from 'next/navigation';

import { Box, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import { login } from '@/components/authItems/auth';
import { useAuth } from '@/hooks/useAuth';
import PhoneInput from '../signUpForm/PhoneInput';
import SubmitButton from '../../submitButton/SubmitButton';
import PasswordInput from '../signUpForm/PasswordInput';

type Props = {};
const initialState: ISignInFormState = { message: '', user: null };
export default function SignInForm({}: Props) {
    const [state, formAction] = useFormState(login, initialState);
    const { signIn } = useAuth();
    const { replace } = useRouter();
    const callbackUrl = useSearchParams().get('callbackUrl') || '/';

    const methods = useForm<IUserCredentials>({
        defaultValues: {
            phoneNumber: '',
            password: '',
        },
    });

    const {
        formState: { isValid },
        trigger,
    } = methods;

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state?.user) {
            signIn(state.user);
            replace(callbackUrl);
        }
    }, [state, callbackUrl, signIn, replace]);

    return (
        <FormProvider {...methods}>
            <Box
                component="form"
                action={formAction}
                ref={formRef}
                sx={{
                    width: '100%',
                    mt: '50px',
                    display: 'grid',
                    rowGap: '38px',
                    columnGap: '20px',
                    gridTemplate: 'repeat(3, auto) / 1fr',
                }}
            >
                <PhoneInput variant="signin" />
                <PasswordInput variant="signin" />

                <Box
                    sx={{
                        mt: '12px',
                        gridArea: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {/* временная лабуда для отслеживания ошибок сервера */}
                    {state?.message !== 'Ok' ? (
                        <Typography
                            sx={{
                                color: 'error.main',
                                mb: '24px',
                                fontSize: '20px',
                            }}
                        >
                            {state?.message}
                        </Typography>
                    ) : null}

                    <SubmitButton
                        text="Sign in"
                        onClick={(e) => {
                            e.preventDefault();
                            trigger(['phoneNumber', 'password']);
                            if (isValid) formRef.current?.requestSubmit();
                        }}
                    />
                </Box>
            </Box>
        </FormProvider>
    );
}
