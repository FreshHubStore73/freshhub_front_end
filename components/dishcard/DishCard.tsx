import Link from 'next/link';
import Image from 'next/image';

import AddToCartButton from '../addToCartButton';

import styles from './dishcard.module.scss';
const url = process.env.SERV_URL;

const DishCard = ({ item }: { item: DishItem }) => {
    const { id, photoUrl, productName, categoryId, price, description, weight, categoryName } =
        item;
    const link = `/categories/${categoryName.toLowerCase()}/${id}/${productName
        .toLowerCase()
        .replace(/\s+/g, '_')}`;
    const photo = (photoUrl || '/dishes/istockphoto-1206323282-612x612.jpg').replace(
        /Images\\/g,
        `${url}/Images/`,
    );
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <Link href={link} className={styles.link}>
                    <div className={styles.dishImg}>
                        <Image
                            className={styles.img}
                            src={photo}
                            alt={'dish image'}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        </div>
    );
};

export default DishCard;
