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
                minLength: {
                    value: 2,
                    message: 'Last name must be at least 2 characters long',
                },
                maxLength: {
                    value: 20,
                    message: 'Last name cannot be more than 20 characters long',
                },
            }}
            render={({ field: { onChange, ...rest } }) => (
                <BaseFormInput
                    type="text"
                    onChange={(e) => {
                        onChange(e.target.value.trimStart().replace(/\s{2,}/g, ' '));
                    }}
                    placeholder="Your last name"
                    error={!!errors.lastName?.type}
                    helperText={errors.lastName?.type ? `${errors.lastName?.message}` : ''}
                    {...rest}
                    sx={{
                        gridArea: { mobile: 'unset', tablet: '1 / 2 / 2 / 3' },
                    }}
                />
            )}
        />
    );
}
