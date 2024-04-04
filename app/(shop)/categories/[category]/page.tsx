import CategoryItem from '@/components/categoryItem/CategoryItem';
import { getDishes } from '@/utils/getData';

type Props = {
    params: { category: string };
    searchParams: { [key: string]: string };
};

export async function generateMetadata({ params, searchParams }: Props) {
    return {
        title: searchParams?.search
            ? 'Search | FresHHub'
            : `${
                  params.category.charAt(0).toLocaleUpperCase + params.category.slice(1)
              } | FresHHub`,
    };
}

const Category = async ({ params, searchParams }: Props) => {
    const dishes: DishItem[] = await getDishes(params.category, searchParams);
    return <CategoryItem dishes={dishes} path={params.category} searchParams={searchParams} />;
};

export default Category;
