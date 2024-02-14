import Link from 'next/link';
import Image from 'next/image';

import AddToCartButton from '../addToCartButton';

import styles from './dishcard.module.scss';

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
            <div className={styles.wrapper}>
                <Link
                    href={`/${category}/${_id}/${title.replace(/\s+/g, '_')}`}
                    className={styles.link}
                >
                    <div className={styles.dishImg}>
                        <Image
                            className={styles.img}
                            src={picture}
                            alt={'dishImg'}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className={styles.dishTitleInfo}>
                        <h3 className={styles.dishTitle}>{title}</h3>
                        <p className={styles.dishWeight}>{weight}</p>
                    </div>
                    <p className={styles.dishDescr}>{descr}</p>
                    <div className={styles.dishPrice}>
                        <span className={styles.dishPrice}>${price}</span>
                        <AddToCartButton dish={dish} simple={false} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DishCard;
