'use client';
import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

import { Box, Typography } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';

import SubmitButton from '../../submitButton/SubmitButton';
import { register } from '@/components/authItems/auth';
import FirstNameInput from './FirstNameInput';
import LastNameInput from './LastNameInput';
import PasswordInput from './PasswordInput';
import PhoneInput from './PhoneInput';

type Props = {};

export default function SignUpForm({}: Props) {
    const [state, formAction] = useFormState(register, { message: '' });

    const methods = useForm<IUserSignUp>({
        defaultValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: '',
        },
        mode: 'onSubmit',
    });

    const {
        formState: { isValid },
        trigger,
    } = methods;

    const { replace } = useRouter();

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.message === 'Ok') replace('/login');
        // if (typeof state.message === 'object' && state.message.phoneNumber)
        //     methods.setError('phoneNumber', { type: 'custom', message: state.message.phoneNumber });
    }, [state.message, methods, replace]);
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
                    gridTemplate: 'repeat(4, auto) / 1fr 1fr',
                }}
            >
                <FirstNameInput />
                <LastNameInput />
                <PhoneInput />
                <PasswordInput />

                <Box
                    sx={{
                        mt: '12px',
                        gridArea: '4 / 1 / 5 / 3',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {/* временная лабуда для отслеживания ошибок сервера */}
                    {state.message !== 'Ok' ? (
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.error.main,
                                mb: '24px',
                                fontSize: '20px',
                            }}
                        >
                            {state.message}
                        </Typography>
                    ) : null}

                    <SubmitButton
                        text="Sign up"
                        onClick={(e) => {
                            e.preventDefault();
                            trigger(['firstName', 'lastName', 'phoneNumber', 'password']);
                            if (isValid) formRef.current?.requestSubmit();
                        }}
                    />
                </Box>
            </Box>
        </FormProvider>
    );
}
