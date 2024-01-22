import styles from './page.module.scss';
import React from 'react';

type Props = { params: { dishId: string } };

export default function DishItemPage({ params }: Props) {
    const { dishId } = params;
    return <h1>{dishId.charAt(0).toUpperCase() + dishId.slice(1)} page</h1>;
}
