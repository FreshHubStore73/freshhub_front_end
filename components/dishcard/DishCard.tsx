import React from "react";
import styles from "./dishcard.module.scss";
// import Image from 'next/image';
import AddToCartButton from "../addToCartButton";
import Link from "next/link";
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
          href={`/${category}/${_id}/${title.replace(" ", "-")}`}
          className={styles.link}
        >
          <div className={styles.dishImg}>
            <img className={styles.img} src={picture} alt={"dishImg"} />
          </div>
          <div className={styles.dishTitleInfo}>
            <h3 className={styles.dishTitle}>{title}</h3>
            <p className={styles.dishWeight}>{weight}</p>
          </div>
          <p className={styles.dishDescr}>{descr}</p>
        </Link>
        <div className={styles.dishPrice}>
          <span className={styles.dishPrice}>${price}</span>
          <AddToCartButton dish={dish} simple={false} />
        </div>
      </div>
    </div>
  );
};

export default DishCard;
