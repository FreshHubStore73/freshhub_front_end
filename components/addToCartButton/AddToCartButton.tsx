"use client";
import { MouseEventHandler } from "react";
import styles from "./addToCart.module.scss";
import shallow from "zustand/shallow";
import { useShoppingCart } from "../../store";
import type { DishInCart } from "../../store";

const AddToCartButton = ({ dish }: { dish: DishInCart }) => {
  const addDish = useShoppingCart((state) => state.addDish);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    // e.preventDefault();
    addDish(dish);
  };

  return (
    <button className={styles.addToCard} onClick={handleClick} type="submit">
      Add
    </button>
  );
};

export default AddToCartButton;
