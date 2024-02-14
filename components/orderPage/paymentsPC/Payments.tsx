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
    borderRadius: '50%',
    width: 38,
    height: 38,
    backgroundColor: '#E0E0E0',
    '.Mui-focusVisible &': {
        outline: `2px auto ${theme.palette.text.secondary}`,
        // outlineOffset: 1,
    },
}));

const CheckedRadioIcon = styled(RadioIcon)({
    backgroundColor: '#E0E0E0',
    '&::before': {
        display: 'block',
        width: 22,
        height: 22,
        position: 'absolute',
        top: '17px',
        left: '17px',
        backgroundImage: 'radial-gradient(#F15C30,#F15C30 55%,transparent 62%)',
        content: '""',
    },
});

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
                    fontSize: '28px',
                    marginBottom: '21px',
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
                }}
            >
                <FormControlLabel
                    value="card"
                    control={<CustomRadio />}
                    label="Pay by card"
                    sx={{
                        marginBottom: '13px',
                        fontSize: '24px',
                    }}
                />
                <FormControlLabel
                    value="cash"
                    control={<CustomRadio />}
                    label="Cash"
                    sx={{ fontSize: '24px' }}
                />
            </RadioGroup>
            {/* </FormControl> */}
            <Change isExpanded={isCash} ref={changeRef} />
        </>
    );
}
