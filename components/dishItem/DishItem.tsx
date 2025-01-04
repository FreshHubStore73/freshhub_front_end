import Image from 'next/image';

import AddToCartForm from '../addToCartForm/AddToCartForm';

import Card from '@/public/images/credit-card.png';
import Delivery from '@/public/images/delivery-truck.png';

import styles from './dishItem.module.scss';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['500', '700'],
});
type Props = {
    dish: DishItem;
}

const DishItem = ({ dish }: Props) => {
    const { photoUrl, productName, price, description, weight } = dish;
    return (
        <section className={styles.dishItem}>
            <div className={styles.wrapper}>
                <div className={styles.picture}>
                    <Image
                        src={photoUrl}
                        alt={productName}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className={styles.contentWrapper}>
                    <h3 className={`${styles.title} ${oswald.className}`}>{productName}</h3>
                    <div className={styles.contentInfo}>
                        <div className={styles.titleInfo}>
                            <h4>Ingredients</h4>
                            <p className={styles.weight}>{weight}g</p>
                        </div>
                        <p className={styles.description}>{description}</p>
                        <div className={styles.cardInfo}>
                            <div className={`${styles.price} ${oswald.className}`}>${price}</div>
                            <AddToCartForm dish={dish} />
                        </div>
                        <p className={styles.description}>
                            Average delivery time / <span>55 min</span>
                        </p>
                        <div className={styles.delivery}>
                            <Image src={Delivery} alt={productName} />
                            <p>Free delivery</p>
                        </div>
                        <div className={styles.delivery}>
                            <Image src={Card} alt={productName} />
                            <p>Convenient order payment - by card or cash on delivery!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DishItem;
