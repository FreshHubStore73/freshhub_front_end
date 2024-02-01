import Box from '@mui/material/Box';

import BreadCrumbs from '@/components/breadcrumbs/Breadcrumbs';
import DishItem from '../../../../components/dishItem';

import styles from './page.module.scss';

async function getDish(_id: string) {
    const res = await fetch(`http://localhost:3000/api/dish/${_id}`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch dishes');
    return res.json();
}

type Props = { params: { dishId: string } };

export default async function DishItemPage({ params }: Props) {
    const { dishId } = params;
    const id = dishId[0];
    const dishItem = await getDish(id);

    return (
        <Box mt={'111px'}>
            <BreadCrumbs />
            <DishItem dish={dishItem} />
        </Box>
    );
}
