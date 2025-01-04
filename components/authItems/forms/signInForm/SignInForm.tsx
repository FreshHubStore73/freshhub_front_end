'use client';
import React, { useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import PhoneInput from '../signUpForm/PhoneInput';
import SubmitButton from '../../submitButton/SubmitButton';
import PasswordInput from '../signUpForm/PasswordInput';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

type Props = {};

export default function SignInForm({ }: Props) {

    const callbackUrl = useSearchParams().get('callbackUrl') || '/';
    const { replace } = useRouter();

    const methods = useForm<UserCredentials>({
        defaultValues: {
            phoneNumber: '',
            password: '',
        },
    });

    const {
        formState: { isValid, isSubmitting, errors },
        handleSubmit,
        setError
    } = methods;

    const formRef = useRef<HTMLFormElement>(null);

    const handleGoogleSignIn = async () => {
        signIn('google', { callbackUrl });
    }
    const onSubmit = async (data: UserCredentials) => {
        const { password, phoneNumber } = data;
        const phone = phoneNumber.replace(/[^+0-9]/g, '');
        await signIn('credentials', {
            phoneNumber: phone,
            password,
            redirect: false,
        }).catch((err) => {
            setError('root.serverError', { type: 'custom', message: err.message });
        }).then((res) => {
            const message = res?.status === 401 ?
                'Wrong phone number or password' :
                'An unexpected error occurred. Please try again later';
            if (!res?.ok) {
                setError('root.serverError', { type: 'custom', message });
                return;
            }

            replace(callbackUrl);
        })
    }
    return (
        <FormProvider {...methods}>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                ref={formRef}
                sx={{
                    width: '100%',
                    mt: { mobile: '30px', tablet: '40px', desktop: '50px' },
                    display: 'grid',
                    rowGap: { mobile: '14px', tablet: '24px', desktop: '38px' },
                    gridTemplate: 'repeat(3, auto) / 1fr',
                }}
            >
                <PhoneInput variant="signin" />
                <PasswordInput variant="signin" />

                <Box
                    sx={{
                        mt: { mobile: '10px', tablet: '16px', desktop: '12px' },
                        gridArea: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {errors.root?.serverError.type === 'custom' && <Typography
                        sx={{
                            color: 'error.main',
                            mb: { mobile: '16px', tablet: '20px', desktop: '24px' },
                            fontSize: { mobile: '16px', tablet: '18px', desktop: '20px' },
                        }}
                    >
                        {errors.root.serverError.message}
                    </Typography>}

                    <SubmitButton
                        text="Sign in"
                        isValid={isValid && !isSubmitting}
                    />
                </Box>
            </Box>
            <Divider sx={{
                color: '#000', marginTop: { mobile: '20px', tablet: '28px', desktop: '44px' }, width: '100%', position: 'relative', overflow: 'visible',
                "&::before": {
                    content: '"or"',
                    position: 'absolute',
                    backgroundColor: '#fff',
                    color: '#888',
                    padding: '0 0.4rem',
                    transform: 'translate(-50%, -60%)',
                    fontSize: '20px',
                    textAlign: 'center',
                    zIndex: 10000,
                    left: '50%',
                    top: '0',
                }
            }} variant="middle" className="divider" />
            <Stack sx={{ mt: { mobile: '20px', tablet: '28px', desktop: '44px' } }}>
                <Button
                    disableTouchRipple
                    variant="text"
                    type="button"
                    sx={{
                        width: { mobile: '100%', tablet: '347px', desktop: '380px' },
                        height: { mobile: '56px', tablet: '86px', desktop: '86px' },
                        borderRadius: '20px',
                        bgcolor: '#fff',
                        border: '1px solid #BDBDBD',
                        fontWeight: 700,
                        fontSize: { mobile: '16px', tablet: '22px', desktop: '24px' },
                        color: 'accent.main',
                    }}
                    onClick={handleGoogleSignIn}
                >
                    <Image
                        height="24"
                        width="24"
                        style={{ marginRight: '10px' }}
                        id="provider-logo" src="https://authjs.dev/img/providers/google.svg" alt="Google logo" />
                    Sign in with Google
                </Button>
            </Stack>
        </FormProvider>
    );
}
