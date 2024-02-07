'use client';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react';
import { Stack } from '@mui/material';

type Props = { data: string };
const User = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M41.6667 37.4993C41.6667 35.2892 40.7887 33.1696 39.2259 31.6068C37.6631 30.044 35.5435 29.166 33.3334 29.166H16.6667C14.4566 29.166 12.3369 30.044 10.7741 31.6068C9.21133 33.1696 8.33335 35.2892 8.33335 37.4993C8.33335 38.6044 8.77234 39.6642 9.55374 40.4456C10.3351 41.227 11.395 41.666 12.5 41.666H37.5C38.6051 41.666 39.6649 41.227 40.4463 40.4456C41.2277 39.6642 41.6667 38.6044 41.6667 37.4993Z"
            stroke="#040705"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M25 20.833C21.5482 20.833 18.75 18.0348 18.75 14.583C18.75 11.1312 21.5482 8.33301 25 8.33301C28.4518 8.33301 31.25 11.1312 31.25 14.583C31.25 18.0348 28.4518 20.833 25 20.833Z"
            stroke="#040705"
            strokeWidth="1.5"
        />
    </svg>
);

export default function ContactNameField({ data }: Props) {
    const [isEdit, setEdit] = useState(false);
    const btnText = isEdit ? 'Save' : 'Change';

    const toggleEdit = () => {
        if (isEdit) {
        }
        setEdit((prevState) => !prevState);
    };

    return (
        <TextField
            name="userName"
            disabled={!isEdit}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <User />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <Button
                            disableRipple
                            variant="text"
                            onClick={toggleEdit}
                            sx={{
                                '&.MuiButtonBase-root.MuiButton-root': {
                                    color: '#FFC182',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        color: '#F15C30',
                                    },
                                },
                            }}
                        >
                            {btnText}
                        </Button>
                    </InputAdornment>
                ),
            }}
            sx={{
                marginBottom: '22px',
                '& .MuiInputAdornment-root': {
                    marginRight: '18px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'text.secondary',
                },
                '& .MuiInputBase-root.MuiOutlinedInput-root': {
                    borderRadius: '50px',
                    paddingBlock: '19px',
                    '&.Mui-focused > fieldset': {
                        borderColor: 'text.secondary',
                        borderWidth: '1px',
                    },
                    '&.Mui-disabled > fieldset': {
                        borderColor: 'text.secondary',
                        borderWidth: '1px',
                    },
                    pl: '28px',
                },
                fontSize: '24px',
                flexGrow: 1,
            }}
            defaultValue={data}
        />
    );
}