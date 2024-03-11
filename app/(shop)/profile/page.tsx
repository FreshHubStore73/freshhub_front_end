import { getUser } from '@/components/authItems/auth';
import { redirect } from 'next/navigation';

import styles from './page.module.scss';
import { Box, Typography } from '@mui/material';
import BreadCrumbs from '@/components/breadcrumbs/Breadcrumbs';
import UserCard from '@/components/profile/UserCard';
import HistoryButton from '@/components/profile/HistoryButton';
import OrdersList from '@/components/profile/OrdersList';
import PersonalInfo from '@/components/profile/personalInfo/PersonalInfo';

type Props = { params: { userId: string }; searchParams: { history?: boolean } };

const Page = async ({ params, searchParams }: Props) => {
    const data = await getUser();
    if (!data.user) redirect('/login');

    return (
        <>
            <BreadCrumbs useSearchParams={searchParams?.history} />
            <Typography
                variant="h2_Oswald"
                component="h1"
                mt={'14px'}
                color="palette.text.secondary"
            >
                Personal data
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '88px',
                    mt: '14px',
                }}
            >
                <Box sx={{ minWidth: '432px' }}>
                    <UserCard firstName={data.user.firstName} phoneNumber={data.user.phoneNumber} />
                    <HistoryButton searchParams={!!searchParams?.history} />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    {searchParams?.history ? (
                        <OrdersList />
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
