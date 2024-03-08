import Link from 'next/link';

import { Button, SvgIcon } from '@mui/material';

type Props = { searchParams: boolean };

const BreakSvg = () => (
    <SvgIcon
        sx={{
            width: '50px',
            height: '50px',
        }}
    >
        <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M40.7503 12.6253L32.417 16.792M32.417 16.792L31.3753 17.3128L22.0003 22.0003M32.417 16.792V24.0837M32.417 16.792L12.6253 6.37533M22.0003 22.0003L3.25033 12.6253M22.0003 22.0003V41.792M29.4545 4.04616L33.6212 6.23366C38.1024 8.58574 40.3441 9.76074 41.5899 11.8753C42.8337 13.9878 42.8337 16.6191 42.8337 21.8795V22.1232C42.8337 27.3816 42.8337 30.0128 41.5899 32.1253C40.3441 34.2399 38.1024 35.417 33.6212 37.7691L29.4545 39.9545C25.7962 41.8732 23.967 42.8337 22.0003 42.8337C20.0337 42.8337 18.2045 41.8753 14.5462 39.9545L10.3795 37.767C5.89824 35.4149 3.65658 34.2399 2.41074 32.1253C1.16699 30.0128 1.16699 27.3816 1.16699 22.1253V21.8816C1.16699 16.6212 1.16699 13.9899 2.41074 11.8774C3.65658 9.76282 5.89824 8.58574 10.3795 6.23574L14.5462 4.04824C18.2045 2.12741 20.0337 1.16699 22.0003 1.16699C23.967 1.16699 25.7962 2.12533 29.4545 4.04616Z"
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
                    mt: '22px',
                    height: '90px',
                    borderRadius: '50px',
                    fontWeight: 400,
                    color: searchParams ? '#fff' : 'text.secondary',
                    '&.MuiButton-root': {
                        borderColor: searchParams ? '' : 'text.secondary',
                    },
                }}
            >
                Purchase history
            </Button>
        </Link>
    );
}
