import Link from 'next/link';

import { Button, SvgIcon } from '@mui/material';

type Props = { searchParams: boolean };

const BreakSvg = () => (
    <SvgIcon
        sx={{
            width: { mobile: '30px', tablet: '46px', desktop: '50px' },
            height: { mobile: '30px', tablet: '46px', desktop: '50px' },
        }}
    >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path
                d="M43.7501 15.6253L35.4167 19.792M35.4167 19.792L34.3751 20.3128L25.0001 25.0003M35.4167 19.792V27.0837M35.4167 19.792L15.6251 9.37533M25.0001 25.0003L6.25008 15.6253M25.0001 25.0003V44.792M32.4542 7.04616L36.6209 9.23366C41.1022 11.5857 43.3438 12.7607 44.5897 14.8753C45.8334 16.9878 45.8334 19.6191 45.8334 24.8795V25.1232C45.8334 30.3816 45.8334 33.0128 44.5897 35.1253C43.3438 37.2399 41.1022 38.417 36.6209 40.7691L32.4542 42.9545C28.7959 44.8732 26.9667 45.8337 25.0001 45.8337C23.0334 45.8337 21.2042 44.8753 17.5459 42.9545L13.3792 40.767C8.898 38.4149 6.65633 37.2399 5.4105 35.1253C4.16675 33.0128 4.16675 30.3816 4.16675 25.1253V24.8816C4.16675 19.6212 4.16675 16.9899 5.4105 14.8774C6.65633 12.7628 8.898 11.5857 13.3792 9.23574L17.5459 7.04824C21.2042 5.12741 23.0334 4.16699 25.0001 4.16699C26.9667 4.16699 28.7959 5.12533 32.4542 7.04616Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    </SvgIcon>
);
export default function HistoryButton({ searchParams }: Props) {
    return (
        <Link href={`/profile${searchParams ? '' : '?history=true'}`}>
            {' '}
            <Button
                fullWidth
                variant={searchParams ? 'contained' : 'outlined'}
                startIcon={<BreakSvg />}
                sx={{
                    mt: { mobile: '12px', tablet: '20px', desktop: '22px' },
                    height: { mobile: '58px', tablet: '84px', desktop: '90px' },
                    borderRadius: { mobile: '26px', tablet: '40px', desktop: '50px' },
                    fontSize: { mobile: '18px', tablet: '24px', desktop: '28px' },
                    fontWeight: 400,
                    color: searchParams ? '#fff' : 'text.secondary',
                    backgroundColor: {
                        mobile: searchParams ? 'accent.main' : 'beige.main',
                        desktop: searchParams ? 'accent.main' : '#fff',
                    },
                    borderColor: {
                        mobile: searchParams ? '' : 'beige.main',
                        desktop: searchParams ? '' : 'text.secondary',
                    },
                    '&:hover': {
                        backgroundColor: {
                            mobile: searchParams ? 'accent.main' : 'beige.main',
                            desktop: searchParams ? 'accent.main' : '#fff',
                        },
                        borderColor: {
                            mobile: searchParams ? '' : 'beige.main',
                            desktop: searchParams ? '' : 'text.secondary',
                        },
                    },

                    '& .MuiButton-root': {
                        gap: { mobile: '20px', tablet: '30px', desktop: '20px' },
                    },
                }}
            >
                Purchase history
            </Button>
        </Link>
    );
}
