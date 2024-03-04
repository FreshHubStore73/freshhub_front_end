import StubBlock from '@/components/stubBlock/StubBlock';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import React from 'react';

type Props = { open: boolean; onClose: () => void };

function Success({ open, onClose }: Props) {
    return (
        <Dialog fullScreen={true} open={open} onClose={onClose}>
            {/* <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
            <DialogActions>
                <Button autoFocus onClick={onClose}>
                    &times;
                </Button>
            </DialogActions>
            <DialogContent>
                <StubBlock text="Your order has been successfully placed" />
            </DialogContent>
        </Dialog>
    );
}

export default Success;
