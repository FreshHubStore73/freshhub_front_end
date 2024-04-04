import Box from '@mui/material/Box';

import BreadCrumbs from '@/components/breadcrumbs/Breadcrumbs';
import DishItem from '@/components/dishItem';

import { getDish } from '@/utils/getData';

type Props = { params: { dishId: string } };

export async function generateMetadata({ params }: Props) {
    const { dishId } = params;
    const id = dishId[0];
    const dishItem = await getDish(id);
    return {
        title: `${
            dishItem.productName.length > 59
                ? dishItem.productName.slice(0, 60) + '...'
                : dishItem.productName
        }  | FresHHub`,
    };
}

export default async function DishItemPage({ params }: Props) {
    const { dishId } = params;
    const id = dishId[0];
    const dishItem = await getDish(id);

    return (
        <>
            <BreadCrumbs />
            <DishItem dish={dishItem} />
        </>
    );
}
