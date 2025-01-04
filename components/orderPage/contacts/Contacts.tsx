'use client';
import React from 'react';
import { Box, FormControl, FormLabel } from '@mui/material';

import ContactField from './ContactField';
import ContactPhoneField from './ContactPhoneField';

export default function Contacts() {
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
                    <ContactField />
                    <ContactPhoneField />
                </Box>
            </FormControl>
        </Box>
    );
}
