'use client';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter, useSearchParams } from 'next/navigation';

import { Box, FormHelperText, TextField } from '@mui/material';

import SubmitButton from '../../submitButton/SubmitButton';
import { ISignInFormState, login } from '@/components/authItems/auth';
import { useAuth } from '@/hooks/useAuth';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { IconButton, InputAdornment, SvgIcon, SvgIconProps } from '@mui/material';
import ReactInputMask from 'react-input-mask';

type Props = {};
const initialState: ISignInFormState = { message: '', user: null };
export default function SignInForm({ }: Props) {
    const [state, formAction] = useFormState(login, initialState);
    const { signIn } = useAuth();
    const { replace } = useRouter();
    const callbackUrl = useSearchParams().get('callbackUrl') || '/';

    const [showPassword, setShowPassword] = React.useState(false);

    const [passwordValue, setPasswordValue] = React.useState('');
    const [phoneValue, setPhoneValue] = React.useState('');

    const [phoneError, setPhoneError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');

    const testPhone = [
        { number: '+1 (555) 555 5555' },
        { number: '+1 (222) 222 2222' },
        { number: '+1 (111) 111 1111' },
    ];
    const testPassword = [
        { password: 'testpassword123' },
        { password: 'testpassword124' },
        { password: 'testpassword125' },
    ];

    const validatePhoneNumber = () => {
        const phoneNumberExists = testPhone.some(item => item.number === phoneValue);
        if (!phoneNumberExists) {
            setPhoneError('');
        } else {
            setPhoneError('');
        }
    };

    const validatePassword = () => {
        const passwordExist = testPassword.some(item => item.password === passwordValue);
        if (!passwordExist) {
            setPasswordError('');
        } else {
            setPasswordError('');
        }
    }

    const handlePhoneChange = (e: any) => {
        setPhoneValue(e.target.value);
        setPhoneError('');
    };

    useEffect(() => {
        validatePhoneNumber();
        validatePassword();
    }, [phoneValue, passwordValue]);
    /* ------------------------------------------------------------------------------------------------*/
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    useEffect(() => {
        if (state?.user) {
            signIn(state.user);
            replace(callbackUrl);
        }
    }, [state, callbackUrl, signIn, replace]);

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
    return (
        <Box
            component="form"
            action={formAction}
            sx={{
                display: 'grid',
                gap: '24px',
            }}
        >

            <ReactInputMask mask="+1 (999) 999 9999" value={phoneValue}
                onChange={handlePhoneChange}>
                <TextField type="text" name="phoneNumber" placeholder="Phone number"
                    sx={{
                        minWidth: '720px',
                        fontSize: '24px',
                        lineHeight: '28px',
                        fontWeight: '400',
                        bgcolor: '#FFFFFF',
                        fontFamily: 'Lato',

                        '& .MuiOutlinedInput-root': {
                            borderRadius: '50px',
                            padding: '12px 25px',
                            border: '1px solid #3e3b3b',
                            color: '#3e3b3b',
                            width: '100%',
                            height: '106px',

                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '&:placeholder': {
                                backgroundColor: '#FFFFFF',
                            },
                            '& .MuiFormHelperText-root.Mui-error': {
                                color: 'yellow',
                            }
                        },
                    }}
                />
            </ReactInputMask>
            {phoneError ? <FormHelperText error>{phoneError}</FormHelperText> : ''}
            <OutlinedInput
                placeholder='Password'
                id="outlined-adornment-password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                sx={{
                    minWidth: '720px',
                    fontSize: '24px',
                    lineHeight: '28px',
                    fontWeight: '400',
                    bgcolor: '#FFFFFF',
                    fontFamily: 'Lato',
                    borderRadius: '50px',
                    height: '106px',
                    border: '1px solid #3e3b3b',
                    padding: '12px 25px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiSvgIcon-root': {

                        width: '38px',
                        height: '38px',
                    },
                    '& .MuiIconButton-root:hover': {
                        backgroundColor: 'transparent',
                    },
                }
                }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton

                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"

                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
            {passwordError ? <FormHelperText error>{passwordError}</FormHelperText> : ''}

            {/*{state?.message !== 'Ok' && <FormHelperText>{state?.message}</FormHelperText>}*/}
            {/*<SubmitButton isFormInvalid={false} text="Sign In" />*/}

            <Button type="submit"
                disabled={!phoneValue || !passwordValue || phoneError || passwordError ? true : undefined}
                sx={{
                    margin: 'auto',
                    borderRadius: '50px',
                    height: '106px',
                    width: '380px',
                    color: phoneValue && passwordValue ? '#fff' : '#000',
                    background: phoneValue && !phoneError && !passwordError ? '#F15C30' : '#BDBDBD',
                    '&:hover': {
                        background: phoneValue && passwordValue && !phoneError && !passwordError ? '#F15C30' : '#BDBDBD',
                    },
                    '&:disabled': {
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#BDBDBD'
                        }
                    }
                }}>Log in </Button>
        </Box >
    );
}
