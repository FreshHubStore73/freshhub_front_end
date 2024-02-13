import OrderPage from '@/components/orderPage/OrderPage';
import styles from './page.module.scss';
<<<<<<< HEAD
import Address from '@/components/orderPage/address/Address';
import Time from '@/components/orderPage/time/Time';
type Props = { params: {} };

const OrderPage = (params: Props) => {
    return (
        <>
            <Address />
            <Time />
        </>
    );
=======

type Props = { params: {} };

const Page = (params: Props) => {
    return <OrderPage />;
>>>>>>> orderPage
};

export default OrderPage;
