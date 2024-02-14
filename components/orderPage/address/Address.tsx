import { TextField, Box, Typography } from "@mui/material";

export default function Address() {
    return (
        <>

            <Typography variant="h2" fontSize="28px" sx={{ mt: 20, mb: "36px", color: '#040705', fontWeight: "700", lineHeight: '36px', fontFamily: "Lato" }}>
                Delivery address
            </Typography>
            <Box>
                <TextField
                    placeholder="Enter street and house number"
                    sx={{
                        fontSize: '24px',
                        lineHeight: '28px',
                        fontWeight: "400",
                        bgcolor: '#FFFFFF',
                        width: '100%',
                        marginBottom: '22px',


                        '& .MuiOutlinedInput-root': {
                            borderRadius: '50px',
                            padding: '12px 25px',
                            border: '1px solid #3e3b3b',
                            color: '#3e3b3b',
                            fontFamily: "Lato",
                            width: '100%',
                            height: '106px',

                        },

                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',

                        },

                    }}
                />
            </Box>
            <Box sx={{
                display: 'flex',
            }}>
                <TextField
                    placeholder="Flat"
                    sx={{
                        fontSize: '24px',
                        fontWeight: "400",
                        lineHeight: '28px',
                        bgcolor: '#FFFFFF',
                        width: '304px',
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
                        fontWeight: "400",
                        lineHeight: '28px',
                        bgcolor: '#FFFFFF',
                        width: '304px',
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
