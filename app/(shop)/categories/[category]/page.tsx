import CategoryItem from '@/components/categoryItem/CategoryItem';
import { getCategories, getDishes } from '@/utils/getData';

type Props = {
    params: { category: string };
    searchParams: { [key: string]: string };
};

const Category = async ({ params, searchParams }: Props) => {
    const dishes: DishItem[] = await getDishes(params.category, searchParams);
    return <CategoryItem dishes={dishes} path={params.category} searchParams={searchParams} />;
};

export default Category;
