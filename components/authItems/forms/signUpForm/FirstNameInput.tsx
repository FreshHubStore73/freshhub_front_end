import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { BaseFormInput } from '../baseFormInput/BaseFormInput';

type Props = {};

export default function FirstNameInput({}: Props) {
    const {
        control,
        trigger,
        formState: { errors },
    } = useFormContext();
    return (
        <Controller
            name="firstName"
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
                    error={!!errors.firstName?.type}
                    helperText={errors.firstName?.type ? `${errors.firstName?.message}` : ''}
                    {...rest}
                    sx={{
                        gridArea: '1 / 1 / 2 / 2',
                    }}
                />
            )}
        />
    );
}
