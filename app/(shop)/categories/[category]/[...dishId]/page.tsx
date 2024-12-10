import DishItem from '@/components/dishItem';

import { getDishById } from '@/utils/getData';

type Props = { params: { dishId: string[]; category: ProductCategory } };

export async function generateMetadata({ params }: Props) {
    const { dishId } = params;
    const id = dishId[0];
    const dishItem = await getDishById(id);

    if (!dishItem) return;

    return {
        title: `${dishItem.productName.length > 59
            ? dishItem.productName.slice(0, 60) + '...'
            : dishItem.productName
            }  | FresHHub`,
    };
}

export default async function DishItemPage({ params }: Props) {
    const { dishId } = params;
    const id = dishId[0];

    const dishItem = await getDishById(id);
    if (!dishItem) return;

    return (
        <DishItem dish={dishItem} />
    );
}
