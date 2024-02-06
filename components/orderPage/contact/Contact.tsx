'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactField from './ContactField';
import { useUserProfile } from '@/store';
import ContactPhoneField from './ContactPhoneField';
type Props = {};

export default function Contact({}: Props) {
    const { userLastName, userName, phone } = useUserProfile((state) => state.profile);
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Typography
                sx={{
                    color: 'text.secondary',
                    fontWeight: 700,
                    fontSize: '28px',
                    mb: '36px',
                }}
            >
                Your contact detail
            </Typography>
            <ContactField data={userName.concat(' ', userLastName)} />
            <ContactPhoneField data={phone} />
        </Box>
    );
}
