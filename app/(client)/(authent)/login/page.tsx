import { Suspense } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Box, Button, Typography } from '@mui/material';

import SignInForm from '@/components/authItems/forms/signInForm/SignInForm';

export const metadata: Metadata = {
    title: 'Login | FresHHub',
};

export default function LoginPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: { mobile: '344px', tablet: '410px', desktop: '742px' },
                margin: {
                    mobile: '0px auto 40px',
                    tablet: '0px auto 50px',
                    desktop: '0px auto 120px',
                },
            }}
        >
            <Typography variant="h2_Oswald" component={'h1'} color="text.secondary">
                Log in
            </Typography>
            <Suspense>
                <SignInForm />
            </Suspense>
            <Box
                sx={{
                    mt: { mobile: '20px', tablet: '28px', desktop: '44px' },

                    fontSize: { mobile: '16px', tablet: '22px', desktop: '24px' },

                    display: 'flex',
                    alignItems: 'center',
                    gap: { mobile: '6px', tablet: '10px', desktop: '9px' },
                }}
            >
                <p>Not Registered? {'   '}</p>
                <Link href="/signup" tabIndex={-1}>
                    <Button
                        disableTouchRipple
                        variant="text"
                        sx={{
                            padding: '0px',
                            fontWeight: 700,
                            fontSize: { mobile: '16px', tablet: '22px', desktop: '24px' },
                            color: 'accent.main',
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: '#fff',
                            },
                        }}
                    >
                        Create an account
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}
