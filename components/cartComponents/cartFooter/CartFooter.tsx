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
                    lineHeight: { mobile: '22px', tablet: '36px', desktop: '49px' },
                    marginBlock: { mobile: '8px', tablet: '10px', desktop: '10px' },
                }}
            >
                <Typography
                    sx={{
                        fontSize: { mobile: '18px', tablet: '24px', desktop: '30px' },
                        color: 'text.primary',
                    }}
                >
                    Total:
                </Typography>
                <Typography
                    sx={{
                        fontSize: { mobile: '22px', tablet: '30px', desktop: '38px' },
                        fontWeight: 700,
                        color: 'text.secondary',
                    }}
                >
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
                        borderRadius: { mobile: '20px', tablet: '50px', desktop: '50px' },
                        fontSize: { mobile: '14px', tablet: '20px', desktop: '28px' },
                        lineHeight: { mobile: '36px', tablet: '52px', desktop: '77px' },
                        paddingBlock: 0,
                        marginTop: { mobile: '10px', tablet: '20px', desktop: '28px' },
                        '&:hover': {
                            backgroundColor: 'accent.main',
                        },
                    }}
                >
                    Checkout
                </Button>
            </Link>
        </Box>
    );
};
export default CartFooter;
