import { Dispatch, SetStateAction } from 'react';

import { TextField, Box, Typography } from '@mui/material';

export default function Address() {
    const textFieldSettings = {
        fontSize: { mobile: '14px', tablet: '20px', desktop: '24px' },
        '& .MuiInputBase-input': {
            padding: 0,
            color: 'text.primary',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'text.primary',
            border: '1px solid',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
            borderColor: 'text.secondary',
        },
        '& .MuiOutlinedInput-root': {
            height: { mobile: '44px', tablet: '74px', desktop: '106px' },
            borderRadius: { mobile: '26px', tablet: '50px' },
            paddingInline: { mobile: '16px', tablet: '28px', desktop: '36px' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'text.secondary',
                borderWidth: '2px',
            },
        },
    };
    return (
        <>
            <Typography
                component="h2"
                fontSize="28px"
                sx={{
                    color: 'text.secondary',
                    fontWeight: 700,
                    fontSize: { mobile: '16px', tablet: '22px', desktop: '28px' },
                    mb: { mobile: '16px', tablet: '22px', desktop: '36px' },
                }}
            >
                Delivery address
            </Typography>
            <TextField
                name="streetHouse"
                placeholder="Enter street and house number"
                required
                fullWidth
                autoComplete="off"
                sx={{
                    marginBottom: { mobile: '10px', tablet: '14px', desktop: '22px' },
                    ...textFieldSettings,
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    gap: { mobile: '10px', tablet: '20px' },
                }}
            >
                <TextField
                    placeholder="Flat"
                    name="flat"
                    required
                    autoComplete="off"
                    sx={{
                        flexGrow: 1,
                        ...textFieldSettings,
                    }}
                />
                <TextField
                    placeholder="Floor"
                    name="floor"
                    required
                    autoComplete="off"
                    sx={{
                        flexGrow: 1,
                        ...textFieldSettings,
                    }}
                />
            </Box>
        </>
    );
}
