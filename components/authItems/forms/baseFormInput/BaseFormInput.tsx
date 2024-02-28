import { BorderAll } from '@mui/icons-material';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '50px',
        paddingInline: '38px',
        height: '106px',

        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
            borderWidth: '1,5px',
        },
        '&.Mui-focused .MuiOutlinedInput-input': {
            color: theme.palette.text.secondary,
        },
    },
    '& .MuiInputBase-input.MuiOutlinedInput-input ': {
        fontSize: '24px',
        color: theme.palette.text.primary,
    },
    '& input::placeholder': {
        color: '#828282',
        opacity: 1,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.text.primary,
    },
    '& .MuiFormHelperText-root': {
        fontSize: '18px',
        margin: '10px 20px 0',
    },
}));

// eslint-disable-next-line react/display-name
const BaseFormInput = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    return <StyledTextField ref={ref} {...props} />;
});

export { BaseFormInput };
