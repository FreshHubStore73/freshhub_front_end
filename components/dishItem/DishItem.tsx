'use client';
import { useState } from 'react';
import NumberInput from '../numberInput';
import styles from './dishItem.module.scss';
import Image from 'next/image';
import AddToCartButton from '../addToCartButton';
import type { DishItem as DishItemType } from '../dishcard/DishCard';
import { useShoppingCart, type DishInCart } from '../../store/index';

const DishItem = ({ dish }: { dish: DishItemType }) => {
    const { _id, category, title, picture, descr, price, weight } = dish;
    // const dishes = useShoppingCart((state) => state.dishes);

    // const [quantity, setQuantity] = useState(
    //     dishes.filter((item) => item.dishId === _id)[0].dQuantity,
    // );
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
        <section>
            <div className={styles.wrapper}>
                <div className={styles.picture}>
                    <Image src={picture} alt={title} fill />
                </div>
                <div className={styles.contentWrapper}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{descr}</p>
                    <div className={styles.price}>{price} ₴</div>
                    <hr />
                    <div className={styles.weight}>{weight}</div>
                    <form onSubmit={(e) => onAddToCart(e)}>
                        <div className={styles.inputWrapper}>
                            <NumberInput quantity={quantity} setQuantity={setQuantity} />
                            <AddToCartButton dish={dishToCart} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default DishItem;
