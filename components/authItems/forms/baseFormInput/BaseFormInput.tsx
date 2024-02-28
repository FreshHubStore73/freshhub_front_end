import { BorderAll } from '@mui/icons-material';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        fontSize: '24px',
        borderRadius: '50px',
        paddingInline: '38px',
        height: '106px',

        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
            borderWidth: '2px',
        },
        '&.Mui-focused .MuiOutlinedInput-input': {
            color: theme.palette.text.secondary,
        },
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
