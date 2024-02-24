import { Button } from '@mui/material';
import { useFormStatus } from 'react-dom';

type Props = { text: string };

function SubmitButton({ text }: Props) {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" aria-disabled={pending} disabled={pending}>
            {text}
        </Button>
    );
}
export default SubmitButton;
