import { Box, Button, Typography } from '@mui/material';
import SignUpForm from '@/components/authItems/forms/signUpForm/SignUpForm';
import Link from 'next/link';
type Props = { params: {} };

import styles from './page.module.scss';

const SignUpPage = (params: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                mt: '90px',
            }}
        >
            <Typography variant="h2_Oswald" component={'h1'} color="text.secondary">
                Register
            </Typography>
            <SignUpForm />
            <Box
                sx={{
                    mt: '44px',
                    fontSize: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <p>Already registered? {'   '}</p>
                <Button
                    disableTouchRipple
                    variant="text"
                    href="/login"
                    sx={{
                        padding: '0px',
                        fontWeight: 700,
                        '&.MuiButton-root:hover': {
                            backgroundColor: '#fff',
                        },
                    }}
                >
                    Log in
                </Button>
            </Box>
        </Box>
    );
};

export default SignUpPage;
