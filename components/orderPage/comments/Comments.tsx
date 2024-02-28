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
))({
    marginBottom: '33px',
});

const CommentsArea = styled((props: TextFieldProps) => (
    <TextField multiline name="comments" fullWidth minRows={3} {...props} />
))(({ theme }) => ({
    '& .MuiInputBase-input.MuiOutlinedInput-input ': {
        fontSize: '22px',
        color: '#040705',
        '&::placeholder': {
            fontSize: '18px',
            color: '#828282',
            opacity: 1,
        },
    },
    '& .MuiInputBase-root.MuiOutlinedInput-root': {
        borderRadius: '40px',
        padding: '26px 20px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.primary,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
            borderWidth: '1,5px',
        },
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary aria-controls="comment-content" {...props} />
))({
    backgroundColor: 'none',
    '&.MuiAccordionSummary-root.MuiButtonBase-root': {
        paddingInline: '20px',
        minHeight: '30px',
    },
    '& .MuiAccordionSummary-content': {
        margin: '0',
    },
});

const Label = styled((props: InputLabelProps) => <InputLabel {...props} />)(({ theme }) => ({
    fontSize: '24px',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
}));

const AccordionDetails = styled(MuiAccordionDetails)({
    padding: '25px 0 0',
    border: 'none',
});

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
                        <Remove fontSize="large" sx={{ color: 'text.secondary' }} />
                    ) : (
                        <Add fontSize="large" sx={{ color: 'text.secondary' }} />
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
