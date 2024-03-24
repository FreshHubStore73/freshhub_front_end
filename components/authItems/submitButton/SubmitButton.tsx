import { Button, ButtonProps } from '@mui/material';
import { useFormStatus } from 'react-dom';

type Props = ButtonProps & { text: string };

function SubmitButton({ text, ...rest }: Props) {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disableTouchRipple
            aria-disabled={pending}
            variant="contained"
            disabled={pending}
            {...rest}
            sx={{
                width: { mobile: '100%', tablet: '347px', desktop: '380px' },
                height: { mobile: '56px', tablet: '86px', desktop: '106px' },
                borderRadius: { mobile: '40px', desktop: '50px' },
                fontSize: { mobile: '20px', tablet: '28px' },
                '&:hover': {
                    backgroundColor: 'accent.main',
                },
                '&.Mui-disabled': {
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
