import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { BaseFormInput } from '../baseFormInput/BaseFormInput';
import { IconButton, InputAdornment, SvgIcon, SvgIconProps } from '@mui/material';

type Props = { variant?: 'signin' | 'signup' };

const Visibility = (props: SvgIconProps) => (
    <SvgIcon fontSize="large" {...props}>
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
    <SvgIcon fontSize="large" {...props}>
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

export default function PasswordInput({ variant = 'signup' as 'signup' }: Props) {
    const {
        control,
        trigger,
        formState: { errors },
    } = useFormContext();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Controller
            name="password"
            control={control}
            rules={{
                required: 'This field is required',
                minLength:
                    variant === 'signin'
                        ? undefined
                        : {
                              value: 8,
                              message: 'Password must contain at least 8 characters',
                          },
                maxLength:
                    variant === 'signin'
                        ? undefined
                        : {
                              value: 15,
                              message: "Password shouldn't contain more than 15 characters",
                          },
            }}
            render={({ field: { onChange, ...rest } }) => (
                <BaseFormInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={(e) => {
                        onChange(e.target.value.replace(/\W+/g, ''));
                    }}
                    {...rest}
                    error={!!errors.password?.type}
                    helperText={
                        errors.password?.type
                            ? `${errors.password?.message}`
                            : variant === 'signin'
                            ? ''
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
                                        width: '42px',
                                        height: '42px',
                                    }}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        gridArea: variant === 'signin' ? 'auto' : '3 / 1 / 4 / 3',
                    }}
                />
            )}
        />
    );
}
