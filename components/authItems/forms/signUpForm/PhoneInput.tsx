import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { BaseFormInput } from '../baseFormInput/BaseFormInput';
import ReactInputMask from 'react-input-mask';

type Props = { variant?: 'signin' | 'signup' };

export default function PhoneInput({ variant = 'signup' as 'signup' }: Props) {
    const {
        control,
        trigger,
        formState: { errors },
    } = useFormContext();
    return (
        <Controller
            name="phoneNumber"
            control={control}
            rules={{
                required: { value: true, message: 'This field is required' },
                validate: (value) =>
                    value.replace(/[^+0-9]/g, '').length === 12 ||
                    'The number must contain 11 digits',
            }}
            render={({ field: { ref, onChange, ...rest } }) => (
                <ReactInputMask
                    mask="+1 (999) 999 9999"
                    maskPlaceholder="x"
                    onChange={(e) => {
                        onChange(e.target.value);
                        trigger('phoneNumber');
                    }}
                    {...rest}
                >
                    <BaseFormInput
                        type="text"
                        ref={ref}
                        placeholder="Your phone number"
                        error={!!errors.phoneNumber?.type}
                        helperText={
                            errors.phoneNumber?.type ? `${errors.phoneNumber?.message}` : ''
                        }
                        sx={{
                            gridArea: variant === 'signin' ? 'auto' : '2 / 1 / 3 / 3',
                        }}
                    />
                </ReactInputMask>
            )}
        />
    );
}
