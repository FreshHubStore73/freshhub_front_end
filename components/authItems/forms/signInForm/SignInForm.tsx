'use client';
import React from 'react';
import { Box, Button, FormHelperText, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';

type Props = {};

export default function SignInForm({}: Props) {
    const router = useRouter();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const credentials = Object.fromEntries(formData);
        console.log(JSON.stringify(credentials));
        // const res = await signIn('credentials', { ...credentials, redirect: false });
        // if (res && !res.error) {
        setTimeout(() => router.push('/profile'), 2000);
        // } else {
        //     console.log(res);
        // }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'grid',
                gap: '24px',
            }}
        >
            <TextField type="text" name="phone" placeholder="Phone number" required />
            <TextField type="password" name="password" placeholder="Password" required />
            <FormHelperText>{}</FormHelperText>
            <Button type="submit">Sign In</Button>
        </Box>
    );
}
