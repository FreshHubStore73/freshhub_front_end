import { Box, Typography } from '@mui/material';
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
                gap: '24px',
                alignItems: 'center',
                mt: '111px',
            }}
        >
            <Typography variant="h2" component={'h1'}>
                Register
            </Typography>
            <SignUpForm />
            <Typography>
                Already registered? {'   '}
                <Link
                    href="/login"
                    style={{
                        color: '#F15C30',
                    }}
                >
                    Log in
                </Link>
            </Typography>
        </Box>
    );
};

export default SignUpPage;
