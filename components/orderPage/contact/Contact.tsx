'use client';
import React from 'react';
import { Box, FormControl, FormLabel, InputLabel, Typography } from '@mui/material';
import ContactField from './ContactField';
import { useUserProfile } from '@/store';
import ContactPhoneField from './ContactPhoneField';
type Props = {};

export default function Contact({}: Props) {
    const { userLastName, userName, phone } = useUserProfile((state) => state.profile);
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
                <ContactField data={userName.concat(' ', userLastName)} />
                <ContactPhoneField data={phone} />
            </FormControl>
        </Box>
    );
}
