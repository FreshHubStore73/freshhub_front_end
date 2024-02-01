import { Box, Typography } from '@mui/material';
import type { DishItem } from '@/components/dishcard/DishCard';
import BreadCrumbs from '@/components/breadcrumbs/Breadcrumbs';

import DishCard from '@/components/dishcard';
import SortSelect from '@/components/sortSelect/SortSelect';

import styles from './categoryItem.module.scss';

import React from 'react';

type Props = {
    path: {
        category: string;
        sortType: string;
    };
    dishes: DishItem[];
};

export default function CategoryItem({ dishes, path }: Props) {
    return (
        <Box mt={'111px'}>
            <BreadCrumbs />

            <Box display="flex" justifyContent={'space-between'} mt={'44px'} mb={'30px'}>
                <Typography variant="h2" component="h1">
                    {path.category}
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
