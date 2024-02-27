import { Button, ButtonProps } from '@mui/material';
import { useFormStatus } from 'react-dom';

type Props = ButtonProps & { text: string };

function SubmitButton({ text, ...rest }: Props) {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            aria-disabled={pending}
            variant="contained"
            disabled={pending}
            {...rest}
            sx={{ width: '380px', height: '106px', borderRadius: '50px', fontSize: '28px' }}
        >
            {text}
        </Button>
    );
}
export default SubmitButton;
