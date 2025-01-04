import React, {
    ChangeEvent,
    FocusEventHandler,
    forwardRef,
    useLayoutEffect,
    useState,
} from 'react';
import Collapse from '@mui/material/Collapse';
import FormControl from '@mui/material/FormControl';
import InputAdornment, { InputAdornmentProps } from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

import { useCartStore } from '@/stores/Stores-providers';

type Props = { isExpanded: boolean };

const StartAdornment = styled((props: InputAdornmentProps) => <InputAdornment {...props} />)(
    ({ theme }) => ({
        [theme.breakpoints.up('mobile')]: { fontSize: '12px' },
        [theme.breakpoints.up('tablet')]: { fontSize: '20px' },
        [theme.breakpoints.up('desktop')]: { fontSize: '22px' },

        '& .MuiTypography-root': {
            color: theme.palette.text.primary,
        },
    }),
);

const ChangeInput = styled((props: TextFieldProps) => <TextField name="cashSum" {...props} />)(
    ({ theme }) => ({
        [theme.breakpoints.up('mobile')]: {
            '& .MuiInputBase-root': {
                paddingInline: '18px 30px',
                height: '48px',
                '& .MuiInputBase-input': {
                    fontSize: '12px',
                },
            },
        },
        [theme.breakpoints.up('tablet')]: {
            '& .MuiInputBase-root': {
                paddingInline: '28px 40px',
                height: '68px',
                '& .MuiInputBase-input': {
                    fontSize: '20px',
                },
            },
        },
        [theme.breakpoints.up('desktop')]: {
            '& .MuiInputBase-root': {
                paddingInline: '24px 40px',
                height: '73px',
                '& .MuiInputBase-input': {
                    fontSize: '22px',
                },
            },
        },
        '& .MuiInputBase-root': {
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
            textAlign: 'end',
        },
    }),
);

// eslint-disable-next-line react/display-name
const Change = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { isExpanded } = props;

    const totalAmount = useCartStore((state) => state.totalAmount);
    const [value, setValue] = useState<number>(totalAmount);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value) || 0);
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        parseInt(e.target.value) < totalAmount ? setValue(Math.ceil(totalAmount / 50) * 50) : null;
    };

    useLayoutEffect(() => {
        setValue(Math.ceil(totalAmount / 50) * 50);
    }, [totalAmount]);

    return (
        <Collapse
            in={isExpanded}
            sx={{
                mt: { mobile: '9px', tablet: '9px', desktop: '14px' },
            }}
        >
            <FormControl fullWidth>
                <ChangeInput
                    inputRef={ref}
                    disabled={!isExpanded}
                    error={value < totalAmount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <StartAdornment position={'start'}>Prepare change with:</StartAdornment>
                            ),
                        }
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
