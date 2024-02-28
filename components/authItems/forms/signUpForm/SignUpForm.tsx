'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

import {
    Box,
    FormHelperText,
    IconButton,
    InputAdornment,
    Stack,
    SvgIcon,
    SvgIconProps,
    TextField,
    Typography,
} from '@mui/material';

import SubmitButton from '../../submitButton/SubmitButton';
import { IUserRegister, register } from '@/components/authItems/auth';
import ReactInputMask from 'react-input-mask';
import { BaseFormInput } from '../baseFormInput/BaseFormInput';
import { Controller, useForm } from 'react-hook-form';

type Props = {};

const Visibility = (props: SvgIconProps) => (
    <SvgIcon
        fontSize="large"
        {...props}
        sx={{
            '&.MuiSvgIcon-root:hover path': {
                stroke: '#F15C30',
            },
        }}
    >
        <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M34.4375 19C34.4375 22.5625 27.5262 29.6875 19 29.6875C10.4738 29.6875 3.5625 22.5625 3.5625 19C3.5625 15.4375 10.4738 8.3125 19 8.3125C27.5262 8.3125 34.4375 15.4375 34.4375 19Z"
                stroke="#040705"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M24.9375 19C24.9375 20.5747 24.3119 22.0849 23.1984 23.1984C22.0849 24.3119 20.5747 24.9375 19 24.9375C17.4253 24.9375 15.9151 24.3119 14.8016 23.1984C13.6881 22.0849 13.0625 20.5747 13.0625 19C13.0625 17.4253 13.6881 15.9151 14.8016 14.8016C15.9151 13.6881 17.4253 13.0625 19 13.0625C20.5747 13.0625 22.0849 13.6881 23.1984 14.8016C24.3119 15.9151 24.9375 17.4253 24.9375 19Z"
                stroke="#040705"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    </SvgIcon>
);

const VisibilityOff = (props: SvgIconProps) => (
    <SvgIcon
        fontSize="large"
        {...props}
        sx={{
            '&.MuiSvgIcon-root:hover path': {
                stroke: '#F15C30',
            },
        }}
    >
        <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M34.4375 19C34.4375 22.5625 27.5262 29.6875 19 29.6875C10.4738 29.6875 3.5625 22.5625 3.5625 19C3.5625 15.4375 10.4738 8.3125 19 8.3125C27.5262 8.3125 34.4375 15.4375 34.4375 19Z"
                stroke="#3E3B3B"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M24.9375 19C24.9375 20.5747 24.3119 22.0849 23.1984 23.1984C22.0849 24.3119 20.5747 24.9375 19 24.9375C17.4253 24.9375 15.9151 24.3119 14.8016 23.1984C13.6881 22.0849 13.0625 20.5747 13.0625 19C13.0625 17.4253 13.6881 15.9151 14.8016 14.8016C15.9151 13.6881 17.4253 13.0625 19 13.0625C20.5747 13.0625 22.0849 13.6881 23.1984 14.8016C24.3119 15.9151 24.9375 17.4253 24.9375 19Z"
                stroke="#3E3B3B"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M3 33.1035L34.2121 5.00003"
                stroke="#3E3B3B"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </SvgIcon>
);

export default function SignUpForm({}: Props) {
    const [state, formAction] = useFormState(register, { message: '' });
    const [showPassword, setShowPassword] = useState(false);
    const {
        control,
        formState: { errors, isValid },
        setError,
        trigger,
    } = useForm<IUserRegister>({
        defaultValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: '',
        },
    });
    const { replace } = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (state.message === 'Ok') replace('/login');
        if (typeof state.message === 'object' && state.message.phoneNumber)
            setError('phoneNumber', { type: 'custom', message: state.message.phoneNumber });
    }, [state.message]);
    return (
        <Box
            component="form"
            action={formAction}
            ref={formRef}
            sx={{
                width: '884px',
                mt: '50px',
                display: 'grid',
                rowGap: '38px',
                columnGap: '20px',
                gridTemplate: 'repeat(4, auto) / 1fr 1fr',
            }}
        >
            <Controller
                name="firstName"
                control={control}
                rules={{
                    required: 'This field is required',
                }}
                render={({ field: { onChange, ...rest } }) => (
                    <BaseFormInput
                        type="text"
                        onChange={(e) => {
                            onChange(e.target.value);
                            trigger('firstName');
                        }}
                        placeholder="Your first name"
                        error={!!errors.firstName?.type}
                        helperText={errors.firstName?.type ? `${errors.firstName?.message}` : ''}
                        {...rest}
                        sx={{
                            gridArea: '1 / 1 / 2 / 2',
                        }}
                    />
                )}
            />

            <Controller
                name="lastName"
                control={control}
                rules={{
                    required: 'This field is required',
                }}
                render={({ field: { onChange, ...rest } }) => (
                    <BaseFormInput
                        type="text"
                        onChange={(e) => {
                            onChange(e.target.value);
                            trigger('lastName');
                        }}
                        placeholder="Your last name"
                        error={!!errors.lastName?.type}
                        helperText={errors.lastName ? `${errors.lastName?.message}` : ''}
                        {...rest}
                        sx={{
                            gridArea: '1 / 2 / 2 / 3',
                        }}
                    />
                )}
            />

            <Controller
                name="phoneNumber"
                control={control}
                rules={{
                    required: { value: true, message: 'This field is required' },
                    validate: (value) =>
                        value.replace(/[^+0-9]/g, '').length === 12 ||
                        'The number must contain 11 digits',
                }}
                render={({ field: { ref, onChange, ...rest } }) => (
                    <ReactInputMask
                        mask="+1 (999) 999 9999"
                        maskPlaceholder="x"
                        onChange={(e) => {
                            onChange(e.target.value);
                            trigger('phoneNumber');
                        }}
                        {...rest}
                    >
                        <BaseFormInput
                            type="text"
                            ref={ref}
                            placeholder="Your phone number"
                            error={!!errors.phoneNumber?.type}
                            helperText={
                                errors.phoneNumber?.type ? `${errors.phoneNumber?.message}` : ''
                            }
                            sx={{
                                gridArea: '2 / 1 / 3 / 3',
                            }}
                        />
                    </ReactInputMask>
                )}
            />

            <Controller
                name="password"
                control={control}
                rules={{
                    required: 'This field is required',
                    minLength: {
                        value: 8,
                        message: 'Password must contain at least 8 characters',
                    },
                }}
                render={({ field: { onChange, ...rest } }) => (
                    <BaseFormInput
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        onChange={(e) => {
                            onChange(e.target.value);
                            trigger('password');
                        }}
                        {...rest}
                        error={!!errors.password?.type}
                        helperText={
                            errors.password?.type
                                ? `${errors.password?.message}`
                                : 'Must have minimum of 8 characters'
                        }
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        disableTouchRipple
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        sx={{
                                            '& .MuiInputAdornment-root': {
                                                // marginLeft: 0,
                                                // p: 0,
                                            },
                                            '&:hover': {
                                                backgroundColor: '#fff',
                                                color: '#F15C30',
                                            },
                                            width: '42px',
                                            height: '42px',
                                        }}
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility fontSize="large" />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            gridArea: '3 / 1 / 4 / 3',
                        }}
                    />
                )}
            />

            <Box
                sx={{
                    mt: '12px',
                    gridArea: '4 / 1 / 5 / 3',
                    justifySelf: 'center',
                }}
            >
                {typeof state.message === 'string' && state.message !== 'Ok' ? (
                    <Typography>{state.message}</Typography>
                ) : null}

                <SubmitButton
                    text="Sign up"
                    isFormInvalid={!isValid}
                    onClick={(e) => {
                        e.preventDefault();
                        trigger(['firstName', 'lastName', 'phoneNumber', 'password']);
                        if (isValid) formRef.current?.requestSubmit();
                    }}
                />
            </Box>
        </Box>
    );
}
