'use client';
import Button, { ButtonProps } from '@mui/material/Button';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useRef, useState, ChangeEventHandler } from 'react';
import { SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuthStore } from '@/stores/Stores-providers';

type UserIconProps = {
    isEdit: boolean;
}

const UserIcon = ({ isEdit }: UserIconProps) => (
    <SvgIcon
        sx={{
            width: { mobile: '29px', tablet: '40px', desktop: '50px' },
            height: { mobile: '29px', tablet: '40px', desktop: '50px' },
            '& path': {
                stroke: (theme) => (isEdit ? theme.palette.text.primary : '#828282'),
            },
            '.MuiOutlinedInput-root.Mui-focused & path ': {
                stroke: (theme) => (isEdit ? theme.palette.text.secondary : '#828282'),
            },
        }}
    >
        <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
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
    </SvgIcon>
);

export const EditBtn = styled((props: ButtonProps) => (
    <Button variant="text" disableTouchRipple {...props} />
))(({ theme }) => ({
    color: '#50BC7B',
    fontWeight: 400,
    pointerEvents: 'all',
    [theme.breakpoints.up('mobile')]: {
        fontSize: '14px',
        padding: '6px',
        minWidth: '44px',
    },
    [theme.breakpoints.up('tablet')]: {
        fontSize: '20px',
        padding: '6px 10px',
        minWidth: '64px',
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '24px',
        padding: '10px',
        minWidth: '64px',
    },
    transition: 'font 0.3s ease',
    backgroundColor: '#FFF',
    '&:hover': {
        fontWeight: 700,
        backgroundColor: '#fff',
    },
    lineHeight: '1',
    borderRadius: '12px',
    '& .Mui-focusVisible': {
        // boxShadow: `0 0 0 0.1rem ${theme.palette.text.secondary}`,
    },
}));

interface StyledCustomInputProps {
    isdisabled?: boolean;
}

export const CustomInput = styled(
    ({ isdisabled, ...otherProps }: TextFieldProps & StyledCustomInputProps) => (
        <TextField {...otherProps} autoComplete="off" />
    ),
)<StyledCustomInputProps>(({ theme, isdisabled }) => ({
    flexGrow: 1,
    pointerEvents: isdisabled ? 'none' : 'all',
    '& .MuiInputAdornment-root': {
        marginRight: '0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#828282',
        borderWidth: '1px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.text.secondary,
        borderWidth: '2px',
    },

    '& .MuiOutlinedInput-root': {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: isdisabled ? '#828282' : theme.palette.text.secondary,
            borderWidth: isdisabled ? '1px' : '2px',
        },
        '& .MuiInputBase-input': {
            color: isdisabled ? '#828282' : theme.palette.text.primary,
        },
        '&.Mui-focused .MuiInputBase-input': {
            color: isdisabled ? '#828282' : theme.palette.text.secondary,
        },
    },

    [theme.breakpoints.up('mobile')]: {
        fontSize: '14px',
        '& .MuiInputBase-input': {
            padding: '0 0 0 15px',
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: '26px',
            paddingInline: '16px',
            height: '44px',
        },
    },
    [theme.breakpoints.up('tablet')]: {
        fontSize: '20px',
        '& .MuiInputBase-input': {
            padding: '0 0 0 20px',
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
            paddingInline: '28px',
            height: '74px',
        },
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '24px',
        '& .MuiInputBase-input': {
            padding: '0 0 0 18px',
        },
        '& .MuiOutlinedInput-root': {
            paddingInline: '29px',
            height: '106px',
        },
    },
}));

export default function ContactNameField() {
    const profile = useAuthStore((state) => state.profile);

    const [isEdit, setEdit] = useState(false);
    const [value, setValue] = useState<string>((profile.name || '') + ' ' + (profile.lastName || ''));

    const btnText = isEdit ? 'Save' : 'Change';

    const inputRef = useRef<HTMLInputElement>(null);

    const toggleEdit = () => {
        setEdit((prevState) => !prevState);
        if (!isEdit) {
            inputRef.current!.focus();
        }
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (!isEdit) return;
        setValue(e.target.value);
    };

    return (
        <CustomInput
            inputRef={inputRef}
            required
            name="recipient"
            aria-label="user-name"
            isdisabled={!isEdit}
            onChange={handleChange}
            value={value}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position={'start'}>
                            <UserIcon isEdit={isEdit} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <EditBtn onClick={toggleEdit}>{btnText}</EditBtn>
                        </InputAdornment>
                    ),
                }
            }}
        />
    );
}
