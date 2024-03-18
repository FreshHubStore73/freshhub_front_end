'use client';
import React from 'react';
import { Box, FormControl, FormLabel, InputLabel, Typography } from '@mui/material';
import ContactField from './ContactField';
import ContactPhoneField from './ContactPhoneField';
import { useAuth } from '@/hooks/useAuth';
type Props = {};

export default function Contact({}: Props) {
    const { user } = useAuth();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                mb: { mobile: '20px', tablet: '30px', desktop: '36px' },
            }}
        >
            <FormControl>
                <FormLabel
                    sx={{
                        color: 'text.secondary',
                        fontWeight: 700,
                        fontSize: { mobile: '16px', tablet: '22px', desktop: '28px' },
                        mb: { mobile: '16px', tablet: '22px', desktop: '36px' },
                    }}
                >
                    Your contact details
                </FormLabel>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { mobile: '10px', tablet: '14px', desktop: '22px' },
                    }}
                >
                    <ContactField data={user?.firstName.concat(' ', user?.lastName) || ''} />
                    <ContactPhoneField data={user?.phoneNumber || ''} />
                </Box>
            </FormControl>
        </Box>
    );
}
