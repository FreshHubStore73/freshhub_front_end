import { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Add, Remove } from '@mui/icons-material';
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    [theme.breakpoints.up('mobile')]: {
        marginBottom: '14px',
    },
    [theme.breakpoints.up('tablet')]: {
        marginBottom: '22px',
    },
    [theme.breakpoints.up('desktop')]: {
        marginBottom: '33px',
    },
}));

const CommentsArea = styled((props: TextFieldProps) => (
    <TextField multiline name="comment" fullWidth minRows={3} {...props} />
))(({ theme }) => ({
    '& .MuiInputBase-input.MuiOutlinedInput-input ': {
        [theme.breakpoints.up('mobile')]: {
            fontSize: '12px',
        },
        [theme.breakpoints.up('tablet')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.up('desktop')]: {
            fontSize: '22px',
        },
        color: '#040705',
        '&::placeholder': {
            [theme.breakpoints.up('mobile')]: {
                fontSize: '10px',
            },
            [theme.breakpoints.up('tablet')]: {
                fontSize: '18px',
            },
            color: '#828282',
            opacity: 1,
        },
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root': {
        borderRadius: '40px',
        [theme.breakpoints.up('mobile')]: {
            padding: '14px 18px',
        },
        [theme.breakpoints.up('tablet')]: {
            padding: '26px 20px',
        },
        [theme.breakpoints.up('desktop')]: {
            padding: '26px 20px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.primary,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
            borderWidth: '2px',
        },
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary aria-controls="comment-content" {...props} />
))(({ theme }) => ({
    backgroundColor: 'none',
    '&.MuiAccordionSummary-root.MuiButtonBase-root': {
        [theme.breakpoints.up('mobile')]: {
            paddingInline: '0px',
        },
        [theme.breakpoints.up('desktop')]: {
            paddingInline: '22px',
        },
        minHeight: '30px',
    },
    '& .MuiAccordionSummary-content': {
        margin: '0',
    },
}));

const Label = styled((props: InputLabelProps) => <InputLabel {...props} />)(({ theme }) => ({
    [theme.breakpoints.up('mobile')]: {
        fontSize: '14px',
    },
    [theme.breakpoints.up('tablet')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '24px',
    },
    color: theme.palette.text.secondary,
    cursor: 'pointer',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    [theme.breakpoints.up('mobile')]: {
        padding: '14px 0 0',
    },
    [theme.breakpoints.up('tablet')]: {
        padding: '22px 0 0',
    },
    [theme.breakpoints.up('desktop')]: {
        padding: '25px 0 0',
    },
    border: 'none',
}));

export default function Comments() {
    const [isExpanded, setIsExpanded] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = () => {
        setIsExpanded((prevState) => !prevState);
    };

    useEffect(() => {
        if (inputRef.current && isExpanded) inputRef.current.focus();
    }, [isExpanded]);

    return (
        <Accordion expanded={isExpanded} onChange={handleChange}>
            <AccordionSummary
                expandIcon={
                    isExpanded ? (
                        <Remove
                            sx={{
                                color: 'text.secondary',
                                fontSize: { mobile: '20px', tablet: '24px', desktop: '28px' },
                            }}
                        />
                    ) : (
                        <Add
                            sx={{
                                color: 'text.secondary',
                                fontSize: { mobile: '20px', tablet: '24px', desktop: '28px' },
                            }}
                        />
                    )
                }
            >
                <Label>Add a comment to the order</Label>
            </AccordionSummary>
            <AccordionDetails>
                <CommentsArea
                    inputRef={inputRef}
                    placeholder="For example, information about allergens"
                />
            </AccordionDetails>
        </Accordion>
    );
}
