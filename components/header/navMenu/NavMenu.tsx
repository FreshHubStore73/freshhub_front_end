import React from 'react';

import NavMenuDrawer from './navMenuDrawer';
import { getCategories } from '../NavBar/NavBar';
import type { CategoryItem } from '../NavBar/NavBar';

import styles from './navMenu.module.scss';

type Props = {};

export default async function NavMenu({}: Props) {
    const categories: CategoryItem[] = await getCategories();
    return <NavMenuDrawer categories={categories} />;
}
