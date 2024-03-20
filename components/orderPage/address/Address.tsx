import { TextField, Box, Typography } from '@mui/material';

export default function Address() {
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
                sx={{
                    fontSize: { mobile: '14px', tablet: '20px', desktop: '24px' },
                    fontWeight: '400',
                    bgcolor: '#FFFFFF',
                    width: '100%',
                    marginBottom: { mobile: '10px', tablet: '14px', desktop: '22px' },
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                        paddingX: { mobile: '16px', tablet: '28px', desktop: '36px' },
                        border: '1px solid #3e3b3b',
                        color: '#3e3b3b',
                        width: '100%',
                        height: { mobile: '44px', tablet: '74px', desktop: '106px' },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
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
                    sx={{
                        width: '100%',
                        fontSize: { mobile: '14px', tablet: '20px', desktop: '24px' },
                        fontWeight: '400',
                        bgcolor: '#FFFFFF',
                        borderRadius: '50px',
                        '& .MuiOutlinedInput-root': {
                            height: { mobile: '44px', tablet: '74px', desktop: '106px' },
                            borderRadius: '50px',
                            paddingX: { mobile: '16px', tablet: '28px', desktop: '36px' },
                            border: '1px solid #3E3B3B',
                            color: '#3E3B3B',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }}
                />
                <TextField
                    placeholder="Floor"
                    name="floor"
                    sx={{
                        width: '100%',
                        fontSize: { mobile: '14px', tablet: '20px', desktop: '24px' },
                        fontWeight: '400',
                        bgcolor: '#FFFFFF',
                        borderRadius: '50px',
                        '& .MuiOutlinedInput-root': {
                            height: { mobile: '44px', tablet: '74px', desktop: '106px' },
                            borderRadius: '50px',
                            paddingX: { mobile: '16px', tablet: '28px', desktop: '36px' },
                            border: '1px solid #3E3B3B',
                            color: '#3E3B3B',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }}
                />
            </Box>
        </>
    );
}
