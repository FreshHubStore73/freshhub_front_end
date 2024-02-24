import React from 'react';

import { Box, Typography } from '@mui/material';
import BreadCrumbs from '@/components/breadcrumbs/Breadcrumbs';

import DishCard from '@/components/dishcard';
import SortSelect from '@/components/sortSelect/SortSelect';
import { getCategories } from '../header/navBar/NavBar';
import type { DishItem } from '@/components/dishcard/DishCard';

import styles from './categoryItem.module.scss';

type Props = {
    path: string;
    dishes: DishItem[];
};

export default async function CategoryItem({ dishes, path }: Props) {
    const { pages } = await getCategories();
    const title = new RegExp(path, 'i').test(pages.join('.')) ? path : 'This page does not exist';
    return (
        <Box mt={'111px'}>
            <BreadCrumbs pages={pages} />

            <Box display="flex" justifyContent={'space-between'} mt={'44px'} mb={'30px'}>
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
                <SortSelect />
            </Box>
            <section>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {dishes.map((dish) => (
                        <DishCard key={dish._id} item={dish} />
                    ))}
                </Box>
            </section>
        </Box>
    );
}
