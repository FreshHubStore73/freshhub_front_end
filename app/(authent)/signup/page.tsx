import Link from 'next/link';

import { Box, Button, Typography } from '@mui/material';

import SignUpForm from '@/components/authItems/forms/signUpForm/SignUpForm';

type Props = { params: {} };

const SignUpPage = (params: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: { mobile: '344px', tablet: '632px', desktop: '884px' },
                margin: {
                    mobile: '0px auto 40px',
                    tablet: '0px auto 50px',
                    desktop: '0px auto 120px',
                },
            }}
        >
            <Typography variant="h2_Oswald" component={'h1'} color="text.secondary">
                Register
            </Typography>
            <SignUpForm />
            <Box
                sx={{
                    mt: { mobile: '20px', tablet: '28px', desktop: '44px' },
                    fontSize: { mobile: '16px', tablet: '22px', desktop: '24px' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: { mobile: '6px', tablet: '10px', desktop: '8px' },
                }}
            >
                <p>Already registered? {'   '}</p>
                <Link href="/login" tabIndex={-1}>
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
                        Log in
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default SignUpPage;
