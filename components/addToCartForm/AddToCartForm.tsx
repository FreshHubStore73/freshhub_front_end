'use client';

import { useState } from 'react';

import type { DishItem as DishItemType } from '../dishcard/DishCard';
import type { DishInCart } from '../../store/index';
import AddToCartButton from '../addToCartButton';
import NumberInput from '../numberInput';

import styles from './addToCartForm.module.scss';

export default function AddToCartForm({ dish }: { dish: DishItemType }) {
    const { _id, title, picture, price } = dish;
    const [quantity, setQuantity] = useState(1);

    const dishToCart: DishInCart = {
        dishId: _id,
        dTitle: title,
        dPic: picture,
        dPrice: price,
        dQuantity: quantity,
    };

    const onAddToCart = (e: any) => {
        e.preventDefault();
        setQuantity(1);
    };

    return (
        <form onSubmit={onAddToCart}>
            <div className={styles.inputWrapper}>
                <NumberInput quantity={quantity} setQuantity={setQuantity} />
                <AddToCartButton dish={dishToCart} />
            </div>
        </form>
    );
}
