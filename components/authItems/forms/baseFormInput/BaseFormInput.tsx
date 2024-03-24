import { BorderAll } from '@mui/icons-material';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';

const StyledTextField = styled(TextField)(({ theme }) => ({
    [theme.breakpoints.up('mobile')]: {
        '& .MuiInputBase-input': {
            padding: 0,
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: '28px',
            paddingInline: '24px',
            height: '56px',
            '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.text.secondary,
                    borderWidth: '2px',
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.accent.main,
                },
                '& .MuiInputBase-input': {
                    color: theme.palette.text.secondary,
                },
            },

            '&.Mui-error': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.accent.main,
                },
                '& .MuiInputBase-input ': {
                    color: theme.palette.accent.main,
                },
            },
        },
        '& .MuiInputBase-input ': {
            fontSize: '18px',
            color: theme.palette.text.primary,
        },
        '& .MuiFormHelperText-root': {
            fontSize: '12px',
            margin: '4px 24px 0',
        },
    },
    [theme.breakpoints.up('tablet')]: {
        '& .MuiOutlinedInput-root': {
            borderRadius: '40px',
            paddingInline: '26px',
            height: '86px',
        },
        '& .MuiInputBase-input ': {
            fontSize: '22px',
        },
        '& .MuiFormHelperText-root': {
            fontSize: '16px',
            margin: '8px 20px 0',
        },
    },
    [theme.breakpoints.up('desktop')]: {
        '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
            paddingInline: '38px',
            height: '106px',
        },
        '& .MuiInputBase-input ': {
            fontSize: '24px',
        },
        '& .MuiFormHelperText-root': {
            fontSize: '18px',
            margin: '10px 20px 0',
        },
    },

    '& input::placeholder': {
        color: '#828282',
        opacity: 1,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.text.primary,
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.primary,
        },
    },
}));

// eslint-disable-next-line react/display-name
const BaseFormInput = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    return <StyledTextField autoComplete="off" ref={ref} {...props} />;
});

export { BaseFormInput };
