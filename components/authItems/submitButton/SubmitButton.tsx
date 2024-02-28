import { Button, ButtonProps } from '@mui/material';
import { useFormStatus } from 'react-dom';

type Props = ButtonProps & { text: string; isFormInvalid: boolean };

function SubmitButton({ text, isFormInvalid, ...rest }: Props) {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            aria-disabled={pending}
            variant="contained"
            disabled={pending || isFormInvalid}
            {...rest}
            sx={{
                width: '380px',
                height: '106px',
                borderRadius: '50px',
                fontSize: '28px',
                '&.MuiButton-root.Mui-disabled': {
                    color: '#fff',
                    backgroundColor: '#BDBDBD',
                },
            }}
        >
            {text}
        </Button>
    );
}
export default SubmitButton;
