import { FC } from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

type Props = { totalAmount: number; closeDrawer: () => void };

const CartFooter: FC<Props> = ({ totalAmount, closeDrawer }) => {
    return (
        <Box flexGrow={'0'}>
            <Divider sx={{ borderColor: '#E1D5C9' }} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    lineHeight: '49px',
                    marginBlock: '12px',
                }}
            >
                <Typography sx={{ fontSize: '30px', color: 'text.primary' }}>Total:</Typography>
                <Typography sx={{ fontSize: '38px', fontWeight: 700, color: 'text.secondary' }}>
                    ${totalAmount}
                </Typography>
            </Box>
            <Divider sx={{ borderColor: '#E1D5C9' }} />
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
        </Box>
    );
};
export default CartFooter;
