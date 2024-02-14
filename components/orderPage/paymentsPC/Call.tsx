import * as React from 'react';

import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {};

const FreshSwitch = styled((props: SwitchProps) => (
    <Switch
        name="call"
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        inputProps={{ 'aria-label': 'Request a call' }}
        {...props}
    />
))(({ theme }) => ({
    width: 68,
    height: 38,
    padding: 0,
    '&.MuiSwitch-root': {
        overflow: 'unset',
    },
    '& .MuiSwitch-switchBase': {
        padding: '0',
        margin: '4px',
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(100%)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.accent.main,
                opacity: 1,
                border: 0,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: theme.palette.accent.main,
            border: '6px solid #fff',
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 30,
        height: 30,
        boxShadow: '0px 0px 14px 1px rgba(0,0,0,0.25)',
    },
    '& .MuiSwitch-track': {
        borderRadius: 80,
        backgroundColor: '#E0E0E0',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

const CallIcon = () => (
    <SvgIcon
        sx={{
            width: '48px',
            height: '48px',
        }}
    >
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M28.5506 7.1115C28.6016 6.92113 28.6895 6.74266 28.8094 6.58629C28.9293 6.42992 29.0789 6.29871 29.2495 6.20015C29.4202 6.1016 29.6085 6.03763 29.8039 6.01191C29.9993 5.98619 30.1978 5.99922 30.3881 6.05025C33.1689 6.77577 35.706 8.22945 37.7381 10.2616C39.7702 12.2937 41.2239 14.8308 41.9494 17.6115C42.0004 17.8018 42.0135 18.0004 41.9877 18.1957C41.962 18.3911 41.898 18.5795 41.7995 18.7501C41.7009 18.9208 41.5697 19.0703 41.4133 19.1902C41.257 19.3102 41.0785 19.3981 40.8881 19.449C40.7614 19.4823 40.631 19.4993 40.5 19.4996C40.1697 19.4997 39.8486 19.3908 39.5866 19.1898C39.3245 18.9887 39.1361 18.7068 39.0506 18.3877C38.4592 16.1174 37.2729 14.0458 35.6141 12.3867C33.9553 10.7276 31.884 9.54088 29.6138 8.949C29.4232 8.89828 29.2446 8.8105 29.088 8.69067C28.9314 8.57084 28.8 8.42132 28.7013 8.25066C28.6025 8.07999 28.5384 7.89154 28.5125 7.69607C28.4867 7.5006 28.4996 7.30196 28.5506 7.1115ZM28.1138 14.949C30.6994 15.639 32.3606 17.3021 33.0506 19.8877C33.1361 20.2068 33.3245 20.4887 33.5866 20.6898C33.8486 20.8908 34.1697 20.9997 34.5 20.9996C34.631 20.9993 34.7614 20.9823 34.8881 20.949C35.0785 20.8981 35.257 20.8102 35.4133 20.6902C35.5697 20.5703 35.7009 20.4208 35.7995 20.2501C35.898 20.0795 35.962 19.8911 35.9877 19.6957C36.0135 19.5004 36.0004 19.3018 35.9494 19.1115C34.9894 15.519 32.4806 13.0102 28.8881 12.0502C28.6978 11.9994 28.4993 11.9865 28.304 12.0124C28.1087 12.0383 27.9204 12.1023 27.7499 12.201C27.5793 12.2996 27.4299 12.4309 27.3101 12.5873C27.1903 12.7436 27.1024 12.9221 27.0516 13.1124C27.0007 13.3028 26.9879 13.5013 27.0137 13.6966C27.0396 13.8919 27.1037 14.0802 27.2023 14.2507C27.3009 14.4212 27.4322 14.5707 27.5886 14.6905C27.745 14.8103 27.9234 14.8981 28.1138 14.949ZM41.6944 29.7109L32.8613 25.7527L32.8369 25.7415C32.3783 25.5454 31.8781 25.4667 31.3815 25.5125C30.8848 25.5583 30.4074 25.7273 29.9925 26.004C29.9437 26.0363 29.8967 26.0713 29.8519 26.109L25.2881 29.9996C22.3969 28.5952 19.4119 25.6327 18.0075 22.779L21.9038 18.1459C21.9413 18.099 21.9769 18.0521 22.0106 18.0015C22.2814 17.5877 22.4457 17.1133 22.4889 16.6207C22.5321 16.128 22.4528 15.6324 22.2581 15.1777V15.1552L18.2888 6.30712C18.0314 5.71324 17.5889 5.21852 17.0272 4.89682C16.4656 4.57511 15.815 4.44367 15.1725 4.52212C12.6318 4.85645 10.2997 6.10419 8.61177 8.0323C6.92381 9.96041 5.99542 12.437 6.00002 14.9996C6.00002 29.8871 18.1125 41.9996 33 41.9996C35.5626 42.0042 38.0392 41.0758 39.9673 39.3879C41.8955 37.6999 43.1432 35.3678 43.4775 32.8271C43.5561 32.1849 43.4249 31.5344 43.1036 30.9728C42.7822 30.4112 42.2879 29.9685 41.6944 29.7109Z"
                fill="#3E3B3B"
            />
        </svg>
    </SvgIcon>
);

export default function Call({}: Props) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'start',
                justifyContent: 'space-between',
                gap: '20px',
                marginBottom: '36px',
            }}
        >
            <Box height={'65px'}>
                <CallIcon />
            </Box>
            <Box flexGrow={'1'}>
                <Typography
                    sx={{
                        fontWeight: 700,
                        mb: '6px',
                        fontSize: '26px',
                        lineHeight: '31px',
                    }}
                >
                    Call for clarification
                </Typography>
                <Typography
                    sx={{
                        fontSize: '18px',
                        color: '#828282',
                        lineHeight: '22px',
                    }}
                >
                    Please check your contact details to avoid inaccuracies
                </Typography>
            </Box>
            <FreshSwitch />
        </Box>
    );
}
