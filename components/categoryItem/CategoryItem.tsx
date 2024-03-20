import React from 'react';

import { Box, Typography } from '@mui/material';
import BreadCrumbs from '@/components/breadcrumbs/Breadcrumbs';

import DishCard from '@/components/dishcard';
import SortSelect from '@/components/sortSelect/SortSelect';
import StubBlock from '../stubBlock/StubBlock';
import { getCategories } from '@/utils/getData';

type Props = {
    path: string;
    searchParams: {
        [key: string]: string;
    };
    dishes: DishItem[];
};

export default async function CategoryItem({ dishes, path, searchParams }: Props) {
    const { pages } = await getCategories();
    const searchQuery = searchParams?.search;
    const title = !new RegExp(path, 'i').test(pages.join('.'))
        ? 'This is no such category... Ups'
        : path === 'search'
        ? (path = `Search for "${searchQuery}"`)
        : path;

    return (
        <>
            <BreadCrumbs />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent:
                        title === 'This is no such category... Ups' ? 'center' : 'space-between',
                    alignContent: 'center',
                    margin: {
                        mobile: '16px 0 14px',
                        tablet: '25px 0 21px',
                        desktop: '44px 0 29px',
                    },
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        '&::first-letter': {
                            textTransform: 'uppercase',
                        },
                    }}
                >
                    {title}
                </Typography>
                {dishes.length ? <SortSelect /> : null}
            </Box>
            <section>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        columnGap: {
                            mobile: '16px',
                            tablet: '20px',
                        },
                        rowGap: {
                            mobile: '14px',
                            tablet: '20px',
                            desktop: '40px',
                        },
                        justifyContent: `${dishes.length ? 'flex-start' : 'center'}`,
                    }}
                >
                    {dishes.length ? (
                        dishes.map((dish) => <DishCard key={dish.id} item={dish} />)
                    ) : (
                        <StubBlock />
                    )}
                </Box>
            </section>
        </>
    );
}
