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
        [theme.breakpoints.up('mobile')]: {
            width: type === 'order' ? '56px' : type === 'dish' ? '70px' : '57px',
            height: type === 'order' ? '25px' : type === 'dish' ? '30px' : '26px',
            paddingInline: type === 'order' ? '2px' : '5px',
        },
        [theme.breakpoints.up('tablet')]: {
            width: type === 'order' ? '85px' : type === 'dish' ? '100px' : '85px',
            height: type === 'order' ? '34px' : type === 'dish' ? '36px' : '40px',
            paddingInline: type === 'order' ? '2px' : '5px',
        },
        [theme.breakpoints.up('desktop')]: {
            width: type === 'order' ? '85px' : '112px',
            height: type === 'order' ? '40px' : type === 'dish' ? '50px' : '52px',
            paddingInline: type === 'order' ? '2px' : '5px',
        },
        borderRadius: '50px',
        color: theme.palette.text.secondary,
        '&.Mui-focused .MuiOutlinedInput-notchedOutline, &:focus .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline':
            {
                borderColor: type === 'dish' ? theme.palette.accent.main : 'rgba(62, 59, 59, 0.4)',
                borderWidth: '1px',
            },
        '& .MuiInputBase-input': {
            padding: 0,
        },
        '& .MuiInputBase-input.MuiOutlinedInput-input': {
            textAlign: 'center',
        },
        lineHeight: '1',
    },
    [theme.breakpoints.up('mobile')]: {
        fontSize: type === 'order' ? '14px' : '12px',
    },
    [theme.breakpoints.up('tablet')]: {
        fontSize: type === 'order' ? '18px' : '18px',
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: type === 'order' ? '20px' : '24px',
    },
}));

const StyledIconButton = styled('div')<StyledNumberInputProps>(({ theme, type }) => ({
    [theme.breakpoints.up('mobile')]: {
        '& .MuiSvgIcon-root': {
            fontSize: type === 'order' ? '18px' : '16px',
        },
        paddingTop: '1px',
    },
    [theme.breakpoints.up('tablet')]: {
        '& .MuiSvgIcon-root': {
            fontSize: type === 'order' ? '18px' : '20px',
        },
        padding: type === 'order' ? '4px 4px 2px' : '4px 3px 2px',
    },
    [theme.breakpoints.up('desktop')]: {
        '& .MuiSvgIcon-root': {
            fontSize: type === 'order' ? '24px' : '28px',
        },
        padding: type === 'order' ? '3px 2px 2px' : '4px 4px 2px',
    },

    borderRadius: '25px',
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
