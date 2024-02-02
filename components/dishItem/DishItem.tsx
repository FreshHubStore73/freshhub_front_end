import Image from 'next/image';

import AddToCartForm from '../addToCartForm/AddToCartForm';
import type { DishItem as DishItemType } from '../dishcard/DishCard';

import Card from '@/public/images/credit-card.png';
import Delivery from '@/public/images/delivery-truck.png';

import styles from './dishItem.module.scss';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['500', '700'],
});

const DishItem = ({ dish }: { dish: DishItemType }) => {
    const { _id, title, picture, descr, price, weight } = dish;

    return (
        <section className={styles.dishItem}>
            <div className={styles.wrapper}>
                <div className={styles.picture}>
                    <Image
                        src={picture}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className={styles.contentWrapper}>
                    <h3 className={`${styles.title} ${oswald.className}`}>{title}</h3>
                    <div className={styles.contentInfo}>
                        <div className={styles.titleInfo}>
                            <h4>Ingredients</h4>
                            <p className={styles.weight}>{weight}</p>
                        </div>
                        <p className={styles.description}>{descr}</p>
                        <div className={styles.cardInfo}>
                            <div className={`${styles.price} ${oswald.className}`}>${price}</div>
                            <AddToCartForm dish={dish} />
                        </div>
                        <p className={styles.description}>
                            Average delivery time / <span>55 min</span>
                        </p>
                        <div className={styles.delivery}>
                            <Image src={Delivery} alt={title} />
                            <p>Free delivery</p>
                        </div>
                        <div className={styles.delivery}>
                            <Image src={Card} alt={title} />
                            <p>Convenient order payment - by card or cash on delivery!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DishItem;
