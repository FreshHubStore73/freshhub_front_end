import React from 'react';

import NavMenuDrawer from './navMenuDrawer';

import { getCategories } from '@/actions/dishes';

export default async function NavMenu() {
    const categoriesData = await getCategories();
    if (!categoriesData) return null;
    const categories = categoriesData.map((item) => item.name);
    return <NavMenuDrawer categories={categories} />;
}
