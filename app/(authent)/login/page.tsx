'use client';
import { Box, Button, Typography } from '@mui/material';
import SignInForm from '@/components/authItems/forms/signInForm/SignInForm';
import Link from 'next/link';

import styles from './page.module.scss';
import { Suspense } from 'react';

type Props = { params: {} };

const LoginPage = (params: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '742px',
                margin: '90px auto 0',
            }}
        >
            <Typography variant="h2_Oswald" component={'h1'} color="text.secondary">
                Log In
            </Typography>
            <Suspense>
                <SignInForm />
            </Suspense>
            <Box
                sx={{
                    mt: '44px',
                    fontSize: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <p>Not Registered? {'   '}</p>
                <Button
                    disableTouchRipple
                    variant="text"
                    href="/signup"
                    sx={{
                        padding: '0px',
                        fontWeight: 700,
                        fontSize: '24px',
                        '&.MuiButton-root:hover': {
                            backgroundColor: '#fff',
                        },
                    }}
                >
                    Create an account
                </Button>
            </Box>
        </Box>
    );
};

export default LoginPage;
