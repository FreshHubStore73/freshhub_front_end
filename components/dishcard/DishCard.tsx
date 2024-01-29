import React from 'react';
import styles from './dishcard.module.scss';
import Image from 'next/image';
import AddToCartButton from '../addToCartButton';
import Link from 'next/link';
export type DishItem = {
    _id: string;
    title: string;
    picture: string;
    descr: string;
    price: number;
    weight: string;
    category: string;
};
const DishCard = ({ item }: { item: DishItem }) => {
    const { _id, title, picture, descr, price, weight, category } = item;
    const dish = {
        dishId: _id,
        dTitle: title,
        dPic: picture,
        dPrice: price,
        dQuantity: 1,
    };

    return (
        <div className={styles.card}>
            <Link href={`/${category}/${_id}/${title.replace(' ', '-')}`} className={styles.link}>
                <span className={styles.advice}>recomended</span>
                <div className={styles.wrapper}>
                    <div className={styles.dishImg}>
                 
                        <Image className={styles.img} src={picture} alt={'dishImg'} fill />
                    
                        <span className={styles.dishPrice}>{price} ₴</span>
                    </div>
                    <h3 className={styles.dishTitle}>{title}</h3>
                    <p className={styles.dishDescr}>{descr}</p>
                </div>
            </Link>
            <AddToCartButton dish={dish} />
        </div>
    );
};

export default DishCard;
