'use client';
import React, { useState } from 'react';
import { Box, Button, FormHelperText, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';

type Props = {};

export default function SignUpForm({}: Props) {
    const [error, setError] = useState<any>(null);
    const router = useRouter();
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const body = JSON.stringify(Object.fromEntries(formData));
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            });
            // response.status === 201 && setTimeout(() => router.replace('/login'), 1000);
            response.status === 201 && router.replace('/login');
        } catch (error) {
            setError(error);
        }
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
            <TextField type="text" name="firstName" placeholder="Your first name" required />
            <TextField type="text" name="lastName" placeholder="Your last name" required />
            <TextField type="text" name="phone" placeholder="Your phone number" />
            <TextField type="password" name="password" required />

            {error && <FormHelperText>Something went wrong</FormHelperText>}
            <Button type="submit">Sign Un</Button>
        </Box>
    );
}
