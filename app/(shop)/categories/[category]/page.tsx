import type { DishItem } from '@/components/dishcard/DishCard';

import styles from './category.module.scss';
import CategoryItem from '@/components/categoryItem/CategoryItem';

async function getDishes(category: string, sortType: string, search: string) {
    const q = sortType ? `?sort=${sortType}` : '';
    const searchQuery = search ? `?search=${search}` : '';
    const res = await fetch(`http://localhost:3000/api/categories/${category}${q}${searchQuery}`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch dishes');
    return res.json();
}
type Props = {
    params: { category: string };
    searchParams: { [sort: string]: string };
};

const Category = async ({ params, searchParams }: Props) => {
    const category = params.category;
    const sortType = searchParams.sort;
    const search = searchParams.search;
    const dishes: DishItem[] = await getDishes(category, sortType, search);
    return (
        <>
            <CategoryItem dishes={dishes} path={category} />
        </>
    );
};

export default Category;
