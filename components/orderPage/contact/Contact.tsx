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
        <Box display={'flex'} flexDirection={'column'}>
            <FormControl>
                <FormLabel
                    sx={{
                        color: 'text.secondary',
                        fontWeight: 700,
                        fontSize: '28px',
                        mb: '36px',
                    }}
                >
                    Your contact details
                </FormLabel>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '22px',
                    }}
                >
                    <ContactField data={user?.firstName.concat(' ', user?.lastName) || ''} />
                    <ContactPhoneField data={user?.phoneNumber || ''} />
                </Box>
            </FormControl>
        </Box>
    );
}
