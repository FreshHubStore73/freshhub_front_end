'use client';

import { MouseEventHandler } from 'react';
import { Button } from '@mui/material';

import { useShoppingCart } from '../../store';

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
        isInCart = dishes.findIndex((item) => item.id === dish.id) !== -1;
        content = isInCart ? '✓' : 'Add';
    }

    return (
        <Button
            variant="contained"
            disabled={isInCart}
            onClick={handleClick}
            type="submit"
            sx={{
                width: simple ? '174px' : '143px',
                height: simple ? '50px' : '41px',
                borderRadius: '50px',
                fontSize: simple ? '24px' : '16px',
                '&.MuiButtonBase-root.Mui-disabled': {
                    color: '#F15C30',
                    backgroundColor: 'white',
                    border: '1px solid #F15C30',
                },
            }}
        >
            {content}
        </Button>
    );
};

export default AddToCartButton;
