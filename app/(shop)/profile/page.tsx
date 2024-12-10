import { redirect } from 'next/navigation';

import { Box, Typography } from '@mui/material';

import { getUser } from '@/components/authItems/auth';
import UserCard from '@/components/profile/UserCard';
import HistoryButton from '@/components/profile/HistoryButton';
import ListOfOrders from '@/components/profile/ordersList/ListOfOrders';
import PersonalInfo from '@/components/profile/personalInfo/PersonalInfo';
import { getOrders } from '@/utils/getData';
import StubBlock from '@/components/stubBlock/StubBlock';

type Props = { searchParams: { history?: boolean } };

export async function generateMetadata({ searchParams }: Props) {
    return {
        title: searchParams?.history ? 'Orders history | FresHHub' : 'User profile | FresHHub',
    };
}

const Page = async ({ searchParams }: Props) => {
    const data = await getUser();

    // const orders = await getOrders();
    if (!data.user) redirect('/login');

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { mobile: 'column', desktop: 'row' },
                    justifyContent: { mobile: 'flex-start', desktop: 'space-between' },
                    gap: {
                        mobile: '16px',
                        tablet: '20px',
                        desktop: '60px', //88px
                    },
                    mt: { mobile: '14px', tablet: '24px', desktop: '14px' },
                }}
            >
                <Box
                    sx={{
                        flex: '0 1 32vw',
                        width: { desktop: '32vw' },
                        minWidth: { desktop: '380px' },
                        maxWidth: { desktop: '432px' },
                    }}
                >
                    <Typography
                        variant="h2_Oswald"
                        component="h1"
                        sx={{
                            color: 'text.secondary',
                        }}
                    >
                        Personal data
                    </Typography>
                    <UserCard firstName={data.user.firstName} phoneNumber={data.user.phoneNumber} />
                    <HistoryButton searchParams={!!searchParams?.history} />
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        mt: {
                            desktop:
                                !searchParams?.history ||
                                    (data.user.orders.length && searchParams?.history)
                                    ? '105.88px'
                                    : '0px',
                        },
                    }}
                >
                    {!searchParams?.history ? (
                        <PersonalInfo
                            firstName={data.user.firstName}
                            lastName={data.user.lastName}
                            phoneNumber={data.user.phoneNumber}
                        />
                    ) : data.user.orders.length ? (
                        <ListOfOrders history={data.user.orders} />
                    ) : (
                        <StubBlock />
                    )}
                </Box>
            </Box>
        </>
    );
};

export default Page;
