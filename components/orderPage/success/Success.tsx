import React, { memo, useEffect } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
} from '@mui/material';

type Props = { open: boolean; onClose: () => void, children: React.ReactNode };

const Success = memo(function Success({ open, onClose, children }: Props) {

    useEffect(() => {
        let timerId: NodeJS.Timeout;
        if (open) {
            timerId = setTimeout(() => onClose(), 1500);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [open, onClose]);

    return (
        <Dialog fullScreen={true} open={open} onClose={onClose}>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={onClose}
                    disableTouchRipple
                    sx={{
                        fontSize: '48px',
                        color: 'text.primary',
                        backgroundColor: '#fff',
                        '&:hover': {
                            backgroundColor: '#fff',
                        },
                    }}
                >
                    &times;
                </Button>
            </DialogActions>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );
});

export default Success;
