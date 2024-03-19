import { useEffect } from 'react';
import { TextField } from '@mui/material';
import useValidation from '@/hooks/useValidation';

type Props = {
    val: string;
    label: string;
    disabled: boolean;
    name: string;
    setIsFieldValid?: (isValid: boolean) => void;
};
export const nameInputSettings = (disabled: boolean, val: string) => ({
    gridArea: val.replace(/\W+/, ''),
    '& .MuiInputBase-root': {
        borderRadius: { mobile: '26px', tablet: '40px' },
    },

    //disable legend on border
    '& .MuiOutlinedInput-notchedOutline legend > span': {
        display: 'none',
    },

    //border settings
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#828282',
    },
    '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: '#BDBDBD',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: disabled ? '' : 'text.secondary',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'text.secondary',
        borderWidth: '1px',
    },

    //input text settings
    '& .MuiInputBase-input': {
        padding: {
            mobile: '20px 20px 6px',
            tablet: '27px 28px 11px',
            desktop: '31px 42px 14px',
        },
        fontSize: { mobile: '18px', tablet: '22px', desktop: '24px' },
        color: 'text.primary',
        height: 'unset',
    },
    '& .Mui-focused .MuiInputBase-input': {
        color: 'text.secondary',
    },
    '& .Mui-disabled .MuiInputBase-input': {
        WebkitTextFillColor: 'initial',
        color: '#828282',
    },

    //label settings
    '& .MuiInputLabel-root': {
        fontSize: { mobile: '10px', tablet: '12px', desktop: '16px' },
        color: 'text.primary',
        lineHeight: { mobile: '12px', tablet: '14.4px', desktop: '19.2px' },
        transform: {
            mobile: 'translate(22px, 12px) scale(1.8)',
            tablet: 'translate(28px, 18px) scale(1.83)',
            desktop: 'translate(42px, 24px) scale(1.5)',
        },
    },
    '& .MuiInputLabel-root.Mui-disabled': {
        WebkitTextFillColor: 'initial',
        color: '#828282',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        transform: {
            mobile: 'translate(22px, 6px) scale(1)',
            tablet: 'translate(28px, 14px) scale(1)',
            desktop: 'translate(42px, 10px) scale(1)',
        },
        color: 'text.primary',
    },
    '& .MuiInputLabel-root.Mui-error.MuiFormLabel-filled': {
        color: 'accent.main',
    },
    '& .MuiInputLabel-root.MuiFormLabel-filled': {
        transform: {
            mobile: 'translate(22px, 6px) scale(1)',
            tablet: 'translate(28px, 14px) scale(1)',
            desktop: 'translate(42px, 10px) scale(1)',
        },
        color: '#828282',
    },
    '& .MuiInputLabel-root.Mui-disabled.MuiFormLabel-filled': {
        color: '#BDBDBD',
    },
    '& .MuiInputLabel-root.MuiFormLabel-filled.Mui-focused': {
        color: 'text.primary',
    },
});
export default function NameInput({ val, label, disabled, setIsFieldValid, name }: Props) {
    const { value, error, handleChange } = useValidation(val, {
        required: 'This field is required',
        minLength: {
            value: 2,
            message: 'This field must be at least 2 characters long',
        },
        maxLength: {
            value: 20,
            message: 'This field cannot be more than 20 characters long',
        },
    });

    useEffect(() => {
        setIsFieldValid && setIsFieldValid(Boolean(error));
    }, [error]);

    return (
        <TextField
            label={label}
            value={value}
            name={name}
            disabled={disabled}
            error={Boolean(error)}
            onChange={handleChange}
            helperText={error}
            autoComplete="off"
            sx={nameInputSettings(disabled, label)}
        ></TextField>
    );
}
