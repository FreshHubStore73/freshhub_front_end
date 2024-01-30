'use client';
import Link from 'next/link';
import { Box, SvgIcon, Typography } from '@mui/material';

import styles from './logo.module.scss';

export default function Logo() {
    return (
        <Box
            sx={{
                flexGrow: { xs: 1, md: 0 },
                justifyContent: 'center',
            }}
        >
            <Link href="/">
                <SvgIcon
                    sx={{
                        height: '74px',
                        width: '98px',
                    }}
                >
                    <svg
                        width="98"
                        height="74"
                        viewBox="0 0 98 74"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_340_2153)">
                            <g clipPath="url(#clip1_340_2153)">
                                <g clipPath="url(#clip2_340_2153)">
                                    <g clipPath="url(#clip3_340_2153)">
                                        <g clipPath="url(#clip4_340_2153)">
                                            <g clipPath="url(#clip5_340_2153)">
                                                <path
                                                    d="M49 73.3891C64.8506 73.3891 77.7 60.2467 77.7 44.0349C77.7 27.823 64.8506 14.6807 49 14.6807C33.1495 14.6807 20.3 27.823 20.3 44.0349C20.3 60.2467 33.1495 73.3891 49 73.3891Z"
                                                    fill="#FFC182"
                                                />
                                                <g clipPath="url(#clip6_340_2153)">
                                                    <path
                                                        d="M66.335 51.3457C66.5497 50.8627 66.6355 50.3797 66.6355 49.8089C66.6355 48.8867 66.2921 48.0085 65.734 47.3059C66.2921 46.6472 66.6355 45.769 66.6355 44.803C66.6355 44.1882 66.4638 43.5734 66.2492 43.0465L67.623 42.6513C68.2241 42.4318 68.5675 41.8609 68.4817 41.2022C68.3958 40.5875 67.8806 40.1045 67.2366 40.1045H66.8931C66.0774 32.3761 58.3925 26.1846 49.119 26.1846C39.8026 26.1846 32.1606 32.3322 31.302 40.1484H30.658C30.0569 40.1484 29.4988 40.6314 29.4129 41.2461C29.3271 41.8609 29.6705 42.4757 30.2716 42.6952L31.6454 43.0904C31.3878 43.6174 31.259 44.2321 31.259 44.8469C31.259 45.769 31.6025 46.6472 32.1606 47.3498C31.6025 48.0085 31.259 48.8867 31.259 49.8528C31.259 50.5553 31.4737 51.1701 31.7742 51.7409C30.5721 52.1362 29.37 52.8826 28.8977 54.0682C28.6401 54.6391 28.8548 55.2978 29.37 55.6491C29.4129 55.693 30.1857 56.176 31.3878 56.7468C31.7742 59.6011 34.1784 61.8845 37.0979 61.8845H60.8396C63.6303 61.8845 65.9916 59.8206 66.5497 57.0542C67.1507 56.9664 67.7089 56.8347 68.2241 56.7468C68.8251 56.5712 69.2115 56.0882 69.2115 55.4734C69.0827 54.2966 68.4817 52.224 66.335 51.3457ZM34.3931 48.6232C34.5648 48.6232 34.7366 48.6672 34.9512 48.6672H62.9004C63.1151 48.6672 63.2439 48.6672 63.4585 48.6232C63.9308 48.8428 64.2313 49.2819 64.2313 49.8089C64.2313 50.5114 63.6732 51.0823 62.9863 51.0823H34.9512C34.2643 51.0823 33.7062 50.5114 33.7062 49.8089C33.6633 49.2819 33.9638 48.8077 34.3931 48.6232ZM38.8581 42.704H58.9077L48.8614 45.8656L38.8581 42.704ZM66.2921 54.4195C64.6177 54.683 62.6857 54.8147 60.4532 54.8147C57.6626 54.8147 55.4731 54.5513 55.4731 54.5513C55.1296 54.5074 54.8291 54.5952 54.5715 54.8587C53.584 55.693 52.0814 56.1321 50.1494 56.1321C46.586 56.1321 42.8079 54.683 42.765 54.6391C42.5932 54.5952 42.4645 54.5513 42.2927 54.5513C42.121 54.5513 41.9922 54.5952 41.8205 54.6391C40.5325 55.2099 39.1586 55.4734 37.6989 55.4734C35.4235 55.4734 33.4915 54.8147 32.1606 54.2439C32.9763 53.9365 34.1355 53.673 35.123 53.6291H62.8575H65.2617C65.7769 53.8575 66.0774 54.1122 66.2921 54.4195ZM64.1025 44.8117C64.1025 45.3387 63.802 45.7778 63.3297 45.9973C63.158 45.9973 62.9863 45.9534 62.7716 45.9534H57.1474L63.6732 43.8896C63.9737 44.1092 64.1025 44.4605 64.1025 44.8117ZM47.9598 28.8192C47.7881 29.0388 47.7452 29.2144 47.7452 29.4779C47.7452 30.1805 48.3033 30.7953 49.0331 30.7953C49.8059 30.7953 50.3211 30.1805 50.3211 29.4779C50.3211 29.2144 50.2782 28.9949 50.1065 28.8192C57.4909 29.2144 63.4585 34.0447 64.2743 40.1484H33.7062C34.6078 34.0535 40.5325 29.2232 47.9598 28.8192ZM40.6183 45.9534H34.9083C34.6936 45.9534 34.5648 45.9534 34.3502 45.9973C33.8779 45.7778 33.5774 45.3387 33.5774 44.8117C33.5774 44.4605 33.7491 44.1092 33.9638 43.8457L40.6183 45.9534ZM60.7538 59.2498H37.012C35.8528 59.2498 34.8224 58.635 34.2214 57.669C35.2947 57.9324 36.4109 58.0642 37.6131 58.0642C39.2016 58.0642 40.7901 57.8007 42.2498 57.2299C43.4519 57.6251 46.7577 58.7228 50.0635 58.7228C52.3819 58.7228 54.228 58.1959 55.6877 57.2299C56.5034 57.2738 58.3066 57.4494 60.4532 57.4494C61.6124 57.4494 62.7287 57.4055 63.7591 57.3616C63.2009 58.4242 62.0418 59.2498 60.7538 59.2498Z"
                                                        fill="#F15C30"
                                                    />
                                                    <path
                                                        d="M45.1693 33.4823C45.8807 33.4823 46.4573 32.8925 46.4573 32.165C46.4573 31.4374 45.8807 30.8477 45.1693 30.8477C44.458 30.8477 43.8813 31.4374 43.8813 32.165C43.8813 32.8925 44.458 33.4823 45.1693 33.4823Z"
                                                        fill="#F15C30"
                                                    />
                                                    <path
                                                        d="M49.8488 35.371C50.5601 35.371 51.1368 34.7812 51.1368 34.0537C51.1368 33.3261 50.5601 32.7363 49.8488 32.7363C49.1374 32.7363 48.5608 33.3261 48.5608 34.0537C48.5608 34.7812 49.1374 35.371 49.8488 35.371Z"
                                                        fill="#F15C30"
                                                    />
                                                    <path
                                                        d="M53.5841 33.079C54.2955 33.079 54.8721 32.4892 54.8721 31.7617C54.8721 31.0341 54.2955 30.4443 53.5841 30.4443C52.8728 30.4443 52.2961 31.0341 52.2961 31.7617C52.2961 32.4892 52.8728 33.079 53.5841 33.079Z"
                                                        fill="#F15C30"
                                                    />
                                                </g>
                                            </g>
                                            <path
                                                d="M10.8872 38.5495L10.239 40.6573L0.916016 37.6578L2.18337 33.5371L3.57497 33.9849L2.95617 35.9975L5.30362 36.7528L5.84297 34.9991L7.28461 35.463L6.74526 37.2168L10.8872 38.5495Z"
                                                fill="#3E3B3B"
                                            />
                                            <path
                                                d="M16.9474 26.8955L15.6429 28.6571L7.85156 22.6223L9.47626 20.4279C9.87526 19.8892 10.2778 19.4678 10.6834 19.1643C11.0905 18.8586 11.5245 18.7125 11.9847 18.7254C12.4464 18.7365 12.95 18.9534 13.495 19.3762C13.8159 19.6246 14.0809 19.872 14.2905 20.1172C14.503 20.3624 14.6493 20.6263 14.7287 20.9091C14.805 21.1922 14.8078 21.5119 14.7361 21.8688L19.3158 23.6963L17.9673 25.518L13.8261 23.6895L13.4551 24.1906L16.9474 26.8955ZM10.3107 21.755L12.4646 23.4231L12.8289 22.9309C13.013 22.6825 13.1128 22.4552 13.1282 22.249C13.1453 22.0442 13.0928 21.8513 12.9703 21.6698C12.8478 21.4883 12.6707 21.3078 12.4387 21.1281C12.1048 20.8697 11.7992 20.7301 11.5224 20.7097C11.2441 20.6911 10.9813 20.8489 10.7342 21.1829L10.3107 21.755Z"
                                                fill="#3E3B3B"
                                            />
                                            <path
                                                d="M29.7605 15.3403L26.048 17.7921L20.7466 9.39424L24.4384 6.95605L25.2374 8.22186L23.3607 9.46118L24.6764 11.5457L26.1075 10.6006L26.9178 11.8843L25.487 12.829L27.0718 15.3395L28.9688 14.0866L29.7605 15.3403Z"
                                                fill="#3E3B3B"
                                            />
                                            <path
                                                d="M40.4138 11.5184C39.8188 11.6652 39.297 11.6799 38.8483 11.5632C38.3971 11.4468 38.0167 11.188 37.7066 10.7871C37.3982 10.3833 37.1469 9.82449 36.9523 9.11104L38.6827 8.39437C38.7895 8.8064 38.9057 9.13252 39.032 9.37308C39.158 9.61364 39.2956 9.77437 39.444 9.85563C39.5899 9.93725 39.7502 9.95622 39.9242 9.91327C40.1412 9.85957 40.2661 9.74931 40.2987 9.58214C40.3284 9.41317 40.3232 9.24421 40.2833 9.0756C40.1895 8.67753 40.0159 8.36286 39.7628 8.13161C39.5101 7.9025 39.1902 7.68772 38.8028 7.48689L37.8091 6.95709C37.3758 6.73335 36.9905 6.45377 36.6527 6.1187C36.3129 5.78399 36.0742 5.32506 35.937 4.74156C35.7427 3.91785 35.8327 3.22839 36.2068 2.67352C36.5792 2.12152 37.1763 1.74421 37.9974 1.54159C38.5063 1.41594 38.9365 1.40306 39.2879 1.50257C39.6368 1.60245 39.9252 1.77499 40.1531 2.01985C40.3809 2.26471 40.5612 2.53749 40.6942 2.83783C40.8279 3.14032 40.9318 3.43422 41.006 3.71917L39.255 4.3936C39.1776 4.10651 39.1006 3.86129 39.024 3.65724C38.9466 3.45105 38.8514 3.3007 38.738 3.20619C38.6246 3.11168 38.4787 3.08663 38.3002 3.13066C38.1035 3.17934 37.9792 3.29783 37.9281 3.48685C37.8798 3.67765 37.8753 3.85735 37.9152 4.02632C37.9999 4.38501 38.1528 4.65815 38.374 4.84573C38.5949 5.03116 38.8714 5.21409 39.2035 5.39415L40.1576 5.90785C40.6567 6.16667 41.1026 6.48885 41.495 6.87439C41.8873 7.25993 42.1628 7.78831 42.321 8.45916C42.4284 8.91487 42.4253 9.35411 42.3119 9.77616C42.196 10.1989 41.978 10.5637 41.6577 10.8701C41.335 11.1773 40.9206 11.3935 40.4138 11.5184Z"
                                                fill="#3E3B3B"
                                            />
                                            <path
                                                d="M53.7997 10.6572L51.6528 10.408L52.7546 0.475586L54.9015 0.724739L54.4553 4.74734L55.9641 4.92239L56.41 0.89979L58.5569 1.14894L57.4555 11.0814L55.3086 10.8322L55.7902 6.49033L54.2813 6.31528L53.7997 10.6572Z"
                                                fill="#3E3B3B"
                                            />
                                            <path
                                                d="M68.0308 15.1364L66.1184 14.1083L70.6656 5.25977L72.578 6.28788L70.7363 9.8716L72.0803 10.594L73.922 7.01064L75.8344 8.03875L71.2872 16.8869L69.3748 15.8588L71.3625 11.9908L70.0185 11.2684L68.0308 15.1364Z"
                                                fill="#3E3B3B"
                                            />
                                            <path
                                                d="M80.0149 25.1635C79.5242 24.5875 79.2319 24.0541 79.1381 23.5633C79.0457 23.0743 79.1217 22.6057 79.366 22.1576C79.6103 21.7126 79.9904 21.2601 80.5063 20.8005L85.5907 16.2695L86.9942 17.9169L81.6623 22.668C81.5115 22.8026 81.3697 22.9494 81.2367 23.1091C81.1072 23.2687 81.0302 23.4337 81.0057 23.6038C80.9795 23.7756 81.0393 23.9478 81.186 24.12C81.3403 24.3011 81.5003 24.3874 81.6658 24.3792C81.831 24.3738 81.999 24.3158 82.1702 24.2045C82.3413 24.0899 82.502 23.9653 82.6528 23.8311L87.9847 19.0797L89.3949 20.7349L84.3104 25.2659C83.7945 25.7255 83.3028 26.047 82.8355 26.2299C82.3648 26.4128 81.9003 26.4257 81.4425 26.2686C80.983 26.1096 80.5073 25.7413 80.0149 25.1635Z"
                                                fill="#3E3B3B"
                                            />
                                            <path
                                                d="M87.4367 38.2571L86.4053 35.37L95.5851 31.9395L96.4597 34.3873C96.6036 34.7897 96.7086 35.1813 96.7751 35.5618C96.8447 35.9438 96.8437 36.3054 96.7723 36.6461C96.7016 36.9895 96.5385 37.2987 96.2826 37.574C96.0247 37.8504 95.6386 38.0845 95.1252 38.2764C94.7559 38.4146 94.4245 38.4751 94.1308 38.4579C93.8365 38.4385 93.5778 38.3555 93.3542 38.2084C93.1298 38.0591 92.9405 37.8511 92.7858 37.5848C92.8701 37.9664 92.8631 38.3147 92.7651 38.6301C92.6703 38.9469 92.4904 39.2268 92.2254 39.4702C91.9605 39.7137 91.6094 39.917 91.1726 40.0806C90.6963 40.2585 90.2637 40.348 89.8748 40.3487C89.4839 40.3505 89.1367 40.2725 88.8325 40.115C88.5284 39.9574 88.2599 39.7223 88.0265 39.409C87.7962 39.0972 87.5995 38.7135 87.4367 38.2571ZM91.3172 35.8872L88.563 36.9164L88.7212 37.3589C88.8833 37.8128 89.1094 38.0841 89.3988 38.174C89.6883 38.2635 90.0519 38.2266 90.4891 38.063C90.8366 37.9331 91.0981 37.791 91.2731 37.6367C91.4512 37.4838 91.5555 37.3005 91.586 37.0868C91.6168 36.8753 91.5783 36.6182 91.4705 36.3165L91.3172 35.8872ZM94.9659 34.5237L92.6549 35.3871L92.7998 35.7931C92.9132 36.1106 93.0455 36.3322 93.197 36.4579C93.3493 36.586 93.5264 36.6451 93.7287 36.6354C93.931 36.6257 94.1609 36.5728 94.4189 36.4765C94.6593 36.3866 94.8455 36.2663 94.9775 36.1156C95.1073 35.9656 95.1829 35.7892 95.2046 35.5862C95.2253 35.3807 95.1885 35.1462 95.0944 34.8824L94.9659 34.5237Z"
                                                fill="#3E3B3B"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_340_2153">
                                <rect width="98" height="74" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_340_2153">
                                <rect
                                    width="98"
                                    height="100.234"
                                    fill="white"
                                    transform="translate(0 -6.08203)"
                                />
                            </clipPath>
                            <clipPath id="clip2_340_2153">
                                <rect
                                    width="98"
                                    height="100.234"
                                    fill="white"
                                    transform="translate(0 -6.08203)"
                                />
                            </clipPath>
                            <clipPath id="clip3_340_2153">
                                <rect
                                    width="98"
                                    height="100.234"
                                    fill="white"
                                    transform="translate(0 -6.08203)"
                                />
                            </clipPath>
                            <clipPath id="clip4_340_2153">
                                <rect
                                    width="98"
                                    height="100.234"
                                    fill="white"
                                    transform="translate(0 -6.08203)"
                                />
                            </clipPath>
                            <clipPath id="clip5_340_2153">
                                <rect
                                    width="57.747"
                                    height="59.0634"
                                    fill="white"
                                    transform="translate(20.1265 14.5029)"
                                />
                            </clipPath>
                            <clipPath id="clip6_340_2153">
                                <rect
                                    width="40.4229"
                                    height="41.3444"
                                    fill="white"
                                    transform="translate(28.7886 23.3623)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </SvgIcon>
            </Link>
        </Box>
    );
}