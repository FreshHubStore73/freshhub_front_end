'use client';
import { Box, Typography } from '@mui/material';
import SignInForm from '@/components/authItems/forms/signInForm/SignInForm';
import Link from 'next/link';

import styles from './page.module.scss';

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
            <Typography variant="h2" component={'h1'}
                sx={{
                    fontFamily: 'Oswald',
                    fontWeight: '700',
                    fontSize: '62px',
                    lineHeight: '100px',
                    color: '#040705'

                }}>
                Log In
            </Typography>
            <SignInForm />
            <Typography
                sx={{
                    fontFamily: 'Loto',
                    fontWeight: '700',
                    fontSize: '24px',
                    color: '#040705',
                }}>
                Not Registered? {'   '}
                <Link
                    href="/signup"
                    style={{
                        fontFamily: 'Loto',
                        fontWeight: '700',
                        fontSize: '24px',
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
