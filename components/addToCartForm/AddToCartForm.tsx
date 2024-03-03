'use client';

import { useState } from 'react';

import AddToCartButton from '../addToCartButton';
import NumberInput from '../numberInput/Input';

import styles from './addToCartForm.module.scss';

export default function AddToCartForm({ dish }: { dish: DishItem }) {
    const [quantity, setQuantity] = useState(1);

    const onAddToCart = (e: any) => {
        e.preventDefault();
        setQuantity(1);
    };

    return (
        <form onSubmit={onAddToCart}>
            <div className={styles.inputWrapper}>
                <NumberInput quantity={quantity} setQuantity={setQuantity} type="dish" />
                <AddToCartButton dish={{ ...dish, quantity }} />
            </div>
        </form>
    );
}
