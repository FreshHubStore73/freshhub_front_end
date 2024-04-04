import { Metadata } from 'next';

import OrderPage from '@/components/orderPage/OrderPage';

export const metadata: Metadata = {
    title: 'Complete order',
};

const Page = async () => {
    return <OrderPage />;
};

export default Page;
