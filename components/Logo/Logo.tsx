import Link from 'next/link';
import styles from './logo.module.scss';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

type Props = {};

export default function Logo({}: Props) {
    return (
        <Box sx={{ mr: 1, flexGrow: 1 }}>
            <Link href="/" className={styles.logo}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/Logo.jpg" width={60} height={60} alt="Logo" />
                    <Typography
                        noWrap
                        component="span"
                        sx={{ display: { xs: 'none', sm: 'inline' }, ml: 1 }}
                    >
                        𝕱𝖗𝖊𝖘𝖍𝕳𝖚𝖇
                    </Typography>
                </Box>
            </Link>
        </Box>
    );
}
