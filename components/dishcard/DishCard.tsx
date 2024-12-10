import Link from 'next/link';
import Image from 'next/image';

import AddToCartButton from '../addToCartButton';

import styles from './dishcard.module.scss';

type Props = {
    item: DishItem & { link: string };
};

const DishCard = ({ item }: Props) => {
    const { photoUrl, productName, link, price, description, weight } =
        item;

    return (
        <div className={styles.wrapper}>
            <Link href={link} className={styles.link}>
                <div className={styles.dishImg}>
                    <Image
                        className={styles.img}
                        src={photoUrl}
                        alt={productName}
                        fill
                        sizes="(max-w_th: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className={styles.dishTitleInfo}>
                    <h3 className={styles.dishTitle}>{productName}</h3>
                    <p className={styles.dishWeight}>{weight}g</p>
                </div>
                <p className={styles.dishDescr}>{description}</p>
                <div className={styles.dishPrice}>
                    <span className={styles.dishPrice}>${price}</span>
                    <AddToCartButton dish={{ ...item, quantity: 1 }} simple={false} />
                </div>
            </Link>
        </div>
    );
};

export default DishCard;
