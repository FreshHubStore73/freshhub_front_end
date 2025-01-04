import { Metadata } from 'next';

import OrderPage from '@/components/orderPage/OrderPage';

export const metadata: Metadata = {
    title: 'Complete order',
};

export default function Page() {
    return <OrderPage />;
}