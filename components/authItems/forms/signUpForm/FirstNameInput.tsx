import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { BaseFormInput } from '../baseFormInput/BaseFormInput';

export default function FirstNameInput() {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <Controller
            name="name"
            control={control}
            rules={{
                required: 'This field is required',
                minLength: {
                    value: 2,
                    message: 'First name must be at least 2 characters long',
                },
                maxLength: {
                    value: 20,
                    message: 'First name cannot be more than 20 characters long',
                },
            }}
            render={({ field: { onChange, ...rest } }) => (
                <BaseFormInput
                    type="text"
                    onChange={(e) => {
                        onChange(e.target.value.trimStart().replace(/\s{2,}/g, ' '));
                    }}
                    placeholder="Your first name"
                    error={!!errors.name?.type}
                    helperText={errors.name?.type ? `${errors.name?.message}` : ''}
                    {...rest}
                    sx={{
                        gridArea: { mobile: 'unset', tablet: '1 / 1 / 2 / 2' },
                    }}
                />
            )}
        />
    );
}
