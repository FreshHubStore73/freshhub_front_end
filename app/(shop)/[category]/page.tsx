import { Box, Typography } from '@mui/material';

import DishCard from '@/components/dishcard';
import SortSelect from '@/components/sortSelect/SortSelect';
import type { DishItem } from '@/components/dishcard/DishCard';

import styles from './category.module.scss';

async function getDishes(category: string, sortType: string) {
    const q = sortType ? `?sort=${sortType}` : '';
    const res = await fetch(`http://localhost:3000/api/${category}${q}`, {
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
    const dishes: DishItem[] = await getDishes(category, sortType);
    const path = {
        category,
        sortType,
    };
    return (
        <>
            <Box display="flex" justifyContent={'space-between'} mt={'111px'}>
                <Typography variant="h2">{category}</Typography>
                <SortSelect path={path} />
            </Box>
            <section>
                <div className={styles.wrapper}>
                    {dishes.map((dish) => (
                        <DishCard key={dish._id} item={dish} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Category;
