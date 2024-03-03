import React from 'react';

import NavMenuDrawer from './navMenuDrawer';

import { getCategories } from '@/utils/getData';

type Props = {};

export default async function NavMenu({}: Props) {
    const { categories } = await getCategories();
    return <NavMenuDrawer categories={categories} />;
}
