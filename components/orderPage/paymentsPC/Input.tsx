import { FC } from 'react';

import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import {
    IconButton,
    IconButtonProps,
    IconProps,
    InputAdornment,
    SvgIconProps,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

interface INumberInput {
    quantity: number;
    setQuantity: (quantity: number) => void;
    name?: string;
}
interface StyledNumberInputProps {
    type?: 'cart' | 'small' | 'dish';
}
const NumberInput = styled((props: TextFieldProps) => (
    <TextField {...props} />
))<StyledNumberInputProps>(({ theme, type }) => ({
    '& .MuiInputAdornment-root': {
        margin: '0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: type === 'cart' ? 'rgba(62, 59, 59, 0.4)' : theme.palette.accent.main,
    },
    '& .MuiOutlinedInput-root': {
        width: type === 'cart' || type === 'dish' ? '112px' : '85px',
        height: type === 'cart' ? '52px' : type === 'dish' ? '50px' : '40px',
        borderRadius: '50px',
        paddingInline: '5px',
        color: theme.palette.text.secondary,
        '&.Mui-focused .MuiOutlinedInput-notchedOutline, &: focus .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline':
            {
                borderColor: type === 'dish' ? theme.palette.accent.main : 'rgba(62, 59, 59, 0.4)',

                borderWidth: '1px',
            },

        '& .MuiInputBase-input.MuiOutlinedInput-input': {
            textAlign: 'center',
            // color: theme.palette.text.secondary,
        },
        lineHeight: '1',
    },
    fontSize: type === 'cart' || type === 'dish' ? '24px' : '20px',
}));

const StyledIconButton = styled('div')(({ theme }) => ({
    width: '34px',
    height: '34px',
    paddingBlock: '5px',
    borderRadius: '40px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    color: theme.palette.text.secondary,
    '&:hover': {
        color: theme.palette.accent.main,
        backgroundColor: 'rgba(224, 224, 224, 0.5)',
    },
    '&:focus-visible': {
        outline: `2px auto ${theme.palette.text.secondary}`,
        backgroundColor: 'rgba(224, 224, 224, 0.5)',
    },
}));

const Input: FC<INumberInput> = ({ quantity, setQuantity, name }) => {
    const handleClick = (q: number) => {
        q + quantity ? setQuantity(quantity + q) : null;
    };
    const handleKeyPress = (e: React.KeyboardEvent, q: number) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'Space') {
            e.preventDefault();
            handleClick(q);
        }
    };

    return (
        <NumberInput
            type="cart"
            name={name}
            InputProps={{
                startAdornment: (
                    <InputAdornment position={'start'}>
                        <StyledIconButton
                            tabIndex={0}
                            onClick={() => handleClick(-1)}
                            onKeyDown={(e) => handleKeyPress(e, -1)}
                        >
                            <Remove />
                        </StyledIconButton>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <StyledIconButton
                            tabIndex={0}
                            onClick={() => handleClick(1)}
                            onKeyDown={(e) => handleKeyPress(e, 1)}
                        >
                            <Add />
                        </StyledIconButton>
                    </InputAdornment>
                ),
            }}
            value={quantity}
        />
    );
};
export default Input;
