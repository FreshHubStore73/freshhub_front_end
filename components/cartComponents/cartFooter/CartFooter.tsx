import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { SetStateAction } from 'react';

type Props = { totalAmount: number; closeDrawer: () => void };

export default function CartFooter({ totalAmount, closeDrawer }: Props) {
    console.log('footer');
    return (
        <Stack flexGrow={'0'}>
            <Divider />
            <Stack flexDirection={'row'} justifyContent={'space-between'} lineHeight={'49px'}>
                <Typography sx={{ fontSize: '30px', color: 'text.primary' }}>Total:</Typography>
                <Typography sx={{ fontSize: '38px', fontWeight: 700, color: 'text.secondary' }}>
                    ${totalAmount}
                </Typography>
            </Stack>
            <Divider />
            <Link href="/order">
                <Button
                    fullWidth
                    variant="contained"
                    onClick={closeDrawer}
                    sx={{
                        color: 'white',
                        borderRadius: '50px',
                        lineHeight: '77px',
                        paddingBlock: 0,
                        marginTop: '28px',
                    }}
                >
                    Checkout
                </Button>
            </Link>
        </Stack>
    );
}
