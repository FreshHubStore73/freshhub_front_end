import { MouseEventHandler } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@mui/material';

type Props = {
    handleSave: MouseEventHandler<HTMLButtonElement>;
    isChangeActive: boolean;
    disabled: boolean;
};

const SaveChanges = ({ handleSave, isChangeActive, disabled }: Props) => {
    const { pending } = useFormStatus();

    return (
        <Button
            disableTouchRipple
            variant="contained"
            onClick={handleSave}
            disabled={disabled || pending}
            type='submit'
            sx={{
                width: '100%',
                maxWidth: { mobile: '306px', tablet: '370px' },
                fontSize: { mobile: '20px', tablet: '22px', desktop: '28px' },
                whiteSpace: 'nowrap',
                borderRadius: { mobile: '40px', desktop: '50px' },
                height: { mobile: '48px', tablet: '64px', desktop: '74px' },
                mt: { mobile: '6px', tablet: 'unset' },
                '&:hover': {
                    backgroundColor: 'accent.main',
                },
            }}
        >
            {isChangeActive ? 'Save changes' : 'Change'}
        </Button>
    );
};

export default SaveChanges;
