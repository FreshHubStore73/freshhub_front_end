import { useState, ChangeEvent, useRef, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Change from './Change';

type Props = {};

const RadioIcon = styled('span')(({ theme }) => ({
    [theme.breakpoints.up('mobile')]: {
        height: 26,
        width: 26,
    },
    [theme.breakpoints.up('tablet')]: {
        height: 34,
        width: 34,
    },
    [theme.breakpoints.up('desktop')]: {
        height: 38,
        width: 38,
    },
    borderRadius: '50%',
    backgroundColor: '#E0E0E0',
    '.Mui-focusVisible &': {
        outline: `2px auto ${theme.palette.text.secondary}`,
        // outlineOffset: 1,
    },
}));

const CheckedRadioIcon = styled(RadioIcon)(({ theme }) => ({
    backgroundColor: '#E0E0E0',
    '&::before': {
        [theme.breakpoints.up('mobile')]: {
            height: 16,
            width: 16,
            top: '10px',
            left: '14px',
        },
        [theme.breakpoints.up('tablet')]: {
            height: 20,
            width: 20,
            top: '14px',
            left: '16px',
        },
        [theme.breakpoints.up('desktop')]: {
            height: 22,
            width: 22,
            top: '17px',
            left: '17px',
        },
        display: 'block',
        position: 'absolute',

        backgroundImage: 'radial-gradient(#F15C30,#F15C30 66%,transparent 74%)',
        content: '""',
    },
}));

function CustomRadio(props: RadioProps) {
    return (
        <Radio
            disableRipple
            color="default"
            checkedIcon={<CheckedRadioIcon />}
            icon={<RadioIcon />}
            sx={{ marginRight: '4px' }}
            {...props}
        />
    );
}

export default function Payments({}: Props) {
    const [isCash, setIsCash] = useState(false);
    const changeRef = useRef<HTMLInputElement>(null);

    const handleCollapse = (event: ChangeEvent<HTMLInputElement>): void => {
        setIsCash(event.target.value === 'cash');
    };

    useEffect(() => {
        if (changeRef.current && isCash) {
            changeRef.current.focus();
        }
    }, [isCash]);

    return (
        <>
            {/* <FormControl
                sx={{
                    '& .MuiFormControlLabel-root': {
                        marginLeft: '-7px',
                    },
                }}
            > */}
            <FormLabel
                sx={{
                    fontWeight: 700,
                    fontSize: { mobile: '16px', tablet: '22px', desktop: '28px' },

                    '&.MuiFormLabel-root.Mui-focused': {
                        color: 'text.secondary',
                    },
                }}
            >
                Payment
            </FormLabel>
            <RadioGroup
                defaultValue="card"
                aria-labelledby="payment-method"
                name="payment"
                onChange={handleCollapse}
                sx={{
                    marginLeft: '3px',
                    marginTop: { mobile: '16px', tablet: '22px', desktop: '30px' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { mobile: '1px', tablet: '5px', desktop: '4px' },
                }}
            >
                <FormControlLabel
                    value="card"
                    control={<CustomRadio />}
                    label="Pay by card"
                    sx={{
                        fontSize: { mobile: '16px', tablet: '20px', desktop: '24px' },
                        '& .MuiRadio-root': {
                            py: { mobile: '5px', tablet: '7px', desktop: '9px' },
                        },
                    }}
                />
                <FormControlLabel
                    value="cash"
                    control={<CustomRadio />}
                    label="Cash"
                    sx={{
                        fontSize: { mobile: '16px', tablet: '20px', desktop: '24px' },
                        '& .MuiRadio-root': {
                            py: { mobile: '5px', tablet: '7px', desktop: '9px' },
                        },
                    }}
                />
            </RadioGroup>
            {/* </FormControl> */}
            <Change isExpanded={isCash} ref={changeRef} />
        </>
    );
}
