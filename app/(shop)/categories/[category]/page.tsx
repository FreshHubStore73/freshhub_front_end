import type { DishItem } from '@/components/dishcard/DishCard';

import styles from './category.module.scss';
import CategoryItem from '@/components/categoryItem/CategoryItem';

interface IRequestSearchParams {
    [key: string]: string;
}

async function getDishes(category: string, requestSearchParams: IRequestSearchParams = {}) {
    const searchParams = new URLSearchParams([...Object.entries(requestSearchParams)]);
    const url = new URL(
        `http://localhost:3000/api/categories/${category}?${searchParams.toString()}`,
    );
    const res = await fetch(url.toString(), {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch dishes');
    return res.json();
}
type Props = {
    params: { category: string };
    searchParams: { [key: string]: string };
};

const Category = async ({ params, searchParams }: Props) => {
    const dishes: DishItem[] = await getDishes(params.category, searchParams);
    return (
        <>
            <CategoryItem dishes={dishes} path={params.category} searchParams={searchParams} />
        </>
    );
};

export default Category;
