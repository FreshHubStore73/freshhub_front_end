import { TextField, Box, Typography, Theme, TextFieldProps } from '@mui/material';

const textFieldSettings = {
    fontSize: { mobile: '14px', tablet: '20px', desktop: '24px' },
    '& .MuiInputBase-input': {
        padding: 0,
        color: 'text.primary',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: (theme: Theme) => theme.palette.text.secondary,
        border: '1px solid',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderColor: (theme: Theme) => theme.palette.text.secondary,
    },
    '& .MuiOutlinedInput-root': {
        height: { mobile: '44px', tablet: '74px', desktop: '106px' },
        borderRadius: { mobile: '26px', tablet: '50px' },
        paddingInline: { mobile: '16px', tablet: '28px', desktop: '36px' },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: (theme: Theme) => theme.palette.text.secondary,
            borderWidth: '2px',
        },
    },
};

const AddressInput = ({ ...props }: TextFieldProps) => {
    const { sx, ...rest } = props;
    return (
        <TextField
            required
            autoComplete="off"
            sx={{
                ...sx,
                ...textFieldSettings,
            }}
            {...rest}
        />
    )
}
export default function Address() {
    return (
        <>
            <Typography
                component="h2"
                sx={{
                    color: 'text.secondary',
                    fontWeight: 700,
                    fontSize: { mobile: '16px', tablet: '22px', desktop: '28px' },
                    mb: { mobile: '16px', tablet: '22px', desktop: '36px' },
                }}
            >
                Delivery address
            </Typography>
            <AddressInput
                name="streetHouse"
                placeholder="Enter street and house number"
                fullWidth
            />
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    gap: { mobile: '10px', tablet: '20px' },
                    marginTop: { mobile: '10px', tablet: '14px', desktop: '22px' }
                }}
            >
                <AddressInput placeholder="Flat" name="flat" />
                <AddressInput placeholder="Floor" name="floor" />
            </Box>
        </>
    );
}
