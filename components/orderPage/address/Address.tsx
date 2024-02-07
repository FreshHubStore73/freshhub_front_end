import { TextField, Box, Typography } from "@mui/material";

export default function Address() {
    return (
        <>
            <Box>
                <Typography variant="h2" fontSize="28px" sx={{ mt: 20, mb: "36px", color: '#040705', fontWeight: "bold", fontFamily: "Lato" }}>
                    Delivery address
                </Typography>
                <TextField
                    placeholder="Enter street and house number"
                    sx={{
                        fontSize: '24px',
                        bgcolor: '#FFFFFF',
                        width: '628px',
                        height: '106px',
                        borderRadius: '50px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '50px',
                            padding: '12px 25px',
                            border: '1px solid #3E3B3B',
                            color: '#3E3B3B',
                            fontFamily: "Lato",

                        },

                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',

                        },
                    }}
                />
            </Box>
            <Box>
                <TextField
                    placeholder="Flat"
                    sx={{
                        fontSize: '24px',
                        bgcolor: '#FFFFFF',
                        width: '303px',
                        height: '106px',
                        borderRadius: '50px',
                        marginRight: '20px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '50px',
                            padding: '12px 25px',
                            border: '1px solid #3E3B3B',
                            color: '#3E3B3B',
                            fontFamily: "Lato",

                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',

                        },
                    }}
                />
                <TextField
                    placeholder="Floor"
                    sx={{
                        fontSize: '24px',
                        bgcolor: '#FFFFFF',
                        width: '303px',
                        height: '106px',
                        borderRadius: '50px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '50px',
                            padding: '12px 25px',
                            border: '1px solid #3E3B3B',
                            color: '#3E3B3B',
                            fontFamily: "Lato",

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