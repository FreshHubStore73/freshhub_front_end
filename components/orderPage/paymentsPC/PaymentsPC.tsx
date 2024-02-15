import React from 'react';
import Persons from './Persons';
import Payments from './Payments';
import Call from './Call';
import { Box } from '@mui/material';

type Props = {};

export default function PaymentsPC({}: Props) {
    return (
        <Box
            sx={{
                mt: '40px',
            }}
        >
            <Persons />
            <Call />
            <Payments />
        </Box>
    );
}
