'use client';
import { MouseEventHandler, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

import { Box, Typography } from '@mui/material';

import { updateUserInfo } from '@/utils/actions';
import NameInput from './NameInput';
import PhoneNumberInput from './PhoneNumberInput';
import SaveChanges from './SaveChanges';

type Props = { firstName: string; lastName: string; phoneNumber: string };

export default function PersonalInfo({ firstName, lastName, phoneNumber }: Props) {
    const [state, formAction] = useFormState(updateUserInfo, { message: '' });
    const [isChangeActive, setIsChangeActive] = useState(false);
    const [isValidFields, setIsValidFields] = useState({
        firstName: true,
        lastName: true,
        phoneNumber: true,
    });

    const onSave: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!isChangeActive) {
            e.preventDefault();
            setIsChangeActive((prevState) => !prevState);
        }
        if (isChangeActive) e.currentTarget.form?.requestSubmit();
    };

    useEffect(() => {
        if (state.message === 'Ok') setIsChangeActive((prevState) => !prevState);
    }, [state.message]);

    const isSubmitDisabled = Object.values(isValidFields).some((valid) => valid);
    const fieldLabels = ['Your first name', 'Your last name'];
    return (
        <Box
            component={'form'}
            action={formAction}
            sx={{
                borderRadius: { mobile: '36px', tablet: '50px', desktop: '50px' },
                padding: { mobile: '19px', tablet: '34px 41px', desktop: '43px 46px 45px' },
                border: '1px solid',
                borderColor: isChangeActive ? 'accent.main' : 'beige.main',
                color: '#3E3B3B',
                display: { mobile: 'flex', tablet: 'grid' },
                flexDirection: { mobile: 'column', tablet: 'one' },
                // gap: { mobile: '14px', tablet: 'unset' },
                gridTemplateAreas: {
                    mobile: 'unset',
                    tablet: `
                '${`${firstName.replace(/\W+/, '').slice(0, 5)} ${lastName
                    .replace(/\W+/, '')
                    .slice(0, 5)}`}'
                'phone phone'
                'btn btn'`,
                },
                gridTemplateRows: { mobile: 'unset', tablet: 'repeat(3, auto)' },
                gridTemplateColumns: { mobile: 'unset', tablet: '1fr 1fr' },
                gridGap: { mobile: '14px', tablet: '20px', desktop: '24px 20px' },
            }}
        >
            <NameInput
                val={firstName}
                name="firstName"
                label={fieldLabels[0]}
                disabled={!isChangeActive}
                setIsFieldValid={(isValid: boolean) =>
                    setIsValidFields((prevState) => ({ ...prevState, firstName: isValid }))
                }
            />
            <NameInput
                val={lastName}
                name="lastName"
                label={fieldLabels[1]}
                disabled={!isChangeActive}
                setIsFieldValid={(isValid: boolean) =>
                    setIsValidFields((prevState) => ({ ...prevState, lastName: isValid }))
                }
            />
            <PhoneNumberInput
                val={phoneNumber}
                disabled={!isChangeActive}
                setIsFieldValid={(isValid: boolean) =>
                    setIsValidFields((prevState) => ({ ...prevState, phoneNumber: isValid }))
                }
            />
            <Box
                sx={{
                    gridArea: 'btn',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: state.message === 'Ok' ? { mobile: '20px', desktop: '24px' } : '0',
                }}
            >
                {/* временная лабуда для отслеживания ошибок сервера */}
                {state.message !== 'Ok' ? (
                    <Typography
                        sx={{
                            color: 'error.main',
                            fontSize: { mobile: '16px', tablet: '18px', desktop: '20px' },
                            mb: { mobile: '16px', tablet: '18px', desktop: '20px' },
                        }}
                    >
                        {state.message}
                    </Typography>
                ) : null}
                <SaveChanges
                    handleSave={onSave}
                    isChangeActive={isChangeActive}
                    disabled={isSubmitDisabled}
                />
            </Box>
        </Box>
    );
}
