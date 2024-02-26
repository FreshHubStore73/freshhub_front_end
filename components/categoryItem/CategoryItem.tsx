import React from 'react';

import { Box, Typography } from '@mui/material';
import BreadCrumbs from '@/components/breadcrumbs/Breadcrumbs';

import DishCard from '@/components/dishcard';
import SortSelect from '@/components/sortSelect/SortSelect';
import { getCategories } from '../header/navBar/NavBar';
import type { DishItem } from '@/components/dishcard/DishCard';
import EmptyBlock from '../emptyBlock/EmptyBlock';

import styles from './categoryItem.module.scss';

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
        <Box mt={'111px'}>
            <BreadCrumbs pages={pages} />

            <Box
                display="flex"
                justifyContent={
                    title === 'This is no such category... Ups' ? 'center' : 'space-between'
                }
                mt={'44px'}
                mb={'30px'}
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
                        gap: '30px',
                        justifyContent: `${dishes.length ? 'flex-start' : 'center'}`,
                    }}
                >
                    {dishes.length ? (
                        dishes.map((dish) => <DishCard key={dish._id} item={dish} />)
                    ) : (
                        <EmptyBlock />
                    )}
                </Box>
            </section>
        </Box>
    );
}
