import { FC } from 'react';

import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import { InputAdornment, SvgIconProps } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

interface INumberInput {
    quantity: number;
    setQuantity: (quantity: number) => void;
    name?: string;
}
const NumberInput = styled((props: TextFieldProps) => (
    <TextField required autoComplete="off" {...props} />
))(({ theme }) => ({
    '& .MuiInputAdornment-root': {
        margin: '0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `rgba(${theme.palette.text.secondary}, 0.4)`,
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root': {
        borderRadius: '50px',
        padding: '11.5px 19px',
        '&.Mui-focused > fieldset': {
            borderColor: theme.palette.text.secondary,
            borderWidth: '1px',
        },
        '& .MuiInputBase-input.MuiOutlinedInput-input': {
            width: '100px',
            padding: '0',
            textAlign: 'center',
        },
    },
    fontSize: '24px',
    flexGrow: 1,
}));

const Minus = styled((props: SvgIconProps) => <Remove {...props} />)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': { color: theme.palette.accent.main },
}));
const Plus = styled((props: SvgIconProps) => <Add {...props} />)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': { color: theme.palette.accent.main },
}));

const Input: FC<INumberInput> = ({ quantity, setQuantity, name }) => {
    const handleClick = (q: number) => {
        q + quantity ? setQuantity(quantity + q) : null;
    };
    return (
        <NumberInput
            name={name}
            onChange={() => {
                return;
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position={'start'}>
                        <Minus onClick={() => handleClick(-1)} />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <Plus onClick={() => handleClick(1)} />
                    </InputAdornment>
                ),
            }}
            value={quantity}
        />
    );
};
export default Input;
