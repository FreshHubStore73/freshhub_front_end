import React, { ChangeEventHandler, useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { TextField } from '@mui/material';

import useValidation from '@/hooks/useValidation';
import { nameInputSettings } from './NameInput';

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
                sx={nameInputSettings(disabled, 'phone')}
            ></TextField>
        </ReactInputMask>
    );
}
