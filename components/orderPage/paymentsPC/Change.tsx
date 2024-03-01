import React, { ChangeEvent, forwardRef, useLayoutEffect, useState } from 'react';

import Collapse from '@mui/material/Collapse';
import FormControl from '@mui/material/FormControl';
import InputAdornment, { InputAdornmentProps } from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useShoppingCart } from '@/store';

type Props = { isExpanded: boolean };

const StartAdornment = styled((props: InputAdornmentProps) => <InputAdornment {...props} />)(
    ({ theme }) => ({
        fontSize: '22px',
        '& .MuiTypography-root': {
            color: theme.palette.text.primary,
        },
    }),
);

const ChangeInput = styled((props: TextFieldProps) => <TextField name="change" {...props} />)(
    ({ theme }) => ({
        '& .MuiInputBase-root': {
            paddingInline: '24px 40px',
            height: '73px',
            borderRadius: '40px',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.text.secondary,
                borderWidth: '2px',
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
        },
        '& .MuiInputBase-input': {
            padding: '0',
            fontSize: '22px',
            textAlign: 'end',
        },
    }),
);

// eslint-disable-next-line react/display-name
const Change = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { isExpanded } = props;

    const totalAmount = useShoppingCart((state) => state.totalAmount);
    const [value, setValue] = useState(totalAmount);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value) || 0);
    };

    useLayoutEffect(() => {
        setValue(Math.ceil(totalAmount / 50) * 50);
    }, [totalAmount]);

    return (
        <Collapse
            in={isExpanded}
            sx={{
                mt: '22px',
            }}
        >
            <FormControl fullWidth>
                <ChangeInput
                    inputRef={ref}
                    disabled={!isExpanded}
                    error={value < totalAmount}
                    onChange={handleChange}
                    value={value}
                    InputProps={{
                        startAdornment: (
                            <StartAdornment position={'start'}>Prepare change with:</StartAdornment>
                        ),
                    }}
                    helperText={
                        value < totalAmount
                            ? "You cash amount shouldn't be less than need to pay"
                            : ''
                    }
                />
            </FormControl>
        </Collapse>
    );
});
export default Change;
