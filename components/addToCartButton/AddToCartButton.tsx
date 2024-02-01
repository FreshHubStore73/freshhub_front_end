'use client';

import { MouseEventHandler } from 'react';
import { Button } from '@mui/material';

import { useShoppingCart } from '../../store';
import type { DishInCart } from '../../store';

const AddToCartButton = ({ dish, simple = true }: { dish: DishInCart; simple?: boolean }) => {
    const addDish = useShoppingCart((state) => state.addDish);
    const dishes = useShoppingCart((state) => state.dishes);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!simple) e.preventDefault();
        addDish(dish);
    };

    let content, isInCart;
    if (simple) {
        content = 'Add';
    } else {
        isInCart = dishes.findIndex((item) => item.dishId === dish.dishId) !== -1;
        content = isInCart ? '✓' : 'Add';
    }

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
                padding: simple ? '10px 64px' : '6px 44px',
                transition: 'none',
                '&.MuiButtonBase-root:hover': {
                    backgroundColor: 'accent.main',
                },
                '&.MuiButtonBase-root:disabled': {
                    color: '#F15C30',
                    backgroundColor: 'white',
                    border: '2px solid #F15C30',
                },
            }}
        >
            {content}
        </Button>
    );
};

export default AddToCartButton;
