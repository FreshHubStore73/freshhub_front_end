import React, { useEffect } from 'react';
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
        isEqualLength: {
            value: 12,
            get message() {
                return `The phone must contain ${this.value} digits`;
            },
            doValidate: (str: string, length: number) => str.replace(/[^+0-9]/g, '').length !== length
        },
    });

    useEffect(() => {
        setIsFieldValid(!Boolean(error));
    }, [error]);

    return (
        <ReactInputMask
            mask="+1 999 999 9999"
            maskPlaceholder="x"
            onChange={handleChange}
            disabled={disabled}
            value={value}
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
