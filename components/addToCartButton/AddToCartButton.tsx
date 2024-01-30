'use client';
import { MouseEventHandler, useEffect } from 'react';
import styles from './addToCart.module.scss';
import shallow from 'zustand/shallow';
import { useShoppingCart } from '../../store';
import type { DishInCart } from '../../store';
import { Button } from '@mui/material';

const AddToCartButton = ({ dish, simple = true }: { dish: DishInCart; simple?: boolean }) => {
    const addDish = useShoppingCart((state) => state.addDish);
    const dishes = useShoppingCart((state) => state.dishes);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        addDish(dish);
    };

    let content, isInCart;
    if (simple) {
        content = 'Add';
    } else {
        isInCart = dishes.findIndex((item) => item.dishId === dish.dishId) !== -1;
        content = isInCart ? '✓' : 'Add';
    }

    console.log('added to cart');

    return (
        <Button
            variant="contained"
            color="success"
            disabled={isInCart}
            onClick={handleClick}
            type="submit"
            sx={{
                width: simple ? '174px' : '143px',
                height: simple ? '50px' : '41px',
                borderRadius: '50px',
                fontSize: simple ? '24px' : '16px',
                fontWeight: '400',
                padding: simple ? '6px 44px' : '10px 64px',
                '&.MuiButtonBase-root:hover': {
                    backgroundColor: 'accent.main',
                },
            }}
        >
            {content}
        </Button>
    );
};

export default AddToCartButton;
