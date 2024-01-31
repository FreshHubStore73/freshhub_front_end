"use client";
import { useState } from "react";
import NumberInput from "../numberInput";
import styles from "./dishItem.module.scss";
import Image from "next/image";
import AddToCartButton from "../addToCartButton";
import type { DishItem as DishItemType } from "../dishcard/DishCard";
import { useShoppingCart, type DishInCart } from "../../store/index";
// import { Oswald } from "next/font/google";
import Delivery from "@/public/images/delivery-truck.png";
import Card from "@/public/images/credit-card.png";

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
  //   const oswald = Oswald({
  //     subsets: ["latin"],
  //     weight: ["500", "700"],
  //   });

  return (
    <section className={styles.dishItem}>
      <div className={styles.wrapper}>
        <div className={styles.picture}>
          {/* <Image src={picture} alt={title} fill /> */}
          <img src={picture} alt={title} />
        </div>
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.contentInfo}>
            <div className={styles.titleInfo}>
              <h4>Ingredients</h4>
              <p className={styles.weight}>{weight}</p>
            </div>
            <p className={styles.description}>{descr}</p>
            <div className={styles.cardInfo}>
              <div className={styles.price}>${price}</div>
              <form onSubmit={(e) => onAddToCart(e)}>
                <div className={styles.inputWrapper}>
                  <NumberInput quantity={quantity} setQuantity={setQuantity} />
                  <AddToCartButton dish={dishToCart} />
                </div>
              </form>
            </div>
            <p className={styles.description}>
              Average delivery time / <span>55 min</span>
            </p>
            <div className={styles.delivery}>
              <img src="/images/delivery-truck.png" alt="Delivery truck" />
              <p>Free delivery</p>
            </div>
            <div className={styles.delivery}>
              <img src="/images/credit-card.png" alt="Credit card" />
              <p>Convenient order payment - by card or cash on delivery!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishItem;
