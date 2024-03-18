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
    const [state, formAction] = useFormState(updateUserInfo, { errorMessage: '' });
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
        if (state.errorMessage === 'Ok') setIsChangeActive((prevState) => !prevState);
    }, [state.errorMessage]);

    const isSubmitDisabled = Object.values(isValidFields).some((valid) => valid);

    return (
        <Box
            component={'form'}
            action={formAction}
            sx={{
                borderRadius: '50px',
                padding: '43px 46px 45px',
                border: '1px solid ',
                borderColor: isChangeActive ? 'accent.main' : 'beige.main',
                color: '#3E3B3B',
                display: 'grid',
                gridTemplateAreas: `
                '${`${firstName.replace(/\W+/, '').slice(0, 5)} ${lastName
                    .replace(/\W+/, '')
                    .slice(0, 5)}`}'
                'phone phone'
                'btn btn'`,
                gridTemplateRows: 'repeat(3, auto)',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '24px 20px',
            }}
        >
            <NameInput
                val={firstName}
                name="firstName"
                label="Your first name"
                disabled={!isChangeActive}
                setIsFieldValid={(isValid: boolean) =>
                    setIsValidFields((prevState) => ({ ...prevState, firstName: isValid }))
                }
            />
            <NameInput
                val={lastName}
                name="lastName"
                label="Your last name"
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
                    gap: '24px',
                }}
            >
                {/* временная лабуда для отслеживания ошибок сервера */}
                {state.errorMessage !== 'Ok' ? (
                    <Typography
                        sx={{
                            color: 'error.main',
                            fontSize: '20px',
                        }}
                    >
                        {state.errorMessage}
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
