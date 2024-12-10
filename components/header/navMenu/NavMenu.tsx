import React from 'react';

import NavMenuDrawer from './navMenuDrawer';

import { getCategories } from '@/utils/getData';

type Props = {};

export default async function NavMenu({ }: Props) {
    const categoriesData = await getCategories();
    if (!categoriesData) return null;
    const categories = categoriesData.map((item) => item.name);
    return <NavMenuDrawer categories={categories} />;
}
