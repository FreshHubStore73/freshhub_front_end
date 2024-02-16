import { FC } from 'react';

import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import { Add, Remove } from '@mui/icons-material';

interface INumberInput {
    quantity: number;
    setQuantity: (quantity: number) => void;
    name?: string;
}
interface StyledNumberInputProps {
    type: 'cart' | 'order' | 'dish' | 'persons';
}
const NumberInput = styled((props: TextFieldProps) => (
    <TextField {...props} />
))<StyledNumberInputProps>(({ theme, type }) => ({
    '& .MuiInputAdornment-root': {
        margin: '0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: type === 'dish' ? theme.palette.accent.main : 'rgba(62, 59, 59, 0.4)',
    },
    '& .MuiOutlinedInput-root': {
        width: type === 'order' ? '85px' : '112px',
        height: type === 'order' ? '40px' : type === 'dish' ? '50px' : '52px',
        borderRadius: '50px',
        paddingInline: type === 'order' ? '2px' : '5px',
        color: theme.palette.text.secondary,
        '&.Mui-focused .MuiOutlinedInput-notchedOutline, &:focus .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline':
            {
                borderColor: type === 'dish' ? theme.palette.accent.main : 'rgba(62, 59, 59, 0.4)',
                borderWidth: '1px',
            },

        '& .MuiInputBase-input.MuiOutlinedInput-input': {
            textAlign: 'center',
        },
        lineHeight: '1',
    },
    fontSize: type === 'order' ? '20px' : '24px',
}));

const StyledIconButton = styled('div')<StyledNumberInputProps>(({ theme, type }) => ({
    width: type === 'order' ? '27px' : '34px',
    height: type === 'order' ? '27px' : '34px',
    paddingBlock: type === 'order' ? '2px' : '5px',
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

const Input: FC<INumberInput & StyledNumberInputProps> = ({
    quantity,
    setQuantity,
    name,
    type,
}) => {
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
            type={type}
            name={name}
            InputProps={{
                startAdornment: (
                    <InputAdornment position={'start'}>
                        <StyledIconButton
                            type={type}
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
                            type={type}
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
