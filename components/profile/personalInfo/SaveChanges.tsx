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
            variant="contained"
            onClick={handleSave}
            disabled={disabled || pending}
            sx={{
                width: '100%',
                maxWidth: '370px',
                whiteSpace: 'nowrap',
                borderRadius: '50px',
                height: '74px',
            }}
        >
            {isChangeActive ? 'Save changes' : 'Change'}
        </Button>
    );
};

export default SaveChanges;
