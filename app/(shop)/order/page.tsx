import styles from './page.module.scss';
import Address from '@/components/orderPage/address/Address';
type Props = { params: {} };

const OrderPage = (params: Props) => {
    return (
        <>
            <Address />
        </>
    );
};

export default OrderPage;
