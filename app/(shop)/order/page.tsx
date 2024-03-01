import OrderPage from '@/components/orderPage/OrderPage';
import styles from './page.module.scss';

type Props = { params: {} };

const Page = async (params: Props) => {
    return <OrderPage />;
};

export default Page;
