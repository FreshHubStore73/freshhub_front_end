'use client';
import { Box, Typography } from '@mui/material';
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
                gap: '24px',
                alignItems: 'center',
                mt: '111px',
            }}
        >
            <Typography variant="h2" component={'h1'}>
                Log In
            </Typography>
            <Suspense>
                <SignInForm />
            </Suspense>
            <Typography>
                Not Registered? {'   '}
                <Link
                    href="/signup"
                    style={{
                        color: '#F15C30',
                    }}
                >
                    Create an account
                </Link>
            </Typography>
        </Box>
    );
};

export default LoginPage;
