import OrderPage from '@/components/orderPage/OrderPage';
import styles from './page.module.scss';
import { getCategories } from '@/components/header/navBar/NavBar';

type Props = { params: {} };

const Page = async (params: Props) => {
    const { pages } = await getCategories();

    return <OrderPage />;
};

export default Page;
