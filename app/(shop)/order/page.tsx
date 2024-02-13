import styles from './page.module.scss';
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
};

export default OrderPage;
