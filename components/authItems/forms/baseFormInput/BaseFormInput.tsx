import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const BaseFormInput = styled((props: TextFieldProps) => <TextField {...props} required />)(
    ({ theme }) => ({
        '& .MuiOutlinedInput-root': {
            fontSize: '24px',
            borderRadius: '50px',
            paddingInline: '38px',
            height: '106px',

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.text.secondary,
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.primary,
        },
        '& .MuiFormHelperText-root': {
            fontSize: '18px',
            margin: '10px 20px 0',
        },
    }),
);
export { BaseFormInput };
