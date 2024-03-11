import React, { ChangeEventHandler, useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { TextField } from '@mui/material';

import useValidation from '@/hooks/useValidation';

type Props = {
    val: string;
    disabled: boolean;
    setIsFieldValid: (isValid: boolean) => void;
};

export default function PhoneNumberInput({ val, disabled, setIsFieldValid }: Props) {
    const { value, error, handleChange } = useValidation(val, {
        required: 'This field is required',
        custom: (value) => value.replace(/[^+0-9]/g, '').length !== 12,
    });

    useEffect(() => {
        setIsFieldValid(Boolean(error));
    }, [error]);

    return (
        <ReactInputMask
            mask="+1 (999) 999 9999"
            maskPlaceholder="x"
            onChange={handleChange}
            disabled={disabled}
            defaultValue={val}
        >
            <TextField
                label="Phone number"
                name="phoneNumber"
                helperText={error}
                autoComplete="off"
                error={Boolean(error)}
                sx={{
                    gridArea: 'phone',
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
        </ReactInputMask>
    );
}
