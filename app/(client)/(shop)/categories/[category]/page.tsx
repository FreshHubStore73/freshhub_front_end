import { notFound } from 'next/navigation';

import CategoryItem from '@/components/categoryItem/CategoryItem';
import { getCategories, getDishes } from '@/actions/dishes';
import { basePages } from '@/data/pages';

type Props = {
    params: { category: string };
    searchParams: {
        search?: string;
        sort?: SortType
    };
};

export async function generateMetadata({ params, searchParams }: Props) {
    return {
        title: searchParams?.search
            ? 'Search | FresHHub'
            : `${params.category.charAt(0).toLocaleUpperCase() + params.category.slice(1)
            } | FresHHub`,
    };
}

const isValidSortType = (sort: string | undefined): sort is SortType => {
    return sort === 'asc' || sort === 'desc';
}

export default async function CategoryPage({ params, searchParams }: Props) {
    const { category } = params;
    const categories = await getCategories();

    if (!categories?.length) return null;

    const categoriesPaths = categories.map(p => p.path);
    const searchPath = basePages[0].path;
    const pagesPaths = [...categoriesPaths, searchPath];

    if (!pagesPaths?.some((item) => item === category)) return notFound();

    const argsForFetchFnc: Parameters<typeof getDishes> = [category];

    const queries: typeof argsForFetchFnc[1] = {};

    if (isValidSortType(searchParams?.sort)) queries.sort = searchParams?.sort;
    if (searchParams?.search) queries.search = searchParams?.search;

    if (Object.keys(queries).length) argsForFetchFnc.push(queries);

    const dishes = await getDishes(...argsForFetchFnc);

    const title = category === searchPath ?
        `Search for '${searchParams.search}'` :
        categories.filter((item) => item.path === category)[0].name;

    if (!dishes?.length) return;

    return <CategoryItem dishes={dishes} title={title} categoryName={category} />;
}
