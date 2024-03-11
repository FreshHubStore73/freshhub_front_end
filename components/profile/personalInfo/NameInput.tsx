import { useEffect } from 'react';
import { TextField } from '@mui/material';
import useValidation from '@/hooks/useValidation';

type Props = {
    val: string;
    label: string;
    disabled: boolean;
    name: string;
    setIsFieldValid: (isValid: boolean) => void;
};

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
        setIsFieldValid(Boolean(error));
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
            sx={{
                gridArea: val.replace(/\W+/, '').slice(0, 5),
                '& .MuiInputBase-root': {
                    borderRadius: '40px',
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
                    padding: '31px 42px 14px',
                    fontSize: '24px',
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
                    fontSize: '24px',
                    color: 'text.primary',
                    lineHeight: '29px',
                    transform: 'translate(42px, 24px) scale(1)',
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                    WebkitTextFillColor: 'initial',
                    color: '#828282',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    transform: 'translate(42px, 10px) scale(0.66)',
                    color: 'text.primary',
                },
                '& .MuiInputLabel-root.Mui-error.MuiFormLabel-filled': {
                    color: 'accent.main',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                    transform: 'translate(42px, 10px) scale(0.66)',
                    color: '#828282',
                },
                '& .MuiInputLabel-root.Mui-disabled.MuiFormLabel-filled': {
                    color: '#BDBDBD',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled.Mui-focused': {
                    color: 'text.primary',
                },
            }}
        ></TextField>
    );
}
