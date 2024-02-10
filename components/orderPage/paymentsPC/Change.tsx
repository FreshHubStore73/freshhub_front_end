import React from 'react';

import Collapse from '@mui/material/Collapse';
import FormControl from '@mui/material/FormControl';
import InputAdornment, { InputAdornmentProps } from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

type Props = { isExpanded: boolean };

const StartAdornment = styled((props: InputAdornmentProps) => <InputAdornment {...props} />)(
    ({ theme }) => ({
        fontSize: '22px',
        '& .MuiTypography-root': {
            color: theme.palette.text.primary,
        },
    }),
);
const ChangeInput = styled((props: TextFieldProps) => (
    <TextField type="number" name="change" {...props} />
))(({ theme }) => ({
    '& .MuiInputBase-root': {
        padding: '24px 24px',
        borderRadius: '40px',
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
            borderWidth: '3px',
        },
    },

    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.text.secondary,
    },
    '& .MuiInputBase-input': {
        padding: '0',
        fontSize: '22px',
        '-moz-appearance': 'textfield',
        '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },
    },
}));
export default function Change({ isExpanded }: Props) {
    return (
        <Collapse in={isExpanded}>
            <FormControl
                fullWidth
                sx={{
                    mt: '22px',
                }}
            >
                <ChangeInput
                    disabled={!isExpanded}
                    onScroll={() => {
                        return;
                    }}
                    InputProps={{
                        startAdornment: (
                            <StartAdornment position={'start'}>Prepare change with:</StartAdornment>
                        ),
                    }}
                />
            </FormControl>
        </Collapse>
    );
}
