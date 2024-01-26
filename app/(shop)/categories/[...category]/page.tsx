import Link from 'next/link';

import DishCard from '../../../../components/dishcard';
import styles from './category.module.scss';
import type { DishItem } from '../../../../components/dishcard/DishCard';

async function getDishes(category: string, sortType?: string) {
    const q = sortType ? `?sort=${sortType}` : '';
    const res = await fetch(`http://localhost:3000/api/${category}${q}`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch dishes');
    return res.json();
}

const Category = async ({ params }: { params: { category: string[] } }) => {
    const category = params.category[0];
    const sortType = params.category.find((el) => el.startsWith('sort'))?.split('-')[1];
    const sectionTitle =
        category.toLowerCase().charAt(0).toUpperCase() + category.toLowerCase().slice(1);
    const dishes: DishItem[] = await getDishes(category, sortType);

    return (
        <>
            <h1 className={styles.title}>{sectionTitle}</h1>
            <section>
                <div>
                    <button>
                        <Link href={`/categories/${category}/sort-asc`}>ASC</Link>
                    </button>
                    <button>
                        <Link href={`/categories/${category}/sort-desc`}>DESC</Link>
                    </button>
                </div>
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
