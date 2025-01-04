'use client';
import { MouseEventHandler, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

import { Box, Typography } from '@mui/material';

import { updateUserInfo } from '@/actions/auth';
import NameInput from './NameInput';
import PhoneNumberInput from './PhoneNumberInput';
import SaveChanges from './SaveChanges';
import { useSession } from 'next-auth/react';

type Props = { name: string; lastName: string; phoneNumber: string };

const fieldLabels = ['Your first name', 'Your last name'];

export default function PersonalInfo({ name, lastName, phoneNumber }: Props) {
    const [state, formAction] = useFormState(updateUserInfo, { message: '', data: null });
    const [isChangeActive, setIsChangeActive] = useState(false);
    const { update } = useSession();

    const [isValidFields, setIsValidFields] = useState({
        name: false,
        lastName: false,
        phoneNumber: false,
    });

    const onSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!isChangeActive) {
            e.preventDefault();
            setIsChangeActive((prevState) => !prevState);
        }
    };

    useEffect(() => {
        if (state.message === 'Ok' && state.data) {
            update({
                name: state.data.name,
                lastName: state.data.lastName,
                phoneNumber: state.data.phoneNumber,
            });
            setIsChangeActive(false);
        }
    }, [state.message]);

    const isSubmitDisabled = Object.values(isValidFields).some((valid) => valid === false);

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
                '${`${fieldLabels[0].replace(/\W+/g, '')} ${fieldLabels[1].replace(/\W+/g, '')}`}'
                'phone phone'
                'btn btn'`,
                },
                gridTemplateRows: { mobile: 'unset', tablet: 'repeat(3, auto)' },
                gridTemplateColumns: { mobile: 'unset', tablet: '1fr 1fr' },
                gridGap: { mobile: '14px', tablet: '20px', desktop: '24px 20px' },
            }}
        >
            <NameInput
                val={name}
                name="name"
                label={fieldLabels[0]}
                disabled={!isChangeActive}
                setIsFieldValid={(isValid: boolean) =>
                    setIsValidFields((prevState) => ({ ...prevState, name: isValid }))
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
                    handleSave={onSubmit}
                    isChangeActive={isChangeActive}
                    disabled={isSubmitDisabled && isChangeActive}
                />
            </Box>
        </Box>
    );
}
