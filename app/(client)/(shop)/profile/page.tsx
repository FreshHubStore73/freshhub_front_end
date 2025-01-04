import { redirect } from 'next/navigation';
import { Box, Typography } from '@mui/material';

import { auth, getUser } from '@/actions/auth';
import UserCard from '@/components/profile/UserCard';
import HistoryButton from '@/components/profile/HistoryButton';
import ListOfOrders from '@/components/profile/ordersList/ListOfOrders';
import PersonalInfo from '@/components/profile/personalInfo/PersonalInfo';
import StubBlock from '@/components/stubBlock/StubBlock';
import { getOrderHistory } from '@/actions/order';

type Props = { searchParams: { history?: boolean } };

export async function generateMetadata({ searchParams }: Props) {
    return {
        title: searchParams?.history ? 'Orders history | FresHHub' : 'User profile | FresHHub',
    };
}

export default async function Page({ searchParams }: Props) {
    const session = await auth();
    if (!session?.user.userId) return;

    const userData = await getUser(session?.user.userId);
    const orders = await getOrderHistory(session?.user.userId);
    if (!userData.success || !orders.success) redirect('/login');

    return (
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
                <UserCard name={userData.data?.name || ''} phoneNumber={userData.data?.phoneNumber || ''} />
                <HistoryButton searchParams={!!searchParams?.history} />
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    mt: {
                        desktop:
                            !searchParams?.history ||
                                (orders.data?.length && searchParams?.history)
                                ? '105.88px'
                                : '0px',
                    },
                }}
            >
                {!searchParams?.history ? (
                    <PersonalInfo
                        name={userData?.data?.name || ''}
                        lastName={userData?.data?.lastName || ''}
                        phoneNumber={userData?.data?.phoneNumber || ''}
                    />
                ) : orders.data?.length ? (
                    <ListOfOrders history={orders.data} />
                ) : (
                    <StubBlock />
                )}
            </Box>
        </Box>
    );
}