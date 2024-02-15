import { TextField, Box, Typography } from '@mui/material';

export default function Address() {
    return (
        <>
            <Typography
                variant="h2"
                fontSize="28px"
                sx={{
                    mt: 20,
                    mb: '36px',
                    color: '#040705',
                    fontWeight: '700',
                    lineHeight: '36px',
                }}
            >
                Delivery address
            </Typography>
            <TextField
                name="address_street"
                placeholder="Enter street and house number"
                sx={{
                    fontSize: '24px',
                    lineHeight: '28px',
                    fontWeight: '400',
                    bgcolor: '#FFFFFF',
                    width: '100%',
                    marginBottom: '22px',

                    '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                        padding: '12px 25px',
                        border: '1px solid #3e3b3b',
                        color: '#3e3b3b',
                        width: '100%',
                        height: '106px',
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
                }}
            >
                <TextField
                    placeholder="Flat"
                    name="address_flat"
                    sx={{
                        width: '100%',
                        fontSize: '24px',
                        fontWeight: '400',
                        lineHeight: '28px',
                        bgcolor: '#FFFFFF',
                        borderRadius: '50px',
                        marginRight: '20px',
                        '& .MuiOutlinedInput-root': {
                            height: '106px',
                            borderRadius: '50px',
                            paddingInline: '25px',
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
                    name="address_floor"
                    sx={{
                        width: '100%',
                        fontSize: '24px',
                        fontWeight: '400',
                        lineHeight: '28px',
                        bgcolor: '#FFFFFF',
                        borderRadius: '50px',
                        '& .MuiOutlinedInput-root': {
                            height: '106px',
                            borderRadius: '50px',
                            paddingInline: '25px',
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
