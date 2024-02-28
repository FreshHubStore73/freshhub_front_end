import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { BaseFormInput } from '../baseFormInput/BaseFormInput';

type Props = {};

export default function LastNameInput({}: Props) {
    const {
        control,
        trigger,
        formState: { errors },
    } = useFormContext();
    return (
        <Controller
            name="lastName"
            control={control}
            rules={{
                required: 'This field is required',
            }}
            render={({ field: { onChange, ...rest } }) => (
                <BaseFormInput
                    type="text"
                    onChange={(e) => {
                        onChange(e.target.value);
                        trigger('lastName');
                    }}
                    placeholder="Your last name"
                    error={!!errors.lastName?.type}
                    helperText={errors.lastName?.type ? `${errors.lastName?.message}` : ''}
                    {...rest}
                    sx={{
                        gridArea: '1 / 2 / 2 / 3',
                    }}
                />
            )}
        />
    );
}
