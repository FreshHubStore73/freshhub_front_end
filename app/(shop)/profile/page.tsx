import { redirect } from 'next/navigation';

import { Box, Typography } from '@mui/material';

import { getUser } from '@/components/authItems/auth';
import BreadCrumbs from '@/components/breadcrumbs/Breadcrumbs';
import UserCard from '@/components/profile/UserCard';
import HistoryButton from '@/components/profile/HistoryButton';
import OrdersList from '@/components/profile/ordersList/OrdersList';
import PersonalInfo from '@/components/profile/personalInfo/PersonalInfo';
import { getOrders } from '@/utils/getData';

type Props = { params: { userId: string }; searchParams: { history?: boolean } };

const Page = async ({ params, searchParams }: Props) => {
    const data = await getUser();
    const orders = await getOrders();
    if (!data.user) redirect('/login');

    return (
        <>
            <BreadCrumbs useSearchParams={searchParams?.history} />
            <Typography
                variant="h2_Oswald"
                component="h1"
                sx={{
                    mt: { mobile: '14px', tablet: '24px', desktop: '14px' },
                    color: 'text.secondary',
                }}
            >
                Personal data
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { mobile: 'column', desktop: 'row' },
                    justifyContent: { mobile: 'flex-start', desktop: 'space-between' },
                    gap: { mobile: '16px', tablet: '20px', desktop: '88px' },
                    mt: { mobile: '10px', tablet: '12px', desktop: '14px' },
                }}
            >
                <Box sx={{ minWidth: { mobile: '0px', desktop: '432px' } }}>
                    <UserCard firstName={data.user.firstName} phoneNumber={data.user.phoneNumber} />
                    <HistoryButton searchParams={!!searchParams?.history} />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    {searchParams?.history ? (
                        <OrdersList history={orders} />
                    ) : (
                        <PersonalInfo
                            firstName={data.user.firstName}
                            lastName={data.user.lastName}
                            phoneNumber={data.user.phoneNumber}
                        />
                    )}
                </Box>
            </Box>
        </>
    );
};

export default Page;
